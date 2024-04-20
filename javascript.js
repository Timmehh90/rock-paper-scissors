// Functions

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
} // Use Math.random to make a random computer choice

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  let computerPoint = 0;
  let playerPoint = 0;
  let result = "";
  if (playerSelection === computerSelection) {
    result = "drew";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    result = "win";
    playerPoint += 1;
  } else {
    result = "lose";
    computerPoint += 1;
  }
  updateResult(
    playerSelection,
    computerSelection,
    result,
    computerPoint,
    playerPoint
  );
} // Uses input from button to compare it to the computerSelection generated by getComputerChoice function

function updateResult(
  playerSelection,
  computerSelection,
  result,
  computerPoint,
  playerPoint
) {
  computerScore += computerPoint;
  playerScore += playerPoint;
  playerChoiceDisplay.textContent = playerSelection;
  computerChoiceDisplay.textContent = computerSelection;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  if (result === "win") {
    resultDisplay.innerHTML = `You <span class="win outcome">${result}</span>`;
  } else if (result === "lose") {
    resultDisplay.innerHTML = `You <span class="lose outcome">${result}</span>`;
  } else {
    resultDisplay.innerHTML = `You <span class="outcome">${result}</span>`;
  }
  endGame(computerScore, playerScore);
} // Updates game result, game score and player and computer choices into the HTML file

function endGame(computerScore, playerScore) {
  const resultGame = document.createElement("h2");
  resultGame.classList.add("result-game");
  const playAgain = document.createElement("button");
  playAgain.classList.add("btn");
  playAgain.id = "play-again";
  playAgain.style.gridColumn = "3";
  playAgain.textContent = "Play again?";
  if (computerScore === 5) {
    while (gameContainer.firstChild) {
      gameContainer.removeChild(gameContainer.firstChild);
    }
    resultGame.innerHTML = "You lose to mr. Robot.<br>Better luck next time!";
    resultGame.style.gridColumn = "2";
    gameContainer.appendChild(resultGame);
    gameContainer.appendChild(playAgain);
  } else if (playerScore === 5) {
    while (gameContainer.firstChild) {
      gameContainer.removeChild(gameContainer.firstChild);
    }
    resultGame.textContent = "Congratulations! You win the game!";
    resultGame.style.gridColumn = "2";
    gameContainer.appendChild(resultGame);
    gameContainer.appendChild(playAgain);
  }
  playAgain.addEventListener("click", () => {
    resetGame();
  });
}

function resetGame() {
  location.reload();
}

// Variables
const container = document.querySelector(".container");
const gameContainer = document.querySelector(".score-and-result");
const playerChoiceDisplay = document.querySelector(".player-choice");
const computerChoiceDisplay = document.querySelector(".computer-choice");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const resultDisplay = document.querySelector(".round-result");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
let playerScore = 0;
let computerScore = 0;

// Event listener
rock.addEventListener("click", () => {
  playRound("rock");
});
paper.addEventListener("click", () => {
  playRound("paper");
});
scissors.addEventListener("click", () => {
  playRound("scissors");
});
