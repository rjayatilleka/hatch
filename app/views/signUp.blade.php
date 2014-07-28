@extends('layout')

@section('javascript')    
    <script src="js/views/signUpView.js"></script>
    <script src="js/models/signUpModel.js"></script>
@stop

@section('css')
    <link href="css/login.css" rel="stylesheet">
    <link href="css/signup.css" rel="stylesheet">
@stop

@section('content')
    <div class="login_container">
        <h3 class="bold">Sign up to Hatch</h3>
        <div class="input_container text-center">
            <input class="username_input form-control" placeholder="Username">
            <input type="password" class="password_input form-control" placeholder="Password">
            <input type="email" class="email_input form-control" placeholder="Email">
            <input type="phone" class="phone_input form-control" placeholder="Phone">
            <input type="firstname" class="firstname_input form-control" placeholder="Firstname">
            <input type="lastname" class="lastname_input form-control" placeholder="Lastname">
            <input type="avatar_url" class="avatar_url_input form-control" placeholder="Avatar_url">
            <input type="job" class="job_input form-control" placeholder="Job">
            <input type="job" class="skills_input form-control" placeholder="Job">
            <input type="job" class="interest_input form-control" placeholder="Job">
        </div>
        <div class="login_button_container">
            <button type="button" class="sign_in_btn btn btn-primary">Sign Up!</button>
        </div>
    </div>
@stop
