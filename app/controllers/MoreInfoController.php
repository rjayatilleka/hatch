<?php

class MoreInfoController extends BaseController {

    public function displayPage($username) {
        $info = APIController::getDetailedInfo($username);
        return View::make('moreInfo')->with('info', $info);
    }
}
