describe("Player", function () {
    var nameSpace = require("../spec/support/nameSpace");
    var tictactoe = nameSpace("src/Player.js");

    var cell;
    var board;
    var input;

    beforeEach(function () {
        cell = {};
        board = jasmine.createSpyObj("board", ["mark"]);
        input = {};
    });


    it("should mark board in cell from input", function () {
        input = jasmine.createSpyObj("input", ["validMove"]);
        input.validMove.and.returnValue(1);
        var player = tictactoe.player({symbol: "X", board: board, input: input});

        player.makeMove();

        expect(board.mark).toHaveBeenCalledWith(1, "X");
    });

    it("should mark board with player's symbol", function () {
        input = jasmine.createSpyObj("input", ["validMove"]);
        input.validMove.and.returnValue(1);
        var player = tictactoe.player({symbol: "O", board: board, input: input});

        player.makeMove();

        expect(board.mark).toHaveBeenCalledWith(1, "O");
    });
});