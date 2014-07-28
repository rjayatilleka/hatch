SignIn = Backbone.View.extend({
    initialize: function(data){
    },
    events: {
        'click .sign_in': 'signInAction',
        'click .sign_out': 'signOutAction',
    },
    signInAction: function(){
        // signed in
    },
    signOutAction: function(){
        // signed out
    },
});

$(document).ready(function(){
    var sign_in = new SignIn({el: $('.nav.navbar-right')});
});