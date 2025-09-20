
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
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
