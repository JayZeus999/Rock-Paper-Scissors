
function getComputerChoice() {
  let stuff = ["rock", "paper", "scissors"]
  return (stuff[Math.round(Math.random() * 2)]);
}


function getHumanChoice() {
  return (prompt("Enter rock, paper, or scissors").toLowerCase());
}


function playGame(){
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {

    if ((humanChoice === "rock" && computerChoice === "scissors") ||
      
     (humanChoice === "paper" && computerChoice === "rock") ||
      
     (humanChoice === "scissors" && computerChoice === "paper") 
    ) {
      console.log(humanChoice);
      console.log(computerChoice);
      console.log("you win");
      humanScore += 1;
      console.log(`The human score is: ${humanScore}`)
      console.log(`The computer score is: ${computerScore}`)
    }


    else if ((humanChoice === "rock" && computerChoice === "paper") ||      
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock") ){
      console.log(humanChoice);
      console.log(computerChoice);
      console.log("you lose");
      computerScore += 1;
      console.log(`The human score is: ${humanScore}`)
      console.log(`The computer score is: ${computerScore}`)
    }
    
    else if (humanChoice === computerChoice){
      console.log("draw");
    }
    
  }


  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
}

playGame();