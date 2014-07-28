<?php

class SignUpController extends BaseController {
    public function displayPage() {
        return View::make('signUp');
    }
}
