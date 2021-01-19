function questions(number) {
    var question = "";
    switch (number) {
        case 1:
            question = " Quel est votre justu favori ?";
            break;

        case 2:
            question = "Si vous deviez choisir, quel bijû scelleriez-vous en vous ?";
            break;

        case 3:
            question = "Choisissez une arme :";
            break;

        case 4:
            question = "Sur un champ de bataille, vous préférez :";
            break;

        case 5:
            question = "Qui choisissez-vous d'invoquer ?";
            break;

        case 6:
            question = "Choisissez la qualité la plus importante selon vous :"
            break;

        case 7:
            question = "Vous préférez :"
            break;

        case 8:
            question = "Question 8"
            break;

        case 9:
            question = "Question 9"
            break;

        case 10:
            question = "Question 10"
            break;

        default:
            question = "Erreur interne, veuillez recommencer le test s'il vous plaît"
            break;
    }

    return question;
}

function responses(number) {
    var res1 = "";
    var res2 = "";
    var res3 = "";
    var res4 = "";
    var res5 = "";
    switch (number) {
        case 1:
            res1 = "Feu";
            res2 = "Eau";
            res3 = "Vent";
            res4 = "Foudre";
            res5 = "Terre";
            break;
        case 2:
            res1 = "Feu";
            res2 = "Eau";
            res3 = "Vent";
            res4 = "Foudre";
            res5 = "Terre";
            break;
        case 3:
            res1 = "Feu";
            res2 = "Eau";
            res3 = "Vent";
            res4 = "Foudre";
            res5 = "Terre";
            break;
        case 4:
            res1 = "Feu";
            res2 = "Eau";
            res3 = "Vent";
            res4 = "Foudre";
            res5 = "Terre";
            break;
        case 5:
            res1 = "Feu";
            res2 = "Eau";
            res3 = "Vent";
            res4 = "Foudre";
            res5 = "Terre";
            break;
    }

    return res1 + "*" + res2 + "*" + res3 + "*" + res4 + "*" + res5;
}