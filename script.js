const getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3);

  switch (computerChoice) {
    case 0:
      computerChoice = "Rock";
      break;
    case 1:
      computerChoice = "Paper";
      break;
    default:
      computerChoice = "Scissors";
  }

  return computerChoice;
};

const playRound = (playerChoice, computerChoice) => {
  switch (playerChoice) {
    case "Rock":
    case "rock":
      switch (computerChoice) {
        case "Rock":
          console.log("Player chose Rock. Computer chose Rock. Tie!");
          return 0;
        case "Paper":
          console.log(
            "Player chose Rock. Computer chose Paper. Computer wins!"
          );
          return 1;
        case "Scissors":
          console.log(
            "Player chose Rock. Computer chose Scissors. Player wins!"
          );
          return 2;
      }
      break;

    case "Paper":
    case "paper":
      switch (computerChoice) {
        case "Rock":
          console.log("Player chose Paper. Computer chose Rock. Player wins!");
          return 2;
        case "Paper":
          console.log("Player chose Paper. Computer chose Paper. Tie!");
          return 0;
        case "Scissors":
          console.log(
            "Player chose Paper. Computer chose Scissors. Computer Wins!"
          );
          return 1;
      }
      break;

    case "Scissors":
    case "scissors":
      switch (computerChoice) {
        case "Rock":
          console.log(
            "Player chose Scissors. Computer chose Rock. Computer wins!"
          );
          return 1;
        case "Paper":
          console.log(
            "Player chose Scissors. Computer chose Paper. Player wins!"
          );
          return 2;
        case "Scissors":
          console.log("Player chose Scissors. Computer chose Scissors. Tie!");
          return 0;
      }
      break;

    default:
      console.log(
        'Something went wrong. Select either "rock", "paper", or "scissors".'
      );
      return "error";
  }
};

const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  while (playerScore < 3 && computerScore < 3) {
    let roundResults = playRound();

    switch (roundResults) {
      case 0:
        console.log("Round ended in a tie. Redo round!");
        break;
      case 1:
        ++computerScore;
        console.log(
          `Computer won that round. Player score: ${playerScore}. Computer score: ${computerScore}.`
        );
        break;
      case 2:
        ++playerScore;
        console.log(
          `Player won that round. Player score: ${playerScore}. Computer score: ${computerScore}.`
        );
        break;
      case "error":
        console.log("Something went wrong with your selection. Redoing round.");
      default:
        console.log("Something went wrong. Redoing round.");
        break;
    }
  }

  if (playerScore === 3) {
    console.log("Player wins!");
    return;
  } else if (computerScore === 3) {
    console.log("Computer wins!");
    return;
  } else {
    console.log("Something went wrong. Ending game.");
    return;
  }
};

var playerScoreSpan = document.querySelector("#player-score");
var computerScoreSpan = document.querySelector("#computer-score");
var playerScoreTracker = 0;
var computerScoreTracker = 0;
var announcement = document.querySelector(".announcement");

const checkScores = () => {
  if (playerScoreTracker === 5) {
    console.log("Player wins the game!");
    playerScoreTracker = 0;
    computerScoreTracker = 0;
    playerScoreSpan.textContent = playerScoreTracker;
    computerScoreSpan.textContent = computerScoreTracker;
    announcement.textContent =
      "Player wins the game! Make a new selection to play again.";
  } else if (computerScoreTracker === 5) {
    console.log("Computer wins the game!");
    playerScoreTracker = 0;
    computerScoreTracker = 0;
    playerScoreSpan.textContent = playerScoreTracker;
    computerScoreSpan.textContent = computerScoreTracker;
    announcement.textContent =
      "Computer wins the game! Make a new selection to play again.";
  }
};

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.textContent;
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    announcement.textContent = "";

    if (result === 0) {
      console.log("It's a tie!");
      announcement.textContent = "It's a tie! Make a new selection.";
    } else if (result === 1) {
      computerScoreTracker++;
      computerScoreSpan.textContent = computerScoreTracker;
      announcement.textContent =
        "Computer wins this round! Make a new selection.";
      console.log("Computer wins this round!");
      checkScores();
    } else if (result === 2) {
      playerScoreTracker++;
      playerScoreSpan.textContent = playerScoreTracker;
      announcement.textContent =
        "Player wins this round! Make a new selection.";
      console.log("Player wins this round!");
      checkScores();
    }
  });
});
