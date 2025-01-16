function getComputerChoice() {

    let computerValue = Math.floor(Math.random() * 3);

    if (computerValue === 0) {return "rock"}

    else if (computerValue === 1) {return "paper"}

    else {return "scissors"}
};



function getHumanChoice() {

    let userAnswer = prompt(" What are you going to choose? rock,paper or scissors?").toLowerCase();
  
    while (userAnswer !== "rock" && userAnswer !== "paper" && userAnswer !== "scissors") {
        userAnswer = prompt("That is an unacceptable answer numbnuts, please only type either rock, paper or scissors").toLowerCase()
   }

   return userAnswer;
}


function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    // let winningScore = round / 2 + 0.5;

    function playRound(humanChoice, computerChoice) {

        if (
            humanChoice === "rock" && computerChoice === "scissors" || 
            humanChoice === "scissors" && computerChoice === "paper" || 
            humanChoice === "paper" && computerChoice === "rock") { 

            console.log(`YOU WIN! ${humanChoice} beats ${computerChoice}`);
            ++humanScore;
            console.log("Score is Human " + humanScore + " : cpu " + computerScore);
            return;

        } 
        
        else if (
            humanChoice === "rock" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice ==="scissors" ||
            humanChoice === "scissors" && computerChoice === "rock") {

            console.log(`YOU LOSE! ${humanChoice} beats ${computerChoice}`);
            ++computerScore;
            console.log("Score is Human " + humanScore + " : cpu " + computerScore);
            return;
        } 
        
        else {
            console.log("It's a draw! play round again");
            humanSelection = getHumanChoice();
            computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        }


    }

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();      
    playRound(humanSelection, computerSelection);



    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);



    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);



    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);


    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);



    if (humanScore > computerScore) {
        return console.log("GAME OVER! You beat the computer!");
    }
    
    else if (computerScore > humanScore) {
        return console.log("GAME OVER! You got beaten by the computer!");
    } 
    
    else {"The games a draw"};
 
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
}

        
playGame();








