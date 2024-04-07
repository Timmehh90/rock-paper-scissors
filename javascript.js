// Functions

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Main Loop

console.log(getComputerChoice());
// let playing = true;

// while (playing) {}
