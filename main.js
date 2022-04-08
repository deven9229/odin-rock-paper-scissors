// selectors
const choices = document.querySelectorAll(".selections");
const playerS = document.querySelector('.player-score');
const computerS = document.querySelector('.computer-score');
const winner = document.querySelector('.winner');

// Scores 
let computerScore = 0;
let playerScore = 0;

// game 
function game(e) {
  const playerSelection = e.target.id;
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection)); 
}

// Event listener 
choices.forEach(choice => choice.addEventListener('click', game));

// Randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
  const computerOptions = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random()*3);
  return computerOptions[randomNumber];
}

// Single round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    winner.textContent = "It is a tie";
    return;
  }

  if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      playerScore++;
      updateScore();
      winner.textContent = 'You win! Rock beats scissors';
      return;
    }else {
      winner.textContent = 'You lose! Paper beats rock';
      computerScore++;
      updateScore();
      return; 
    }
  }

  if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      playerScore++;
      updateScore();
      winner.textContent = 'You win! Paper beats rock';
      return;
    }else{
      winner.textContent = 'You lose! Scissors beats paper';
      computerScore++;
      updateScore();
      return;
    }
  }

   if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      computerScore++;
      updateScore();
      winner.textContent = 'You lose! Rock beats scissors';
      return;
    }else{
      winner.textContent = 'You win! Scissors beats paper';
      playerScore++;
      updateScore();
      return;
    }
  }
}

// updates score
function updateScore() {
  playerS.textContent = playerScore;
  computerS.textContent = computerScore;

  if (playerScore < computerScore) {
      winner.textContent = 'The computer wins';
      return;
    } else if (computerScore < playerScore) {
      winner.textContent = 'The player wins!';
      return;
    } else {
      winner.textContent = 'It is a draw';
      return;
  }
}
