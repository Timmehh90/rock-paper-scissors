// Functions

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a draw";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

function playGame() {
  let result = "";
  let currentRound = 1;
  while (currentRound <= 5) {
    let computerChoice = getComputerChoice();
    let playerChoice = prompt(
      "Round " + currentRound + '\nChoose: "rock", "paper" or "scissors".'
    );
    result = playRound(playerChoice, computerChoice);
    console.log(result);
    currentRound++;
  }
}

// Main Loop

playGame();
// let playing = true;

// while (playing) {}
