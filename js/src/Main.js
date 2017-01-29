"use strict";

var tictactoe = tictactoe || {};

var input = tictactoe.input();
var boardState = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
var board = tictactoe.board({cells: boardState});
var elementIds = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
var pageObject = tictactoe.pageObject({document: document, elementIds: elementIds, boardState: boardState});
var playerOne = tictactoe.player({symbol: "X", board: board, input: input});
var playerTwo = tictactoe.player({symbol: "O", board: board, input: input});
var binder = tictactoe.binder({pageObject: pageObject, boardState: boardState, input: input});
var game = tictactoe.game({
    playerOne: playerOne,
    playerTwo: playerTwo,
    currentPlayer: playerOne
});

var cellEventListener = tictactoe.cellEventListener({
    game: game,
    binder: binder
});

tictactoe.boardElement = document.getElementById("board");
tictactoe.boardElement.addEventListener("click", cellEventListener.handle);
