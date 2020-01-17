
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
            return("On a fait tomber " + nb + " quilles !");
        }
    }

    scores() {
        let res = this.results;
        let somme = res[0];
        for (let tour=1; tour<res.length; tour++) {
            
            if (res[i] == 10) { // si strike
                if(res[i+1] == 10) { // suivi d'un autre strike
                    somme += 10;
                    res[i] += somme;
                }
                else { // pas suivi de strike
                    somme += res[i+1] + res[i+2];
                    res[i] += somme;
                }
            }
            else {
                if (res[i] + res[i+1] == 10) { // si spare
                    if(res[i+2] == 10) { // suivi d'un strike
                        res[i] += 10;
                    }
                    res[i] += res[i+2];
                }
            }
        }
    }
}

module.exports = Game;