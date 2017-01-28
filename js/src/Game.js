"use strict";

var tictactoe = tictactoe || {};

tictactoe.game = function(parameters){
    var that = {};
    var playerOne = parameters.playerOne;
    var playerTwo = parameters.playerTwo;
    var currentPlayer = parameters.currentPlayer;

    that.takeTurn = function() {
        currentPlayer.makeMove();

        if (currentPlayer === playerOne) {
            currentPlayer = playerTwo;
        } else {
            currentPlayer = playerOne;
        }
    };

    return that;
};