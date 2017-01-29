describe("CellEventListener", function () {
    var nameSpace = require("../spec/support/nameSpace");
    var tictactoe = nameSpace("src/CellEventListener.js");

    var cell1;
    var moveInCell1;
    var player1;
    var players;
    var binder;
    var game;
    var listener;

    function markCell(cell){
        cell.innerHTML = "#";
    }

    beforeEach(function () {
        cell1 = {};
        moveInCell1 = {target: cell1};
        binder = jasmine.createSpyObj("binder", ["bindResults", "applyEvent"]);
        game = jasmine.createSpyObj("game", ["takeTurn"]);
        listener = tictactoe.cellEventListener({game: game, binder: binder});
    });

    it("should make game take exactly one turn", function () {
        listener.handle(moveInCell1);

        expect(game.takeTurn.calls.count()).toEqual(1);
    });

    it("should bind results once", function () {
        listener.handle(moveInCell1);

        expect(binder.bindResults.calls.count()).toEqual(1);
    });

    it("should try to move in desired cell", function () {
        listener.handle(moveInCell1);

        expect(binder.applyEvent).toHaveBeenCalledWith(moveInCell1)
    });
});