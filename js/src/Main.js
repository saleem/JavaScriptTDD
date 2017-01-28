"use strict";

var tictactoe = tictactoe || {};

var input = tictactoe.input();
var board = tictactoe.board({cells: [" ", " ", " ", " ", " ", " ", " ", " ", " "]});
var playerOne = tictactoe.player({symbol: "X", board: board, input: input});
var playerTwo = tictactoe.player({symbol: "O", board: board, input: input});
var game = tictactoe.game({
    playerOne: playerOne,
    playerTwo: playerTwo,
    currentPlayer: playerOne
});

var players = [playerOne, playerTwo];
var cellEventListener = tictactoe.cellEventListener({
    players: players,
    game: game
});

tictactoe.boardElement = document.getElementById("board");
tictactoe.boardElement.addEventListener("click", cellEventListener.handle);
