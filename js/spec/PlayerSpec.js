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


    it("mark board in cell from input", function () {
        input = jasmine.createSpyObj("input", ["validMove"]);
        input.validMove.and.returnValue(1);

        var player = tictactoe.player({symbol: "O", board: board, input: input});
        player.makeMove();

        expect(board.mark).toHaveBeenCalledWith(1, "X");
    });

    it("should mark cell with an 'O' when the player's symbol is 'O'", function () {
        var player = tictactoe.player({symbol: "O"});
        player.move(cell);

        expect(cell.innerHTML).toEqual("O");
    });

    it("should mark cell with an 'X' when the player's symbol is 'X'", function () {
        var player = tictactoe.player({symbol: "X"});

        player.move(cell);

        expect(cell.innerHTML).toEqual("X");
    });
});