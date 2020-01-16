
class Game {

    constructor() {
        this.results = [];
    }

    roll(nb) {
        if (this.results.length >= 20) {
            return "Vous avez tous les scores d'une partie.";
        }
        else if (nb < 0 || nb > 10) {
            return ("Vous ne jouez pas le jeu !");
        }
        else {
            
            this.results.push(nb);
            return("On a fait tombé " + nb + " quilles !");
        }
    }

    scores() {

    }
}

module.exports = Game;