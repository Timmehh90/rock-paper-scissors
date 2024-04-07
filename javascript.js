// Functions

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
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

function playGame() {
  let result = "";
  let computerScore = 0;
  let playerScore = 0;
  let currentRound = 1;

  while (currentRound <= 5) {
    let computerChoice = getComputerChoice();
    let playerChoice = prompt(
      "Round " + currentRound + '\nChoose: "rock", "paper" or "scissors".'
    );
    console.log(
      "You chose: " + playerChoice + "\nThe computer chose: " + computerChoice
    );
    result = playRound(playerChoice, computerChoice);
    if (result === "draw") {
      console.log("You draw this round.");
    } else if (result === "win") {
      console.log("You win this round.");
      playerScore++;
    } else if (result === "lose") {
      console.log("You lose this round.");
      computerScore++;
    } else {
      console.log('Wrong input, choose: "rock", "paper" or "scissors".');
      currentRound--;
    }
    currentRound++;
  }
  console.log(
    "Your score: " + playerScore + "\nComputer Score: " + computerScore
  );

  if (playerScore > computerScore) {
    console.log("You win. Well played!");
  } else if (playerScore < computerScore) {
    console.log("You lose. Better luck next time!");
  } else {
    console.log("You tied all rounds!");
  }
}

// Main Loop

let playing = true;

while (playing) {
  playGame();
}
