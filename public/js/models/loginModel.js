LoginModel = Backbone.Model.extend({
    defaults: {
        status: '',
    },
    initialize: function(){
    },
    verifyInformation: function(username, password){
        var _self = this;
        $.ajax({
            type: 'POST',
            url: 'tryLogin',
            data: {username: username,
                   password: password},
            success: function(data){
                alert(data);
            }
        });
    },
});