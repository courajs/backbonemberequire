define([
    'jQuery',
    'backbone'],

    function($, Backbone){
        return Backbone.View.extend({
            initialize: function(options){
                this.$el.append('<input type="text"></input>')
                        .append('<span id="output"></span>');
            },
            events: {
                'change input[type=text]': 'update'
            },
            update: function(){
                this.$el.find('#output').html(this.$el.find('input').val());
            }

        })
    });