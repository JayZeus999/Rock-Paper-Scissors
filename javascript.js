
function getComputerChoice() {
  let stuff = ["rock", "paper", "scissors"]
  return stuff[Math.floor(Math.random() * 2)];
}

console.log(getComputerChoice());


function getHumanChoice() {
  return prompt("Enter rock, paper, or scissors").toLowerCase();
}
console.log(getHumanChoice());



function playGame(){
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("you lose, paper wins")
      computerScore += 1;
      console.log("The computer score is ", computerScore);
      console.log("The human score is ", humanScore);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("you win, rock rules")
      humanScore += 1;
      console.log("The computer score is ", computerScore);
      console.log("The human score is ", humanScore);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("you win, paper wins")
      humanScore += 1;
      console.log("The computer score is ", computerScore);
      console.log("The human score is ", humanScore);
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("you lose, scissors wins")
      computerScore += 1;
      console.log("The computer score is ", computerScore);
      console.log("The human score is ", humanScore);
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("you lose, rock wins")
      computerScore += 1;
      console.log("The computer score is ", computerScore);
      console.log("The human score is ", humanScore);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("you win, scissors wins")
      humanScore += 1;
      console.log("The computer score is ", computerScore);
      console.log("The human score is ", humanScore);
    }
  }

  getHumanChoice();
  getComputerChoice();

  playRound(getHumanChoice, getComputerChoice);
}

playGame();