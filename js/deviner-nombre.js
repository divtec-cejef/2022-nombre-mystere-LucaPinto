/**
* Jeu du nombre mystère
* @author  Luca Pinto
* @version 0.1
* @since   2022-08-30 (date de création)
*/

// Main IIFE (Immediately-Invoked Function Expression, se prononce "iffy")
(function main() {
    'use strict';

    let nbMystere = 0;
    let nbEssais = 0;
    let reponse = 0;
    let message = " ";

    /**
     * Retourne un nombre entier aléatoire compris entre min et max
     * @param min
     * @param max
     * @returns {number}
     */
    function tireNombre(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    nbMystere = tireNombre(1, 50);

    while (true) {
        reponse = Number(prompt('Entrez un nombre entre 1 et 100'));
        nbEssais++;
        if (reponse === nbMystere) {
            alert('Vous avez trouvez apres ' + nbEssais + ' essais');
            return;
        }else if (reponse > nbMystere) {
            alert('Cest moins !');
        }else {
            alert('Cest plus !');
        }
    }

}()); // main IIFE
