<?php

class LandingPageController extends BaseController {
    public function displayPage() {
        return View::make('landing');
    }
}
