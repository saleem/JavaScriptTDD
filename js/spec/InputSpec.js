describe("Input", function () {
    var nameSpace = require("../spec/support/nameSpace");
    var tictactoe = nameSpace("src/Input.js");

    var input;

    beforeEach(function () {
        input = tictactoe.input();
    });

    // it("should change cell 0 to 'X' when index is 1 and symbol is 'X' ", function () {
    //     board.mark(1, "X");
    //
    //     expect(cells[0]).toBe("X");
    // });

});