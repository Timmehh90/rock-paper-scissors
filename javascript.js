// Functions

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  console.log("Computer: " + computerSelection + " Player: " + playerSelection);
  if (playerSelection === computerSelection) {
    return "draw";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", function () {
  playRound("rock");
});
paper.addEventListener("click", function () {
  playRound("paper");
});
scissors.addEventListener("click", function () {
  playRound("scissors");
});
