// Scores 
let computerScore = 0;
let playerScore = 0;

// Randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
  const computerOptions = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random()*3);
  return computerOptions[randomNumber];
}

// Single round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It is a tie";
  }

  if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      playerScore++;
      return 'You win! Rock beats scissors';
    }else {
      computerScore++;
      return 'You lose! Paper beats rock';
    }
  }

  if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      playerScore++;
      return 'You win! Paper beats rock';
    }else{
      computerScore++;
      return 'You lose! Scissors beats paper';
    }
  }

   if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      computerScore++;
      return 'You lose! Rock beats scissors';
    }else{
      playerScore++;
      return 'You win! Scissors beats paper';
    }
  }
}

function finalScore() {
  if (playerScore >= 3) {
    console.log("Player wins!");
  }else{
    console.log("Computer wins!");
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('What do you choose?', ''.toLowerCase());
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
  finalScore();
}

game();