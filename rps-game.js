function getComputerChoice() {

    let computerValue = Math.floor(Math.random() * 3);

    if (computerValue === 0) {return "rock"}

    else if (computerValue === 1) {return "paper"}

    else {return "scissors"}
};

// console.log(getComputerChoice());
/* TODO: change getHumanChoice to attach buttons to event listener somehow*/
// function getHumanChoice() {

//     let userAnswer = prompt(" What are you going to choose? rock,paper or scissors?").toLowerCase();
  
//     while (userAnswer !== "rock" && userAnswer !== "paper" && userAnswer !== "scissors") {
//         userAnswer = prompt("That is an unacceptable answer numbnuts, please only type either rock, paper or scissors").toLowerCase();
//     }

//     return userAnswer;
// }



    


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

}

let humanSelection;
let computerSelection;
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    
    button.addEventListener("click", () => {
        humanSelection = button.id;
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    } );
});

/*TODO: change below code to be first to 5*/
// scoreText.textContent = 

    if (humanScore === 5) {
        return console.log("GAME OVER! You beat the computer!");
    }
    
    else if (computerScore === 5 ) {
        return console.log("GAME OVER! You got beaten by the computer!");
    }

 
  
}

playGame();

// let buttons = document.querySelectorAll("button");
// buttons.forEach((button) => {
//     button.addEventListener("click", () =>  {
//         humanSelection = button.id;
//     });
     
// });

// playRound(humanSelection, computerSelection);
        
// playGame();

/*Added below code end of last session but no commit*/
/*changed button variable to buttons*/
/*if doing forEach does it add an event listener to each so user could input multiple answers*/
/*Would adding for each inbetween buttons and eventlistener work*/



