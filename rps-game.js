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

  

   //  rock > scissors && paper > rock && scissors > paper
      
        

      // while (humanScore !== 3 || computerScore !== 3) {

         function playRound(humanChoice, computerChoice) {
            
           if (humanChoice === "rock" && computerChoice === "scissors") {
             alert ("YOU WIN! rock beats scissors")
             ++humanScore
            //  ++round
            alert ("Score is Human " + humanScore + " : cpu " + computerScore);
             return
              return console.log("Score is Human " + humanScore + ": cpu " + computerScore)
             return humanScore && computerScore
             return ++humanScore
             if (humanScore === 3) {
               return console.log("Human Wins!")
            }
           } 
           
           else if (humanChoice === "rock" && computerChoice === "paper") {
              alert ("YOU LOSE! paper beats rock")
              ++computerScore
            //   ++round
            alert ("Score is Human " + humanScore + " : cpu " + computerScore);
              return
               return console.log("Score is Human " + humanScore + ": cpu " + computerScore)
              return
              if (computerScore === 3) {
               return console.log("Computer Wins!")
            }
           }
        
           else if (humanChoice === "paper" && computerChoice === "rock") {
              alert ("YOU WIN! paper beats rock")
              ++humanScore
            //   ++round
            alert ("Score is Human " + humanScore + " : cpu " + computerScore);
              return
               return console.log("Score is Human " + humanScore + ": cpu " + computerScore)
              return
              if (humanScore === 3) {
                return console.log("Human Wins!")
             }
           }
        
           else if( humanChoice === "paper" && computerChoice ==="scissors") {
              alert ("YOU LOSE! scissors beats paper")
              ++computerScore
            //   ++round
            alert ("Score is Human " + humanScore + " : cpu " + computerScore);
              return
              return console.log("Score is Human " + humanScore + ": cpu " + computerScore)
              return 
              if (computerScore === 3) {
                return console.log("Computer Wins!")
             }
           }
        
           else if(humanChoice === "scissors" && computerChoice === "rock") {
            alert ("YOU LOSE! rock beats scissors")
            ++computerScore
            alert ("Score is Human " + humanScore + ": cpu " + computerScore);
            // ++round
            // return console.log("Score is Human " + humanScore + ": cpu " + computerScore)
            return
             
            if (computerScore === 3) {
                return console.log("Computer Wins!")
             }
           }
        
           else if (humanChoice === "scissors" && computerChoice === "paper") {
            alert ("YOU WIN! scissors beats paper")
              ++humanScore
            //   ++round
            alert ("Score is Human " + humanScore + " : cpu " + computerScore);
              // console.log("Score is Human " + humanScore + ": cpu " + computerScore);
            //   return console.log("Score is Human " + humanScore + ": cpu " + computerScore);
              return
              
              if (humanScore === 3) {
                return console.log("Human Wins!")
             }
           }
        
           else {
             alert ("It's a draw! play round again")
             humanSelection = getHumanChoice();
             computerSelection = getComputerChoice();
   
            playRound(humanSelection, computerSelection)
            //  return console.log("It's a draw!")
            

           }
        
        }

      //   let round = 0
        /*change humanSelection+computerSelection to let variable instead of const*/

        
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection)
   // }

   // if (round === 5) {
   //    return console.log("Game Over!")
   //   } else {

   // humanSelection = getHumanChoice();
   // computerSelection = getComputerChoice();
   // playRound(humanSelection, computerSelection)
   //   }



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

   

  //   for (let i = 0; i < round; i++) {
         
  //     humanSelection = getHumanChoice();
  //  computerSelection = getComputerChoice();
  //  playRound(humanSelection, computerSelection)
  //   }

   

   /*COULD TRY A SINGLE ROUND VARIABLE WITH FOR LOOP THAT STOPS WHEN ROUND EQUALS 5. */
   /* EXAMPLE for (let round = 0, round < 5, round++) {playRound()} */
   /*NEED TO UPDATE ROUND EACHTIME IN playRound() IF ELSE STATEMENT*/
   /*WITH THIS ABOVE IDEA, WHAT ABOUT DRAWS? MIGHT BE FINE IF ELSE STATEMENT DOES'T UPDATE ROUND OR JUST RETURNS ROUND WITHOUT ++ */

   // if (humanScore == 3) {
   //    return console.log("Human Wins!")
   // } else if (computerScore == 3) {
   //    return console.log("Computer Wins!")
   // } else {
   //   humanSelection = getHumanChoice();
  //  computerSelection = getComputerChoice();
  //  playRound(humanSelection, computerSelection)
  //  }

}


playGame()