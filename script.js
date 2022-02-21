"use strict";

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let tries = 0, bestScore;

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    if(guess){
        if(guess > 20 || guess < 1){
            document.querySelector(".message").textContent = "❌ Invalid Number";
        }
        else if(guess !== randomNumber){
            document.querySelector(".message").textContent = guess > randomNumber ? "Too high!" : "Too low!";
            tries++;
            document.querySelector(".score").textContent = tries;
        }
        else{
            document.querySelector(".message").textContent = "Correct number!";
            tries++;
            document.querySelector(".score").textContent = tries;
            if(bestScore){
                if(bestScore > tries){
                    bestScore = tries;
                    document.querySelector(".best-score").textContent = bestScore;
                } 
            }
            else{
                bestScore = tries;
                document.querySelector(".best-score").textContent = bestScore;
            } 
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector(".number").style.width = "30rem";
            document.querySelector(".number").textContent = randomNumber;
        }
    }
});

document.querySelector(".again").addEventListener("click", function(){
    tries = 0;
    document.querySelector(".guess").value = "";
    document.querySelector(".message").textCotent = "Start guessing...";
    document.querySelector(".score").textContent = 0;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
    randomNumber = Math.trunc(Math.random() * 20) + 1;
});

