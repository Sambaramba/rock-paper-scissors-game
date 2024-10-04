function getComputerChoice() {
    let computerValue = Math.floor(Math.random() * 3);

    if (computerValue === 0) {
        return "rock";
    };

     else if (computerValue === 1) {
        return "paper";
    };

    else {
        return "scissors";
    };
};

function getHumanChoice() {

    let userAnswer = prompt(" What are you going to choose? rock,paper or scissors?");
    let userInputLowercase = userAnswer.toLowerCase();


    while(userInputLowercase !==  "rock" || "paper" || "scissors") {


      if (userInputLowercase === "rock") { 
        return "rock";
      };
      
      else if  (userInputLowercase === "paper") {
         return "paper";
      };
     
      else if (userInputLowercase === "scissors") {
          return "scissors";
      };

      else { 
         userAnswer = prompt("That is an unacceptable answer numbnuts, please only type either rock, paper or scissors");
         userInputLowercase = userAnswer.toLowerCase();
      };
    };
};




function playGame() {

    let humanScore = 0;
    let computerScore = 0;

  

    function playRound(humanChoice, computerChoice) {
                
        if (humanChoice === "rock" && computerChoice === "scissors") {
            alert ("YOU WIN! rock beats scissors");
            ++humanScore;
            alert ("Score is Human " + humanScore + " : cpu " + computerScore);
            return;
        };
                
        else if (humanChoice === "rock" && computerChoice === "paper") {
            alert ("YOU LOSE! paper beats rock");
            ++computerScore;
            alert ("Score is Human " + humanScore + " : cpu " + computerScore);
            return;          
        };
            
        else if (humanChoice === "paper" && computerChoice === "rock") {
            alert ("YOU WIN! paper beats rock");
            ++humanScore;
            alert ("Score is Human " + humanScore + " : cpu " + computerScore);
            return;
        };
            
        else if( humanChoice === "paper" && computerChoice ==="scissors") {
            alert ("YOU LOSE! scissors beats paper");
            ++computerScore;
            alert ("Score is Human " + humanScore + " : cpu " + computerScore);
            return;
        };
            
        else if(humanChoice === "scissors" && computerChoice === "rock") {
            alert ("YOU LOSE! rock beats scissors");
            ++computerScore;
            alert ("Score is Human " + humanScore + ": cpu " + computerScore);
            return;
        };
            
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            alert ("YOU WIN! scissors beats paper");
            ++humanScore;
            alert ("Score is Human " + humanScore + " : cpu " + computerScore);
            return;
        };
            
        else {
            alert ("It's a draw! play round again")
            humanSelection = getHumanChoice();
            computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection)
                }
            
    }

        
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
        
playRound(humanSelection, computerSelection)



humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection)



humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection)



humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection)


humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection)


   /*THINK I CAN GET RID OF THE BELOW ELSE STATEMENT (NOW THAT playRound() ELSE STATEMENT HAS RECURSIVE FUNCTION)*/

if (humanScore > computerScore) {
    return alert ("GAME OVER! You beat the computer!")
} 
else if (computerScore > humanScore) {
    return alert("GAME OVER! You got beaten by the computer!")
} else {"The games a draw"}

  //  let round = 5

  //   for (let i = 0; i < round; i++) {
         
  //     humanSelection = getHumanChoice();
  //  computerSelection = getComputerChoice();
  //  playRound(humanSelection, computerSelection)
  //   }


}


playGame()