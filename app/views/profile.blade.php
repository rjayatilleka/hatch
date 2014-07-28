@extends('layout')

@section('javascript')
@stop

@section('css')
    <link href="css/profile.css" rel="stylesheet">
@stop

@section('content')
    <div class="profile_container">
        <img class="cover_img" src="http://4photos.net/blog/wp-content/uploads/Mount-Rainier-Wallpaper-.jpeg">
        <img class="profile_img" src="{{{ $info[0]->avatar_url }}}">
        <div class="name title">{{{$info[0]->firstname}}}</div>
        <div class="job">{{{$info[0]->job}}}</div>
        <button class="idea_btn btn btn-default"> I have an Idea. Join me! </button>
        <hr>
        <div class="skills title">Skills</div>
        <div class="current_skills">
            @foreach ($info["skills"] as $skill)
                {{{ $skill->skill }}}, 
            @endforeach
        </div>
        <button class="add_skills_btn btn btn-default">Add Skills</button>
    </div>
@stop
