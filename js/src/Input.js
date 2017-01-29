"use strict";

var tictactoe = tictactoe || {};

tictactoe.input = function(parameters){
    var that = {};

    var move = -1;

    that.validMove = function() {
        return move;
    };

    that.tryMove = function(cellIndex) {
        move = cellIndex;
    };

    return that;
};