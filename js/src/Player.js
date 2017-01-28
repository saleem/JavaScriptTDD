"use strict";

var tictactoe = tictactoe || {};

tictactoe.player = function(parameters){
    var that = {};

    var symbol = parameters.symbol;
    var board = parameters.board;
    var input = parameters.input;

    that.makeMove = function() {
        board.mark(input.validMove(), "X");
    };

    that.move = function(cell) {
        cell.innerHTML = symbol;
    };

    return that;
};