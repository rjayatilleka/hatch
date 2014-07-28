LoginView = Backbone.View.extend({
    defaults: function(){
        this.model = new LoginModel();
    },
    initialize: function(){
        this.defaults();
        this.bindEvents();
    },
    render: function($t){
        if(typeof $t === 'undefined'){
            console.error('error - no template provided');
            return;
        }
        var template = _.template($t.html(), {});
        this.$el.html(template);
    },
    events: {
        'click .sign_in_btn' : 'signInBtnAction'
    },
    bindEvents: function(){
        var _self = this;
        $('.username_input, .password_input').keypress(function(event){
            _self.handleKeypress(event);
        });
        this.model.on('change', function(){
            var changed = _self.model.changed;
            if(changed.status[0] == 'accepted'){
                window.location.href = 'user_homepage.php';
            }
        })
    },
    handleKeypress: function(event){
        var _self = this;
        if(event.which === 13){
            event.preventDefault();
            _self.signInBtnAction();
        }
    },
    signInBtnAction: function(){
        var username = $('.username_input').val();
        var password = $('.password_input').val();
        var args = {'username': username,
            'password': password};
        this.model.verifyInformation(username, password);
    },
    makeURLParameters: function(args){
        var url = '?';
        $.each(args, function(key, elem){
            url += key + '=' + elem + '&';
        });
        return url;
    },
    replaceClass: function($selector, old_class, new_class){
        $selector.addClass(new_class);
        $selector.removeClass(old_class);
    },
    clearInputAndChangePlaceholder: function($selector, new_placeholder){
        $selector.val('');
        $selector.attr('placeholder', new_placeholder);
    }
});

$(document).ready(function(){
    var login = new LoginView({el: $('.login_container')});
    $('.username_input').focus();
});