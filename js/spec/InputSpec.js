describe("Input", function () {
    var nameSpace = require("../spec/support/nameSpace");
    var tictactoe = nameSpace("src/Input.js");

    var input;

    beforeEach(function () {
        input = tictactoe.input();
    });

    it("should report a move as a valid move", function () {
        input.tryMove(1);

        expect(input.validMove()).toBe(1);
    });

});