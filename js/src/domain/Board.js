"use strict";

var tictactoe = tictactoe || {};

tictactoe.board = function(parameters){
    var that = {};

    var cells = parameters.cells;

    that.displayMessage = function() {
       displayMessage("Na na na na, hey hey hey, good try!\n");
    };

    that.mark = function(cellIndex, symbol) {
        if(isEmpty(cells[cellIndex-1])) {
            cells[cellIndex-1] = symbol;
            return true;
        }
        else {
           this.displayMessage();
           return false;
        }
    };
    return that;

};

function isEmpty(cell) {
    return !cell || 0 === cell.length || !cell.trim()
}

function displayMessage(msg) {
    // print message somehow
}
