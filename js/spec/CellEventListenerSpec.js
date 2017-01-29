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
        player1 = jasmine.createSpyObj("player", ["move"]);
        players = [player1];
        binder = jasmine.createSpyObj("binder", ["bindResults", "applyEvent"]);
        game = jasmine.createSpyObj("game", ["takeTurn"]);
        listener = tictactoe.cellEventListener({game: game, binder: binder, players: players});
    });

    it("should make game take turn", function () {
        listener.handle(moveInCell1);

        expect(game.takeTurn).toHaveBeenCalled();
    });

    it("should bind results", function () {
        listener.handle(moveInCell1);

        expect(binder.bindResults).toHaveBeenCalled();
    });

    it("should try to move in desired cell", function () {
        listener.handle(moveInCell1);

        expect(binder.applyEvent).toHaveBeenCalledWith(moveInCell1)
    });

    it("should not make move when cell has already marked", function () {
        markCell(cell1);

        listener.handle(moveInCell1);

        expect(player1.move).not.toHaveBeenCalled();
    });
});