function getComputerChoice() {
    let computerValue = Math.floor(Math.random() * 3);

    if (computerValue === 0) {
        return "rock"
    }

     else if (computerValue === 1) {
        return "paper"
    }

    else {
        return "scissors"
    }
}

function getHumanChoice() {
    let userAnswer = prompt(" What are you going to choose? rock,paper or scissors?")
    let userInputLowercase = userAnswer.toLowerCase();

    

    // if (userInputLowercase !==  "rock" || "paper"|| "scissors") {
    //     alert ("That is an unacceptable answer numbnuts, please only type either rock, paper or scissors");
    //      getHumanChoice()

    // } else {
    //     return userInputLowercase;
    // }

    while(userInputLowercase !==  "rock" || "paper" || "scissors") {


        // userAnswer = prompt("That is an unacceptable answer numbnuts, please only type either rock, paper or scissors")
        

     if (userInputLowercase === "rock") {

     return "rock"

     }
     else if  (userInputLowercase === "paper") {

        return "paper"  

     }
     else if (userInputLowercase === "scissors") {

     return "scissors"

     }
    else { 
        userAnswer = prompt("That is an unacceptable answer numbnuts, please only type either rock, paper or scissors")
        userInputLowercase = userAnswer.toLowerCase()
        // console.log();
     }
    }
}




function playGame() {

    let humanScore = 0;
    let computerScore = 0;

  

    if (humanScore === 5) {
      return console.log("Human Wins!")
   }

   else if (computerScore === 5) {
      return console.log("Computer Wins!")
   }
      
   else {
        
        function playRound(humanChoice, computerChoice) {
        

      

        if (humanChoice === "rock" && computerChoice === "scissors") {
             console.log("YOU WIN! rock beats scissors")
             ++humanScore
             console.log("Score is Human " + humanScore + ": cpu " + computerScore)
             
           } 
           
           else if (humanChoice === "rock" && computerChoice === "paper") {
              console.log("YOU LOSE! paper beats rock")
              ++computerScore
              console.log("Score is Human " + humanScore + ": cpu " + computerScore)
              
           }
        
           else if (humanChoice === "paper" && computerChoice === "rock") {
              console.log("YOU WIN! paper beats rock")
              ++humanScore
              console.log("Score is Human " + humanScore + ": cpu " + computerScore)
            //   if (humanScore === 5) {
            //     return console.log("Human Wins!")
            //  }
           }
        
           else if( humanChoice === "paper" && computerChoice ==="scissors") {
              console.log("YOU LOSE! scissors beats paper")
              ++computerScore
              console.log("Score is Human " + humanScore + ": cpu " + computerScore)
            //   if (computerScore === 5) {
            //     return console.log("Computer Wins!")
            //  }
           }
        
           else if(humanChoice === "scissors" && computerChoice === "rock") {
            console.log("YOU LOSE! rock beats scissors")
            ++computerScore
            console.log("Score is Human " + humanScore + ": cpu " + computerScore)
            // if (computerScore === 5) {
            //     return console.log("Computer Wins!")
            //  }
           }
        
           else if (humanChoice === "scissors" && computerChoice === "paper") {
              console.log("YOU WIN! scissors beats paper")
              ++humanScore
              console.log("Score is Human " + humanScore + ": cpu " + computerScore);
            //   if (humanScore === 5) {
            //     return console.log("Human Wins!")
            //  }
           }
        
           else {
            console.log("It's a draw!")
           }
        
        }
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection)
      }
   }