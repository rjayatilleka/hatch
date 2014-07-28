BloodhoundSuggestions = Backbone.Model.extend({
    defaults: {
        bloodhound: '',
    },
    initialize: function(data){
        this.initBloodhoundEngine(data);
        this.bindEvents();        
    },
    bindEvents: function(){
        $('#bloodhound .typeahead').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        },
        {
            name: 'states',
            displayKey: 'value',
            // `ttAdapter` wraps the suggestion engine in an adapter that
            // is compatible with the typeahead jQuery plugin
            source: this.bloodhound.ttAdapter()
        });
    },
    initBloodhoundEngine: function(data){
        if(typeof data === 'undefined'){
            console.error('data is undefined')
        }
        // constructs the suggestion engine
        this.bloodhound = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            // `states` is an array of state names defined in "The Basics"
            local: $.map(data, function(state) { return { value: state }; })
        });
        
        // kicks off the loading/processing of `local` and `prefetch`
        this.bloodhound.initialize();
    },
    reinitialize: function(data){
        this.initialize(data);
    }
});