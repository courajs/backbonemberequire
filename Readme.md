Backbone-Ember-Require
==================

Using an existing requirejs/backbone app as a subcomponent of an ember app

This was my spike I used to figure out how to integrate our requirejs/backbonejs app with Ember, using the Ember router.

Running
To run, you need to serve it using a web server. file:// urls won't work, since I use absolute paths.
I recommend [local-web-server](http://github.com/75lb/local-web-server). If you use something else, your last two steps may be different.

`git clone https://github.com/FellowMD/backbonemberequire.git`  
`cd backbonemberequire`  
`bower install`  
`ws`
  
Then navigate to `http://localhost:8000`
