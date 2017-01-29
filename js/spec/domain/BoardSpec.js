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

    it("should not change a cell when it already has a symbol", function() {
       board.mark(2, "X");
       board.mark(2, "O");
       expect(cells[1]).toBe("X");
    });

    it("should display message when an attempt to change and occupied cell is made", function() {
       spyOn(board, 'displayMessage').and.callThrough();
       board.mark(2, "X");
       board.mark(2, "O");
       expect(board.displayMessage).toHaveBeenCalled();
    });

    xit("should not change turns when a move is disallowed", function() {
        
    });

    it("should return true when a symbol is correctly placed in a cell", function() {
        expect(board.mark(2, "X")).toEqual(true);
    });

    it("should return false when a symbol cannot be placed into a cell", function() {
        board.mark(2, "X");
        expect(board.mark(2, "O")).toEqual(false);
    });

    it("should change cell 0 to 'Q' when index is 1 and symbol is 'Q' ", function () {
        board.mark(1, "Q");

        expect(cells[0]).toBe("Q");
    });
});