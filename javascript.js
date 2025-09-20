
function getComputerChoice(){
    let stuff = ["rock", "paper", "scissors"]
    return stuff[Math.floor(Math.random() * 2)];
}

console.log(getComputerChoice());

function getHumanChoice(){
    return prompt("Enter rock, paper, or scissors").toLowerCase();
}
console.log(getHumanChoice());

humanScore = 0;
computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice){
    console.log("a draw, go again")
  }else if (humanChoice === "rock" && computerChoice === "paper"){
    console.log("you lose, paper wins")
  }else if (humanChoice === "rock" && computerChoice === "scissors"){
    console.log("you win, rock rules")
  }else if (humanChoice === "paper" && computerChoice === "rock"){
    console.log("you win, paper wins")
  }else if (humanChoice === "paper" && computerChoice === "scissors"){
    console.log("you lose, scissors wins")
  }else if (humanChoice === "scissors" && computerChoice === "rock"){
    console.log("you lose, rock wins")
  }else if (humanChoice === "scissors" && computerChoice === "paper"){
    console.log("you win, scissors wins")
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
