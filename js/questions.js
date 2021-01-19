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
            res1 = "Amaterasu ";
            res2 = "Clonage aqueux";
            res3 = "Danse du faucheur";
            res4 = "Flèche d'Indra";
            res5 = "Les crocs traqueurs";
            break;

        case 2:
            res1 = "Matatabi (Nibi)";
            res2 = "Isobu (Sanbi)";
            res3 = "Shukaku (Ichibi)";
            res4 = "Kokuô (Gobi)";
            res5 = "Son gokû (Yonbi)";
            break;

        case 3:
            res1 = "Lance";
            res2 = "Jôhyô";
            res3 = "Faux";
            res4 = "Katana";
            res5 = "Dakô";
            break;

        case 4:
            res1 = "Être en premier ligne pour attaquer ";
            res2 = "Gêner les lignes ennemis pour permettre une percée";
            res3 = "Attaquer par les airs";
            res4 = "Prendre par le flanc";
            res5 = "Être en défense";
            break;

        case 5:
            res1 = "Enma";
            res2 = "Gama Bunta";
            res3 = "Katsuyu";
            res4 = "Vous recherchez un autre animal";
            res5 = "Manda";
            break;

        case 6:
            res1 = "La détermination";
            res2 = "La créativité";
            res3 = "L'intelligence";
            res4 = "La rapidité";
            res5 = "La force";
            break;

        case 7:
            res1 = "Lance";
            res2 = "Jôhyô";
            res3 = "Faux";
            res4 = "Katana";
            res5 = "Dakô";
            break;

        case 8:
            res1 = "Feu";
            res2 = "Eau";
            res3 = "Vent";
            res4 = "Foudre";
            res5 = "Terre";
            break;

        case 9:
            res1 = "Feu";
            res2 = "Eau";
            res3 = "Vent";
            res4 = "Foudre";
            res5 = "Terre";
            break;

        case 10:
            res1 = "Feu";
            res2 = "Eau";
            res3 = "Vent";
            res4 = "Foudre";
            res5 = "Dakô";
            break;

        default:
            res1 = "Erreur interne, veuillez recommencer le test";
            res2 = "Erreur interne, veuillez recommencer le test";
            res3 = "Erreur interne, veuillez recommencer le test";
            res4 = "Erreur interne, veuillez recommencer le test";
            res5 = "Erreur interne, veuillez recommencer le test";
            break;
    }

    return res1 + "*" + res2 + "*" + res3 + "*" + res4 + "*" + res5;
}