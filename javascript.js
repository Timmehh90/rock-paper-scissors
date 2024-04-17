// Functions

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
} // Use Math.random to make a random computer choice

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
} // Uses input from button to compare it to the computerSelection generated by getComputerChoice function

function updateResult(playerSelection, computerSelection, result) {
  const resultWindow = document.querySelector(".result-window");
  resultWindow.innerHTML = `Player: ${playerSelection}.<br>Computer: ${computerSelection}.<br>You ${result}!`;
  container.appendChild(resultWindow);
} // Create a new div to display output of playRound function

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
