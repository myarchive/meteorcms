/*
* 
* The routing file using backbonejs
*/

var Router = Backbone.Router.extend({
    routes: {    
        "" : "page", // Home function
        ":page" : "page" // Other pages function
    },
    page: function(page) {
   /*     if (!page) {
            TL.info("Request route: index", "Backbone Routing");
        } else {
            TL.info("Request route: " + page, "Backbone Routing");
        }*/
        Session.set('page', page);
    }
});

// Initialize Backbone routing
var app = new Router;
Meteor.startup(function () {
    Backbone.history.start({pushState: true})
});