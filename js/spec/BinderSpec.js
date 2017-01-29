describe("Binder", function () {
    var nameSpace = require("../spec/support/nameSpace");
    var tictactoe = nameSpace("src/Binder.js");

    var pageObject;
    var boardState;
    var input;
    var binder;

    beforeEach(function () {
        pageObject = jasmine.createSpyObj("pageObject", ["updateBoard", "indexOfCell"]);
        boardState = ["", ""];
        input = jasmine.createSpyObj("input", ["tryMove"]);
        binder = tictactoe.binder({pageObject: pageObject, boardState: boardState, input: input});
    });

    it("should update board from board domain object", function () {
        binder.bindResults();

        expect(pageObject.updateBoard).toHaveBeenCalledWith(boardState);
    });

    it("should try to move in target cell", function () {
        var event = {target: {id: "cell2"}};
        pageObject.indexOfCell.and.returnValue(2);

        binder.applyEvent(event);

        expect(pageObject.indexOfCell).toHaveBeenCalledWith("cell2");
        expect(input.tryMove).toHaveBeenCalledWith(2);
    });

});