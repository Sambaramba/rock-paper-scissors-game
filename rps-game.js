function getComputerChoice() {

    let computerValue = Math.floor(Math.random() * 3);


    if (computerValue === 0) {return "rock"}

    else if (computerValue === 1) {return "paper"}

    else {return "scissors"}
};

function getHumanChoice() {

    let userAnswer = prompt(" What are you going to choose? rock,paper or scissors?").toLowerCase();

    
    while(userAnswer !==  "rock" || "paper" || "scissors") {
        
      if (userAnswer === "rock") { return "rock"}

      else if (userAnswer === "paper") {return "paper"}

      else if (userAnswer === "scissors") {return "scissors"}

      else {userAnswer = prompt("That is an unacceptable answer numbnuts, please only type either rock, paper or scissors").toLowerCase()}
    }
}

/*TODO: add all human win results to if statement and all loses to if else then change round result alert to include expressions*/

function playGame(round) {

    let humanScore = 0;
    let computerScore = 0;
    let winningScore = round / 2 + 0.5;

    function playRound(humanChoice, computerChoice) {

        if (
            humanChoice === "rock" && computerChoice === "scissors" || 
            humanChoice === "scissors" && computerChoice === "paper" || 
            humanChoice === "paper" && computerChoice === "rock") { 

            alert (`YOU WIN! ${humanChoice} beats ${computerChoice}`);
            ++humanScore;
            alert ("Score is Human " + humanScore + " : cpu " + computerScore);
            return;

        } 
        
        else if (
            humanChoice === "rock" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice ==="scissors" ||
            humanChoice === "scissors" && computerChoice === "rock") {

            alert (`YOU LOSE! ${humanChoice} beats ${computerChoice}`);
            ++computerScore;
            alert ("Score is Human " + humanScore + " : cpu " + computerScore);
            return; 
        } 
        
        else {
            alert ("It's a draw! play round again");
            humanSelection = getHumanChoice();
            computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        }


    }
 
     for (let i = 0; humanScore < winningScore || computerScore < winningScore; i++) {

        if (humanScore === winningScore) {
            return alert ("GAME OVER! You beat the computer!");
        } 
        else if (computerScore === winningScore) {
            return alert("GAME OVER! You got beaten by the computer!");
        } 
        else {
            let humanSelection = getHumanChoice();
            let computerSelection = getComputerChoice();        
            playRound(humanSelection, computerSelection);
        } 
     }   
}

        
playGame(5);



// humanSelection = getHumanChoice();
// computerSelection = getComputerChoice();
// playRound(humanSelection, computerSelection)



// humanSelection = getHumanChoice();
// computerSelection = getComputerChoice();
// playRound(humanSelection, computerSelection)



// humanSelection = getHumanChoice();
// computerSelection = getComputerChoice();
// playRound(humanSelection, computerSelection)


// humanSelection = getHumanChoice();
// computerSelection = getComputerChoice();
// playRound(humanSelection, computerSelection)






