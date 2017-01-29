"use strict";

var tictactoe = tictactoe || {};

tictactoe.cellEventListener = function(parameters){
    var that = {};
    var players = parameters.players;
    var game = parameters.game;
    var binder = parameters.binder;

    var currentPlayer = 0;

    that.handle = function(eventToHandle) {
        binder.applyEvent(eventToHandle);
        game.takeTurn();
        binder.bindResults();

        // if (!eventToHandle.target.innerHTML){
        //     players[currentPlayer].move(eventToHandle.target);
        // }
        // currentPlayer = ++currentPlayer%2;
    };

    return that;
};