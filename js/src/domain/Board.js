"use strict";

var tictactoe = tictactoe || {};

tictactoe.board = function(parameters){
    var that = {};

    var cells = parameters.cells;

    that.mark = function(cellIndex, symbol) {
        cells[cellIndex-1] = symbol;
    };

    return that;
};