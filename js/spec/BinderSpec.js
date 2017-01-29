describe("Binder", function () {
    var nameSpace = require("../spec/support/nameSpace");
    var tictactoe = nameSpace("src/Binder.js");

    var pageObject;
    var boardState;
    var input;
    var elementOne;
    var elementTwo;
    var boardElements;
    var binder;

    beforeEach(function () {
        pageObject = jasmine.createSpyObj("pageObject", ["indexOfCell", "boardElements"]);
        boardState = [];
        input = jasmine.createSpyObj("input", ["tryMove"]);
        elementOne = {innerHTML: ""};
        elementTwo = {innerHTML: ""};
        boardElements = [];
        pageObject.boardElements.and.returnValue(boardElements);
        binder = tictactoe.binder({pageObject: pageObject, boardState: boardState, input: input});
    });

    it("should try to move in target cell", function () {
        var event = {target: {id: "cell2"}};
        pageObject.indexOfCell.and.returnValue(2);

        binder.applyEvent(event);

        expect(pageObject.indexOfCell).toHaveBeenCalledWith("cell2");
        expect(input.tryMove).toHaveBeenCalledWith(2);
    });

    it("should bind a board cell to a board element", function () {
        boardElements.push(elementOne)
        boardState.push("A");

        binder.bindResults();

        expect(elementOne.innerHTML).toBe("A");
    });

    it("should bind board cells to board elements", function () {
        boardElements.push(elementOne, elementTwo);
        boardState.push("A", "B");

        binder.bindResults();

        expect(elementTwo.innerHTML).toBe("B");
    });
});