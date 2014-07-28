@extends('layout')

@section('javascript')
@stop

@section('css')
    <link href="css/login.css" rel="stylesheet">
@stop

@section('content')
    <div class="login_container">
        <h3 class="bold">More Information</h3>
        <img src="{{{ $info[0]->avatar_url }}}" width="50" height="50"> <br/>
        Name: {{{$info[0]->firstname}}} {{{$info[0]->lastname}}} <br/>
        Email: {{{$info[0]->email}}} <br/>
        Phone: {{{$info[0]->phone}}} <br/>
        Job: {{{$info[0]->job}}} <br/>
        Skills: 
        @foreach ($info["skills"] as $skill)
            {{{ $skill->skill }}}, 
        @endforeach
    </div>
@stop