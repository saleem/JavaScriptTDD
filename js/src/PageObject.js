"use strict";

var tictactoe = tictactoe || {};

tictactoe.pageObject = function(parameters){
    var that = {};

    var document = parameters.document;
    var elementIds = parameters.elementIds;
    var boardState = parameters.boardState;

    that.updateBoard = function() {
        var index = 0;
        elementIds.forEach(function(elementId){
            document.getElementById(elementId).innerHTML = boardState[index++];
        });
    };

    that.indexOfCell = function(id) {
        return elementIds.indexOf(id) + 1;
    }

    return that;
};