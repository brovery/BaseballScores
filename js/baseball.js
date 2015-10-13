/**
 * Created by johndouglas1 on 10/13/15.
 */
var t = "top";
var b = "bottom";
var tab = t;
var inning = 1;
var test = tab + inning;
var inningScore = 0;
var teamAScore = 0;
var teamBScore = 0;


function inningUp(){
    inningScore = 0;


    if(tab == t){
        tab = b;
    }else{
        inning++;
        tab = t;
    }
    test = tab + inning;
    document.getElementById("inning").innerHTML = test;
}

function updateScoreBoard(){
    document.getElementById(test).innerHTML = inningScore;
    document.getElementById("scoreA").innerHTML = teamAScore;
    document.getElementById("scoreB").innerHTML = teamBScore;
    document.getElementById("scoreA2").innerHTML = teamAScore;
    document.getElementById("scoreB2").innerHTML = teamBScore;
}

function scoreUp(){
    inningScore++;
    if(tab == t){
        teamAScore++;
    }else{
        teamBScore++;
    }

    updateScoreBoard();
}