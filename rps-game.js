function getComputerChoice() {

    let computerValue = Math.floor(Math.random() * 3);

    if (computerValue === 0) {return "rock"}

    else if (computerValue === 1) {return "paper"}

    else {return "scissors"}
}

function playGame() {


    let humanScore = 0;
    let computerScore = 0;
    
    let displayText = document.querySelector("#displayText");
    let scoreText = document.querySelector("#scoreText");
    displayText.textContent = " What are you going to choose? rock,paper or scissors?";
    scoreText.textContent = `Score \n Human ${humanScore}  :  cpu ${computerScore}`;


    function playRound(humanChoice, computerChoice) {

        if (
            humanChoice === "rock" && computerChoice === "scissors" || 
            humanChoice === "scissors" && computerChoice === "paper" || 
            humanChoice === "paper" && computerChoice === "rock") { 

            displayText.textContent = `YOU WIN! ${humanChoice} beats ${computerChoice}`;
            ++humanScore;
            scoreText.textContent = `Score \n Human ${humanScore}  :  cpu ${computerScore}`;
            return;

        } 
        
        else if (
            humanChoice === "rock" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice ==="scissors" ||
            humanChoice === "scissors" && computerChoice === "rock") {

            displayText.textContent = `YOU LOSE! ${computerChoice} beats ${humanChoice}`;
            ++computerScore;
            scoreText.textContent = "Score \n" + "Human " + humanScore + " : cpu " + computerScore;
            return;
        } 
        
        else {
            displayText.textContent = "It's a draw! play round again";
        }
    };



    let humanSelection;
    let computerSelection;
    let buttons = document.querySelectorAll("button.medium");


    buttons.forEach((button) => {

        button.addEventListener("click", () => {
            if (humanScore < 5 && computerScore < 5) {
                humanSelection = button.id;
                computerSelection = getComputerChoice();
                playRound(humanSelection, computerSelection);
            }
            if (humanScore === 5) {
                displayText.textContent = "GAME OVER! You beat the computer!";
            }
                
            if (computerScore === 5) {
                displayText.textContent = "GAME OVER! You got beaten by the computer!";
                
            }
        });
    });


}

//add event listener to play game button and hide it whilst showing game elements

const playGameButton = document.querySelector("#playGame");
const gameElements = document.querySelectorAll(".gameDisplay");

playGameButton.addEventListener("click",() => {
    playGame();
    playGameButton.style.display = "none";
    gameElements.forEach(element => {
        element.style.display = "block";
    });

});

//add eventlistener to play again button to hide game elements and show play game button

const playAgainButton = document.querySelector("#playAgain");

playAgainButton.addEventListener("click", () => {
    playGameButton.style.display = "block";
    gameElements.forEach(element => {
        element.style.display = "none";
    });
});

