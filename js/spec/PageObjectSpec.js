describe("PageObject", function () {
    var nameSpace = require("../spec/support/nameSpace");
    var tictactoe = nameSpace("src/PageObject.js");

    var document;
    var boardState;
    var elementIds;
    var elementOne;
    var elementTwo;
    var pageObject;

    beforeEach(function () {
        document = jasmine.createSpyObj("document", ["getElementById"]);
        elementOne = {innerHTML: ""};
        elementTwo = {innerHTML: ""};
    });

    it("should update a board element from the board state", function () {
        boardState = ["A"];
        elementIds = ["cell1"];
        document.getElementById.and.returnValue(elementOne);
        pageObject = tictactoe.pageObject({document: document, elementIds: elementIds, boardState: boardState});

        pageObject.updateBoard();

        expect(document.getElementById).toHaveBeenCalledWith("cell1");
        expect(elementOne.innerHTML).toBe("A");
    });

    it("should update a board elements from the board state", function () {
        boardState = ["A", "B"];
        elementIds = ["cell1", "cell2"];
        document.getElementById.and.returnValues(elementOne, elementTwo);
        pageObject = tictactoe.pageObject({document: document, elementIds: elementIds, boardState: boardState});

        pageObject.updateBoard();

        expect(document.getElementById).toHaveBeenCalledWith("cell2");
        expect(elementTwo.innerHTML).toBe("B");
    });

    it("should update a board elements from the board state", function () {
        elementIds = ["cell1", "cell2"];
        pageObject = tictactoe.pageObject({document: document, elementIds: elementIds, boardState: boardState});

        expect(pageObject.indexOfCell("cell2")).toBe(2);
    });


});