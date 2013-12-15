require.config({

    baseUrl: '/',
    paths: {
        jQuery: 'bower_components/jquery/jquery',
        backbone: 'bower_components/backbone/backbone',
        underscore: 'bower_components/underscore/underscore'
    },

    shim: {
        'backbone':{
            deps:['underscore','jQuery'],
            exports: 'Backbone'
        },
        'jQuery':{
            exports: '$'
        }
    }
    ,waitSeconds: 30

});
