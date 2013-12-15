window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.Router.map(function(){
    this.route('world');
});

App.Router.reopen({
    location: 'history'
});

App.BackboneView = Ember.View.extend({
    templateName: 'backbone',
    didInsertElement: function(){
        require(['js/main']);
    }
});