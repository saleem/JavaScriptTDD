"use strict";

var tictactoe = tictactoe || {};

tictactoe.cellEventListener = function(parameters){
    var that = {};
    var game = parameters.game;
    var binder = parameters.binder;

    that.handle = function(eventToHandle) {
        binder.applyEvent(eventToHandle);
        game.takeTurn();
        binder.bindResults();
    };

    return that;
};