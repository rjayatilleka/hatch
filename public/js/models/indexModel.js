IndexModel = Backbone.Model.extend({
    defaults: {
        schools: '',
        professor: '',
        classes: '',
        semesters: '',
    },
    initialize: function(){
        this.retrieveSchoolList();
    },
    retrieveSchoolList: function(){
        var parent = this;
        $.ajax({
            type: 'GET',
            url: 'getSchools',
            data: {},
            success: function(data){
                parent.set('schools', jQuery.parseJSON(data));
            }
        });
    },
    retrieveProfessorList: function(school_name){
        var parent = this;
        $.ajax({
            type: 'GET',
            url: 'getProfessors',
            data: {school_name: school_name},
            success: function(data){
                parent.set('professor', jQuery.parseJSON(data));
            }
        });
    },
    retrieveClassList: function(school, professor){
        var parent = this;
        var method = 'retrieveClassList';
        $.ajax({
            type: 'GET',
            url: 'getClasses',
            data: {school_name: school,
                   professor_name: professor},
            success: function(data){
                parent.set('classes', jQuery.parseJSON(data));
            }
        });
    },
    retrieveSemesterList: function(school_name, class_name, professor_name){
        var parent = this;
        $.ajax({
            type: 'GET',
            url: 'getSemesters',
            data: {school_name: school_name,
                   professor_name: professor_name,
                   class_name: class_name,},
            success: function(data){
                parent.set('semesters', jQuery.parseJSON(data));
            }
        });
    }
});