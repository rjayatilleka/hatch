<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hatch</title>
        <!-- Libraries from other places -->
    <link href="twitter_bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="js/core/jquery-min.js"></script>
    <script src="js/core/underscore-min.js"></script>
    <script src="js/core/backbone-min.js"></script>
    @yield('css')
    @yield('javascript')
</head>
<body>
    <!-- Fixed navbar 
    <div class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand site_logo" href="user_homepage.php">TestBar</a>
            </div>
          <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="doodyloop">My Profile</a></li>
                    <li><a href="userList">User List</a></li>
                    <li><a href="login">Login</a></li>
                    <li><a href="signup"class='sign_out'>Sign Up</a></li>
                </ul>
          </div>
        </div>
    </div>-->
    @yield('content')
</body>
</html>
