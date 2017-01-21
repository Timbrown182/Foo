/**
 * @file Application Router and Controller
 * @author A. Developer
 * @module router
**/
define(function(require, exports) {
    'use strict';

    var Marionette = require('backbone.marionette');

    /**
     * @name RouterController
     * @constructor
     * @extends Marionette.Object
     * @prop {function} foo Example callback function to be called by ExampleAppRouter
    **/
    var RouterController = Marionette.Object.extend({
        showHome: function() {
            console.log("Inside /home");
        },
        showAboutUs: function() {
            console.log("Inside /about");
        },
        showRSVP: function() {
          console.log("Inside /rsvp");
        },
        showCeremony: function() {
            console.log("Inside /info");
        },
        showRegistry: function() {
            console.log("Inside /registry");
        }
    });
    /**
     * @name ExampleAppRouter
     * @description Example application router
     * @constructor
     * @extends Marionette.AppRouter
     * @prop {object} appRoutes
     * @prop {string} appRoutes.foo
    **/
    var ExampleAppRouter = Marionette.AppRouter.extend({
        appRoutes: {
            'home': 'showHome',
            'about': 'showAboutUs',
            'register': 'showRSVP',
            'ceremony': 'showCeremony',
            'registry': 'showRegistry'
        },
        controller: new RouterController()
    });

    exports.Controller = RouterController;
    exports.Router     = ExampleAppRouter;
});
