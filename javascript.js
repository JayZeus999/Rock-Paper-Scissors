console.log("Hello World");

function getComputerChoice(){
    let stuff = ["rock", "paper", "scissors"]
    return stuff[Math.floor(Math.random() * 2)];
}

console.log(getComputerChoice());

function getHumanChoice(){
    prompt("Enter rock, paper, or scissors");
}
console.log(getHumanChoice());