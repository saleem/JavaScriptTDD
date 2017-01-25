"use strict";

var tictactoe = tictactoe || {};

tictactoe.board = document.getElementById("board");

var playerOne = tictactoe.player({symbol: "X"});
var playerTwo = tictactoe.player({symbol: "O"});
var players = [playerOne, playerTwo];
var game = tictactoe.game();
var cellEventListener = tictactoe.cellEventListener({
    players: players,
    game: game
});

tictactoe.board.addEventListener("click", cellEventListener.handle);
