
function getComputerChoice() {
  let stuff = ["rock", "paper", "scissors"]
  return (stuff[Math.floor(Math.random() * 3)]);
}


function getHumanChoice() {
  // return (prompt("Enter rock, paper, or scissors").toLowerCase());
  let btn = document.createElement("button");
  let btn1 = document.createElement("button");
  let btn2 = document.createElement("button");
}

playRound(getHumanChoice(), getComputerChoice());

// function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {

    if ((humanChoice === "rock" && computerChoice === "scissors") ||

      (humanChoice === "paper" && computerChoice === "rock") ||

      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`The human choice is ${humanChoice}`);
      console.log(`The computer choice is ${computerChoice}`);
      console.log("you win");
      humanScore += 1;
      console.log(`The current human score is: ${humanScore}`)
      console.log(`The current computer score is: ${computerScore}`)
    }


    else if ((humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "rock")) {
      console.log(`The human choice is ${humanChoice}`);
      console.log(`The computer choice is ${computerChoice}`);
      console.log("you lose");
      computerScore += 1;
      console.log(`The current human score is: ${humanScore}`)
      console.log(`The current computer score is: ${computerScore}`)
    }

    else if (humanChoice === computerChoice) {
      console.log(`The human choice is ${humanChoice}`);
      console.log(`The computer choice is ${computerChoice}`)
      console.log("draw");
      console.log(`The current human score is: ${humanScore}`)
      console.log(`The current computer score is: ${computerScore}`)
    }

  }


  // playRound(getHumanChoice(), getComputerChoice());
  // playRound(getHumanChoice(), getComputerChoice());
  // playRound(getHumanChoice(), getComputerChoice());
  // playRound(getHumanChoice(), getComputerChoice());
  // playRound(getHumanChoice(), getComputerChoice());
  if (humanScore > computerScore){
  console.log("human wins");
  }else if (computerScore > humanScore){
  console.log("computer wins");
}

// }

// playGame();

