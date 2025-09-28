const scoreBoard = document.createElement("div");

function getComputerChoice() {
  let stuff = ["rock", "paper", "scissors"]
  return (stuff[Math.floor(Math.random() * 3)]);
}



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


let rockbtn = document.createElement("button");
rockbtn.textContent = "Rock";
rockbtn.addEventListener("click", () => {
  playRound(rock, getComputerChoice());
});
document.body.appendChild(rockbtn);

let paperbtn = document.createElement("button");
paperbtn.textContent = "Paper";
paperbtn.addEventListener("click", () => {
  playRound(paper, getComputerChoice());
});
document.body.appendChild(paperbtn);

let scissorsbtn = document.createElement("button");
scissorsbtn.textContent = "Scissors";
scissorsbtn.addEventListener("click", () => {
  playRound(scissors, getComputerChoice());
});
document.body.appendChild(scissorsbtn);









