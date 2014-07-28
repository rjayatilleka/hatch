@extends('layout')

@section('javascript')    
    <script src="js/views/loginView.js"></script>
    <script src="js/models/loginModel.js"></script>
@stop

@section('css')
    <link href="css/login.css" rel="stylesheet">
@stop

@section('content')
    <div class="login_container">
        <h3 class="bold">Log In to Hatch</h3>
        <div class="input_container text-center">
            <input class="username_input form-control" placeholder="Username">
            <input type="password" class="password_input form-control" placeholder="Password">
        </div>
        <div class="login_button_container">
            <button type="button" class="sign_in_btn btn btn-primary">Sign In</button>
        </div>
    </div>
@stop