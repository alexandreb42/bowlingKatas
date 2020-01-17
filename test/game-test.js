let assert = require('chai').assert;
let Game = require("../src/game.js");

describe('Game', function() {

    it('should be a function', function() {
        assert.isFunction(Game);
    })
    
    it('should instantiate a Game', function() {
        let game = new Game();
        assert.isObject(game);
    })

    it('should print the number of pins knocked down in 1 roll', function() {
        let game = new Game();
        assert.equal( ("On a fait tomber 3 quilles !"), game.roll(3));
    })

    it('should have a results array', function() {
        let game = new Game();
        assert.deepEqual(game.results, []);
    })

    it('should save the current score value in the results', function() {
        let game = new Game();
        game.roll(3);
        assert.equal(game.results[0],3);
    })
    
    it('numbers of pins should be more than 0', function() {
        let game = new Game();
        assert.equal(game.roll(-1), "Vous ne jouez pas le jeu !");
        assert.equal(game.roll(0), "On a fait tomber 0 quilles !");
    })

    it('numbers of pins should be less than 10', function() {
        let game = new Game();
        assert.equal(game.roll(11), "Vous ne jouez pas le jeu !");
        assert.equal(game.roll(10), "On a fait tomber 10 quilles !");
    })

    it('should have maximum 10 frames, so 20 rolls', function() {
        let game = new Game();
        for (let i=0; i<20; i++) {
            game.roll(5);
        }
        assert.equal(game.results.length, 20);
        assert.equal(game.roll(8), "Vous avez tous les scores d'une partie.");
        assert.equal(game.results.length, 20);
    })

    it('scores should be more than 0', function() {
        let game = new Game();
        assert.isAtLeast(game.scores(), 0);
    })

    it('scores should be less than 200', function() {
        let game = new Game();
        assert.isAtMost(game.scores(), 200);
    })

    it('scores should ', function() {
        let game = new Game();
        assert.isAtMost(game.scores(), 200);
    })

})