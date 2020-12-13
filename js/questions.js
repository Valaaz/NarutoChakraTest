function questions(number)
{
    var question = "";
    switch(number)
    {
        case 1:
            question = "Question 1";
            break;
        case 2:
            question = "Question 2";
            break;
        case 3:
            question = "Question 3";
            break;
        case 4:
            question = "Question 4";
            break;
        case 5:
            question = "Question 5";
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