"use strict";

var tictactoe = tictactoe || {};

tictactoe.board = function(parameters){
    var that = {};

    var cells = parameters.cells;

    that.mark = function(cellIndex, symbol) {
        if(isEmpty(cells[cellIndex-1])) {
            cells[cellIndex-1] = symbol;
        }
    };

    return that;
};

function isEmpty(cell) {
    return !cell || 0 === cell.length || !cell.trim()
}
