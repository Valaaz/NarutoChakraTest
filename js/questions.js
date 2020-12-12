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
    }

    return res1 + "*" + res2 + "*" + res3 + "*" + res4 + "*" + res5;
}