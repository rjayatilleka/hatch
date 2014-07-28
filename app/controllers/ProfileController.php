<?php

class ProfileController extends BaseController {
    public function displayPage($username) {
        $info = APIController::getDetailedInfo($username);
        return View::make('profile')->with('info', $info);
    }
}
