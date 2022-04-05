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
      return 'You win! Rock beats scissors';
    }else {
      return 'You lose! Paper beats rock';
    }
  }

  if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      return 'You win! Paper beats rock';
    }else{
      return 'You lose! Scissors beats paper';
    }
  }

   if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      return 'You lose! Rock beats scissors';
    }else{
      return 'You win! Scissors beats paper';
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
}

const playerSelection = "paper";
const computerSelection = computerPlay();
