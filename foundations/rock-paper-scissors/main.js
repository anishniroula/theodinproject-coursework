// Function to return random choice from computer
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Function to take user input and return it
function getHumanChoice() {
  let userChoice = prompt(
    "Write your choice between 'rock', 'paper' and 'scissors':",
  ).toLowerCase();
  return userChoice;
}

// Main function
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    // Determine round winner
    if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      console.log("Computer wins!");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      console.log("You win!");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      console.log("You win!");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      console.log("Computer wins!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      console.log("You win!");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
      console.log("Computer wins!");
    } else if (humanChoice === computerChoice) {
      console.log("Tie!");
    } else {
      console.log("Invalid choice!");
    }
  }

  // Call playRound() five times for five rounds
  for (let i = 1; i <= 5; i++) {
    playRound();
  }

  console.log("=".repeat(27));

  // Deciding the final winner
  if (computerScore > humanScore) {
    console.log("Computer is the final winner!");
  } else {
    console.log("You are the final winner!");
  }

  console.log("=".repeat(27));
}

// Gotta call the function to run this game
playGame();
