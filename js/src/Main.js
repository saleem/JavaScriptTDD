"use strict";

var tictactoe = tictactoe || {};

var input = tictactoe.input();
var boardState = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
var board = tictactoe.board({cells: boardState});
var elementIds = ["cell1", "cell2", "cell3", "cell4", "cell5", "cell6", "cell7", "cell8", "cell9"];
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
