describe("PageObject", function () {
    var nameSpace = require("../spec/support/nameSpace");
    var tictactoe = nameSpace("src/PageObject.js");

    var document;
    var elementIds;
    var elementOne;
    var elementTwo;
    var pageObject;

    beforeEach(function () {
        document = jasmine.createSpyObj("document", ["getElementById"]);
        elementOne = {innerHTML: ""};
        elementTwo = {innerHTML: ""};
    });

    it("should report the index of cell2 to be 2", function () {
        elementIds = ["cell1", "cell2"];
        pageObject = tictactoe.pageObject({document: document, elementIds: elementIds});

        expect(pageObject.indexOfCell("cell2")).toBe(2);
    });


});