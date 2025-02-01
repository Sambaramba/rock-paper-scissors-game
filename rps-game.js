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

let displayText = document.querySelector("#displayText");
let score = document.querySelector("#scoreText");
scoreText.textContent = " What are you going to choose? rock,paper or scissors?";

let humanScore = 0;
let computerScore = 0;

displayText.textContent = `Score \n Human ${humanScore}  :  cpu ${computerScore}`;

function playRound(humanChoice, computerChoice) {

    if (
        humanChoice === "rock" && computerChoice === "scissors" || 
        humanChoice === "scissors" && computerChoice === "paper" || 
        humanChoice === "paper" && computerChoice === "rock") { 

        displayText.textContent = `YOU WIN! ${humanChoice} beats ${computerChoice}`;
        ++humanScore;
        displayText.textContent = `Score \n Human ${humanScore}  :  cpu ${computerScore}`;
        return;

    } 
    
    else if (
        humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice ==="scissors" ||
        humanChoice === "scissors" && computerChoice === "rock") {

        displayText.textContent = `YOU LOSE! ${computerChoice} beats ${humanChoice}`;
        ++computerScore;
        displayText.textContent = "Score \n" + "Human " + humanScore + " : cpu " + computerScore;
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

    
    
    // console.log(humanSelection);
    // console.log(playRound(humanSelection, computerSelection));


// function playGame() {

//     let humanScore = 0;
//     let computerScore = 0;
//     // let winningScore = round / 2 + 0.5;

//     function playRound(humanChoice, computerChoice) {

//         if (
//             humanChoice === "rock" && computerChoice === "scissors" || 
//             humanChoice === "scissors" && computerChoice === "paper" || 
//             humanChoice === "paper" && computerChoice === "rock") { 

//             console.log(`YOU WIN! ${humanChoice} beats ${computerChoice}`);
//             ++humanScore;
//             console.log("Score is Human " + humanScore + " : cpu " + computerScore);
//             return;

//         } 
        
//         else if (
//             humanChoice === "rock" && computerChoice === "paper" ||
//             humanChoice === "paper" && computerChoice ==="scissors" ||
//             humanChoice === "scissors" && computerChoice === "rock") {

//             console.log(`YOU LOSE! ${humanChoice} beats ${computerChoice}`);
//             ++computerScore;
//             console.log("Score is Human " + humanScore + " : cpu " + computerScore);
//             return;
//         } 
        
//         else {
//             console.log("It's a draw! play round again");
//             // humanSelection = getHumanChoice();
//             // computerSelection = getComputerChoice();
//             // playRound(humanSelection, computerSelection);
//         }


//     }

    // let humanSelection;  //= getHumanChoice();
    // let computerSelection = getComputerChoice();      
    // playRound(humanSelection, computerSelection);



    // humanSelection = getHumanChoice();
    // computerSelection = getComputerChoice();
    // playRound(humanSelection, computerSelection);



    // humanSelection = getHumanChoice();
    // computerSelection = getComputerChoice();
    // playRound(humanSelection, computerSelection);



    // humanSelection = getHumanChoice();
    // computerSelection = getComputerChoice();
    // playRound(humanSelection, computerSelection);


    // humanSelection = getHumanChoice();
    // computerSelection = getComputerChoice();
    // playRound(humanSelection, computerSelection);

/*TODO: change below code to be first to 5*/

    // if (humanScore === 5) {
    //     return console.log("GAME OVER! You beat the computer!");
    // }
    
    // else if (computerScore === 5 ) {
    //     return console.log("GAME OVER! You got beaten by the computer!");
    // } else {}

 
    //  for (let i = 0; i < round; i++) {

    //     if (humanScore === winningScore) {
    //         console.log("GAME OVER! You beat the computer!");
    //         return;
    //     } 
    //     else if (computerScore === winningScore) {
    //         console.log("GAME OVER! You got beaten by the computer!");
    //         return;
    //     } 
    //     else {
    //         let humanSelection = getHumanChoice();
    //         let computerSelection = getComputerChoice();        
    //         playRound(humanSelection, computerSelection);
    //     } 
    //  }   
// }

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



