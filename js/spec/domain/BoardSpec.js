describe("Board", function () {
    var nameSpace = require("../../spec/support/nameSpace");
    var tictactoe = nameSpace("src/domain/Board.js");

    var cells;
    var board;

    beforeEach(function () {
        cells = ["", ""];
        board = tictactoe.board({cells: cells});
    });

    it("should change cell 0 to 'X' when index is 1 and symbol is 'X' ", function () {
        board.mark(1, "X");

        expect(cells[0]).toBe("X");
    });

    it("should change cell 1 to 'X' when index is 2 and symbol is 'X' ", function () {
        board.mark(2, "X");

        expect(cells[1]).toBe("X");
    });

    it("should change cell 0 to 'Q' when index is 1 and symbol is 'Q' ", function () {
        board.mark(1, "Q");

        expect(cells[0]).toBe("Q");
    });
});