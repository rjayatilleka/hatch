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
        <h3 class="bold">Start matching!</h3>
        @foreach ($users as $user)
            <a href="{{{ $user->username }}}">
                <img src="{{{ $user->avatar_url }}}" width="50" height="50"> <br/>
                Name: {{{ $user->firstname }}} <br/>
                Job: {{{ $user->job }}} <br/>
            </a>
            <a href="../{{{ $user->username }}}">Get Personal Profile</a>
            <hr/>
        @endforeach
    </div>
@stop