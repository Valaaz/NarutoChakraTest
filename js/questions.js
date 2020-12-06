function questions(number)
{
    var question = "";
    switch(number)
    {
        case 1:
            question = "Naruto";
            break;
        case 2:
            question = "Sasuke";
            break;
        case 3:
            question = "Sakura";
            break;
    }

    return question;
}

function responses(number)
{
    var res1 = "";
    var res2 = "";
    var res3 = "";
    var res4 = "";
    var res5 = "";
    switch(number)
    {
        case 1:
            res1 = "Feu";
            res2 = "Eau";
            res3 = "Terre";
            res4 = "Foudre";
            res5 = "Vent";
            break;
        case 2:
            res1 = "Eau";
            res2 = "Vent";
            res3 = "Foudre";
            res4 = "Feu";
            res5 = "Terre";
            break;
        case 3:
            res1 = "Vent";
            res2 = "Foudre";
            res3 = "Feu";
            res4 = "Terre";
            res5 = "Eau";
            break;
    }

    return res1 + "*" + res2 + "*" + res3 + "*" + res4 + "*" + res5;
}