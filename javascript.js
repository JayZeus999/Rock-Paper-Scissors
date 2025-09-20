
function getComputerChoice(){
    let stuff = ["rock", "paper", "scissors"]
    return stuff[Math.floor(Math.random() * 2)];
}

console.log(getComputerChoice());

function getHumanChoice(){
    return prompt("Enter rock, paper, or scissors");
}
console.log(getHumanChoice());

humanScore = 0;
computerScore = 0;

function playRound(humanChoice, computerChoice){

}

let humanChoice = getHumanChoice().toLowerCase();
let computerChoice = getComputerChoice();