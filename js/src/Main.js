"use strict";

var game = game || {};

game.board = document.getElementById("board");

var playerOne = game.player({symbol: "X"});
var playerTwo = game.player({symbol: "O"});
var players = [playerOne, playerTwo];

game.board.addEventListener("click", game.cellEventListener({players: players}).handle);
