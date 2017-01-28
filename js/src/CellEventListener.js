"use strict";

var tictactoe = tictactoe || {};

tictactoe.cellEventListener = function(parameters){
    var that = {};
    var players = parameters.players;
    var game = parameters.game;


    var currentPlayer = 0;

    that.handle = function(eventToHandle) {
        game.takeTurn();


        if (!eventToHandle.target.innerHTML){
            players[currentPlayer].move(eventToHandle.target);
        }
        currentPlayer = ++currentPlayer%2;
    };

    return that;
};