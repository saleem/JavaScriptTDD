"use strict";

var tictactoe = tictactoe || {};

tictactoe.player = function(parameters){
    var that = {};

    var symbol = parameters.symbol;

    that.move = function(cell) {
        cell.innerHTML = symbol;
    };

    return that;
};

module.exports = tictactoe;