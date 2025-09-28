const scoreBoard = document.createElement("div");
document.body.appendChild(scoreBoard);

function getComputerChoice() {
  let stuff = ["rock", "paper", "scissors"]
  return (stuff[Math.floor(Math.random() * 3)]);
}



// function playGame() {
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

  if ((humanChoice === "rock" && computerChoice === "rock") ||
     (humanChoice === "paper" && computerChoice === "paper") ||
     (humanChoice === "scissors" && computerChoice === "scissors")){

    humanScore += 0;
    computerScore += 0;
    scoreBoard.textContent = `It's a tie between ${humanChoice} & ${computerChoice}`
  }

  else if ((humanChoice === "rock" && computerChoice === "scissors") ||

    (humanChoice === "paper" && computerChoice === "rock") ||

    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore += 1;
    scoreBoard.textContent = `You win! ${humanChoice} beats ${computerChoice}`
  }

  else if ((humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")) {
    computerScore += 1;
    scoreBoard.textContent = `You win! ${humanChoice} beats ${computerChoice}`
  }

  scoreBoard.textContent += `  Score : ${humanScore} - ${computerScore}`

  if (humanScore === 5) {
    scoreBoard.textContent = `🎉 You reached 5! You win the game!`;
    scoreBoard.textContent = " ";
  } else if (computerScore === 5) {
    scoreBoard.textContent = `💻 Computer reached 5! Computer wins the game!`;
    scoreBoard.textContent = " ";
  }
}


let rockbtn = document.createElement("button");
rockbtn.textContent = "Rock";
rockbtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
document.body.appendChild(rockbtn);

let paperbtn = document.createElement("button");
paperbtn.textContent = "Paper";
paperbtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
document.body.appendChild(paperbtn);

let scissorsbtn = document.createElement("button");
scissorsbtn.textContent = "Scissors";
scissorsbtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
document.body.appendChild(scissorsbtn);









