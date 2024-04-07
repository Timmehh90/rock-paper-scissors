// Functions

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a draw";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

function playGame() {
  let result = "";
  let computerChoice = getComputerChoice();
  let playerChoice = prompt('Choose "Rock", "Paper" or "Scissors"');
  result = playRound(playerChoice, computerChoice);
  console.log(result);
}

// Main Loop

playGame();
// let playing = true;

// while (playing) {}
