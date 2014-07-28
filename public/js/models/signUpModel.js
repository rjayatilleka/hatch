SignUpModel = Backbone.Model.extend({
    defaults: {
        status: '',
    },
    initialize: function(){
    },
    registerUser: function(args){
        var _self = this;
        $.ajax({
            type: 'POST',
            url: 'registerUser',
            data: {
                username: args.username,
                password: args.password,
                email: args.email,
                phone: args.phone,
                firstname: args.firstname,
                lastname: args.lastname,
                avatar_url: args.avatar_url,
                job: args.job,
                skills: args.skills,
                interest: args.interest,
            },
            success: function(data){
                console.log(data);
            }
        });
    },
});