"use strict";

var tictactoe = tictactoe || {};

tictactoe.pageObject = function(parameters){
    var that = {};

    var document = parameters.document;
    var elementIds = parameters.elementIds;

    that.boardElements = function() {
        var elements = [];
        elementIds.forEach(function(elementId){
            elements.push(document.getElementById(elementId));
        })
        return elements;
    }

    that.indexOfCell = function(id) {
        return elementIds.indexOf(id) + 1;
    }

    return that;
};