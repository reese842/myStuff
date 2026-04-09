const choices = ["rock","paper","scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScore");
const tieScoreDisplay = document.getElementById("tieScore");
const computerScoreDisplay = document.getElementById("computerScore");

let playerScore = 0;
let tieScore = 0;
let computerScore = 0;



function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    let resultClass = "tie";
    if(playerChoice === computerChoice){
        result = "It's a tie!";
    } else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "You win!" : "Computer wins!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You win!" : "Computer wins!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You win!" : "Computer wins!";
                break;
        }
    }

    if (result === "You win!") {
        resultClass = "win";
        playerScore += 1;
    } else if (result === "Computer wins!") {
        resultClass = "loss";
        computerScore += 1;
    } else {
        tieScore += 1;
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;
    resultDisplay.className = `result-display ${resultClass}`;
    playerScoreDisplay.textContent = playerScore;
    tieScoreDisplay.textContent = tieScore;
    computerScoreDisplay.textContent = computerScore;




}