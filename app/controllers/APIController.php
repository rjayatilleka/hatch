<?php

class APIController extends BaseController {
    public function showWelcome() {
	return "Hey";
        $query = "SELECT * FROM users;";

        $response = DB::select($query);
        $json = json_encode($response, JSON_FORCE_OBJECT);
        return $response;
    }

    public static function getDetailedInfo($username) {
        $profile = DB::table('user_profiles')->select('username', 'firstname', 'lastname', 'email', 'phone', 'avatar_url', 'job')->where('username', $username)->get();
        $userid = DB::table('user_profiles')->where('username', $username)->pluck('userid');
        $skills = DB::table('user_skills')->where('userid', $userid)->get();

        $profile['skills'] = $skills;
        return $profile;
    }

    public static function retrieveList() {
        $response = DB::table('user_profiles')->select('username', 'firstname', 'avatar_url', 'job')->get();

        return $response;
    }

    public function getList() {
        $username = Input::get('username');
        $response = DB::table('user_profiles')->select('username', 'firstname', 'avatar_url', 'job', 'email')->where('username', '<>', $username)->get();

        return json_encode($response);
    }

    public function getLogin()
    {
        $username = Input::get('username');

        $actual_password = DB::table('user_profiles')->where('username', $username)->pluck('password');
        if ($actual_password !== Input::get('password')) {
            return "{\"success\":\"false\", \"message\":\"Authentication failed\"}";
        }

        $selfuser = DB::table('user_profiles')->select('firstname', 'lastname', 'avatar_url')->where('username', $username)->get();
        $otherusers = DB::table('user_profiles')->select('username', 'firstname', 'avatar_url', 'job', 'email', 'skills', 'interest')->where('username', '<>', $username)->get();

        return json_encode(array('success' => 'true', 'userData' => $selfuser, 'userList' => $otherusers));

    }

    public function handleLogin()
    {
        $actual_password = DB::table('user_profiles')->where('username', Input::get('username'))->pluck('password');
        if ($actual_password === Input::get('password')) {
            return "SUCCESS";
        } else {
            return "FAILURE";
        }
    }

    public function handleRegistration()
    {
        DB::table('user_profiles')->insert(
            array('username' => Input::get('username'),
                  'password' => Input::get('password'),
                  'email' => Input::get('email'),
                  'phone' => Input::get('phone'),
                  'firstname' => Input::get('firstname'),
                  'lastname' => Input::get('lastname'),
                  'avatar_url' => Input::get('avatar_url'),
                  'job' => Input::get('job')));

        return "success";
    }

}
