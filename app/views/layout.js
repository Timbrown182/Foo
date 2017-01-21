/**
 * @file layout MarionetteJS View module
 * @author Tim Brown
 * @module views/layout
 * @requires models/example
**/
define(function(require, exports, module) {
    'use strict';

    var Marionette = require('backbone.marionette');
    var Handlebars = require('handlebars');
    var Example    = require('models/example');
    var template    = require('text!../assets/templates/layout.html');

    /**
     * @name LayoutView
     * @description Layout view
     * @constructor
     * @extends Marionette.View
    **/
    var LayoutView = Marionette.View.extend({
        //view code goes here
        template: template,
        model: new Example.Model()
    });

    module.exports = LayoutView;
});
