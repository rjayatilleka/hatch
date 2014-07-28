<?php

Route::get('jsonList', "APIController@getList");
Route::get('jsonLogin', "APIController@getLogin");

Route::get('/', "LandingPageController@displayPage");
Route::get('signup', "SignUpController@displayPage");
Route::get('login', "LogInController@displayPage");
Route::get('userList', "UserListController@displayPage");
Route::get('userList/{username}', "UserListController@displayPage");
Route::get('{username}', "ProfileController@displayPage");

Route::get('hello', "APIController@showWelcome");
Route::post('registerUser', "APIController@handleRegistration");
Route::post('tryLogin', "APIController@handleLogin");
Route::get('retrieveList', "APIController@retrieveList");
