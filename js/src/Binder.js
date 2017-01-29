"use strict";

var tictactoe = tictactoe || {};

tictactoe.binder = function(parameters){
    var that = {};
    var pageObject = parameters.pageObject;
    var boardState = parameters.boardState;
    var input = parameters.input;

    that.bindResults = function() {
        var index = 0;
        var boardElements = pageObject.boardElements();
        boardElements.forEach(function(element){
            element.innerHTML = boardState[index++];
        });
    };

    that.applyEvent = function(event) {
        var targetElement = event.target;

        input.tryMove(pageObject.indexOfCell(targetElement.id));
    };

    return that;
};