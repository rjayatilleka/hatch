<?php

class UserListController extends BaseController {
    public function displayPage() {
        $users = APIController::retrieveList();
        return View::make('userList')->with('users', $users);
    }
    public function displayWithUserPage($username) {
        $users = APIController::retrieveListWithUsername($username);
        return View::make('userList')->with('users', $users);
    }
}
