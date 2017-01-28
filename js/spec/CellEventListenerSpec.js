describe("CellEventListener", function () {
    var nameSpace = require("../spec/support/nameSpace");
    var tictactoe = nameSpace("src/CellEventListener.js");

    var cell1;
    var firstMove;
    var player1;
    var players;
    var listener;
    var game;

    function markCell(cell){
        cell.innerHTML = "#";
    }

    beforeEach(function () {
        cell1 = {};
        firstMove = {target: cell1};
        player1 = jasmine.createSpyObj("player", ["move"]);
        players = [player1];
        game = jasmine.createSpyObj("game", ["takeTurn"]);
        listener = tictactoe.cellEventListener({game: game, players: players});
    });

    it("should make game take turn", function () {
        listener.handle(firstMove);

        expect(game.takeTurn).toHaveBeenCalled();
    });

    it("should make player move", function () {
        listener.handle(firstMove);

        expect(player1.move).toHaveBeenCalledWith(cell1);
    });

    it("should alternate players", function () {
        var player2 = jasmine.createSpyObj("player", ["move"]);
        players.push(player2);


        var cell2 = {};
        var secondMove = {target: cell2};

        listener.handle(firstMove);
        listener.handle(secondMove);

        expect(player2.move).toHaveBeenCalledWith(cell2);
    });

    it("should not make move when cell has already marked", function () {
        markCell(cell1);

        listener.handle(firstMove);

        expect(player1.move).not.toHaveBeenCalled();
    });
});