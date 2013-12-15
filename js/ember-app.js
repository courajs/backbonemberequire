window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.Router.map(function(){
    this.resource('world', function(){
        this.route('withstate',{path: '/*splat'});
    });
});

App.WorldWithstateRoute = Ember.Route.extend({
    model: function(params){
        return params;
    }
});

App.BackboneView = Ember.View.extend({
    templateName: 'backbone',
    didInsertElement: function(){
        require(['js/main']);
    }
});