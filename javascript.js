// Functions

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateResult(playerSelection, computerSelection, result) {
  const resultWindow = document.createElement("div");
  resultWindow.classList.add("result");
  resultWindow.innerHTML = `Player: ${playerSelection}.<br>Computer: ${computerSelection}.<br>You ${result}!`;
  container.appendChild(resultWindow);
}

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  let result = "";
  console.log("Computer: " + computerSelection + " Player: " + playerSelection);
  if (playerSelection === computerSelection) {
    result = "draw";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    result = "win";
  } else {
    result = "lose";
  }
  updateResult(playerSelection, computerSelection, result);
}

// Variables

const container = document.querySelector(".container");
// Event listener
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
  playRound("rock");
});
paper.addEventListener("click", () => {
  playRound("paper");
});
scissors.addEventListener("click", () => {
  playRound("scissors");
});
