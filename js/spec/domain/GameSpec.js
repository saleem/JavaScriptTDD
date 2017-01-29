describe("Game", function () {
    var nameSpace = require("../../spec/support/nameSpace");
    var tictactoe = nameSpace("src/domain/Game.js");

    var playerOne;
    var playerTwo;
    var game;

    beforeEach(function () {
        playerOne = jasmine.createSpyObj("player", ["makeMove"]);
        playerTwo = jasmine.createSpyObj("player", ["makeMove"]);

        game = tictactoe.game({
            playerOne: playerOne,
            playerTwo: playerTwo,
            currentPlayer: playerOne
        });
    });

    it("should make current player move when taking one turn", function () {
        game.takeTurn();

        expect(playerOne.makeMove).toHaveBeenCalled();
    });

    it("should make other player move when taking two turns", function () {
        game.takeTurn();
        game.takeTurn();

        expect(playerTwo.makeMove).toHaveBeenCalled();
    });

});