IndexView = Backbone.View.extend({
    defaults: function(){
        this.school = '';
        this.professor = '';
        this.class = '';
        this.semester = '';
        this.model = new IndexModel();
        this.flag = 'school';
    },
    initialize: function(){
        this.defaults();
        this.render();
        this.bindModelEvents();
    },
    render: function($t, selector){
        if(typeof $t === 'undefined'){
            var $t = $('#find_school');
        }
        var template = _.template($t.html(), {});
        if(typeof selector === 'undefined'){
            this.$el.html(template);
        }
        else{
            this.$el.find(selector).html(template);
        }
    },
    events: {
        'click .school_btn' : "schoolBtnAction",
        'click .prof_class_btn' : "profClassBtnAction",
        'click .list-group-item.class' : 'selectClassAction',
        'click .list-group-item.semester' : 'selectSemesterAction',
    },
    bindModelEvents: function(){
        var _self = this;
        this.model.on('change', function(){
            var changed = _self.model.changed;
            var key, d_json;
            var create_suggestions = false;
            for(key in changed){
                if(key === 'schools'){
                    _self.createSuggestions(changed[key], 'schools');
                    _self.bindSearchBoxEvents();
                    break;
                }
                else if(key === 'professor'){
                    _self.createSuggestions(changed[key], 'professors');
                    _self.bindSearchBoxEvents();
                    break;
                }
                else if(key === 'classes'){
                    _self.appendToList(changed[key], 'class');
                    break;
                }
                else if(key === 'semesters'){
                    _self.appendToList(changed[key], 'semester');
                    break;
                }
            }
        });
    },
    createSuggestions: function(d_json, type){
        var an_array = [];
        if(type === 'schools'){
            for(var i in d_json){
                an_array.push(d_json[i].SchoolName);
            }
        }
        else if(type === 'professors'){
            for(var i in d_json){
                an_array.push(d_json[i].first_name + ' ' + d_json[i].last_name);
            }
        }
        
        new BloodhoundSuggestions(an_array);
    },
    bindSearchBoxEvents: function(){
        var _self = this;
        $('.school_input.tt-input, .prof_class_input.tt-input').keypress(function(event, parent){
            // UGLY HACK: I dont know how to target the view 'this',
            // so I am using the global variable 'hack', which is equal
            // to this view
            _self.handleKeypress(_self, event);
        });
        $('.search_box.tt-input').focus();
    },
    appendToList: function(d_json, type_of_item){
       // var an_array = [];
        var template;
        var count = 0;
        for(var key in d_json){
            t = "<a class='list-group-item " +type_of_item+" "+count+"'></a>";
            template = _.template(t, {});
            this.$el.find('.list-group').append(template);
            var selector = '.list-group-item.'+type_of_item+'.' + count;
            if(type_of_item === 'class'){
                this.$el.find(selector).html(d_json[key].className);
            }
            if(type_of_item === 'semester'){
                this.$el.find(selector).html(d_json[key].semester);
            }
            count++;
        }
    },
    schoolBtnAction: function(){
        this.school = $('.school_input.tt-input').val();
        this.render($('#second_input_template'), '.textbox_container');
        $('.prof_class_input.tt-input').focus();
        $('.school_name').html(this.school);
        this.model.retrieveProfessorList(this.school);
        this.bindSearchBoxEvents();
    },
    profClassBtnAction: function(){
        var _self = this;
        this.professor = $('.prof_class_input.tt-input').val();
        this.render($('#find_prof-class'));
        $('.search_container').css('padding', '0px');
        $('.search_container').css('width', '350px');
        $('.school_name').html(this.school);
        this.model.retrieveClassList(_self.school, _self.professor);
        $('.professor_name').html(this.professor);
    },
    selectClassAction: function(event){
        var _self = this;
        $ev = $(event.currentTarget);
        this.class = $ev.text();
        $ev.addClass('active');
        this.render($('#find_semester'));
        $('.school_name').html(this.school);
        $('.professor_name').html(this.professor);
        this.model.retrieveSemesterList(_self.school, _self.class, _self.professor);
        $('.class_name').html(this.class);
    },
    selectSemesterAction: function(event){
        $ev = $(event.currentTarget);
        this.semester = $ev.text();
        $ev.addClass('active');
        $('.list-group-item').removeClass('active');
        var args = {school: this.school,
                    prof: this.professor,
                    class: this.class,
                    semester: this.semester,
                    submitted: false};
        var parameters = this.makeURLParameters(args);
        window.location.href = 'solutions' + parameters;
    },
    handleKeypress: function(_self, event){
        if(event.which === 13){
            event.preventDefault();
            if(this.flag === 'school'){
                _self.flag = 'prof_class';
                _self.schoolBtnAction();
            }
            else if(this.flag === 'prof_class'){
                _self.profClassBtnAction();
            }
        }
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
    },
});

$(document).ready(function(){
    var index_view = new IndexView({el: $('.search_container')});
});