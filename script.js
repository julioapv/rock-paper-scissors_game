const playerText = document.querySelector('.player');
const pcText = document.querySelector('.pc');
const resultText = document.querySelector('.result');

const choiceBtns = document.querySelectorAll('.choice-button');

let playerScoreText = document.querySelector('.player-score');
let pcScoreText = document.querySelector('.pc-score');
const resetScoreBtn = document.querySelector('.reset-score-button');


//Create each choice and result
let playerChoice;
let computerChoice;
let result;

let playerScore = 0;
let pcScore = 0;

//Add eventListeners to the buttons using a foreach

choiceBtns.forEach(button => button.addEventListener('click', (e) => {

    playerChoice = e.target.id;
    computerTurn();


    playerText.textContent = `Player: ${playerChoice}`;
    pcText.textContent = `Computer: ${computerChoice}`;
    resultText.innerText = checkWinner();

    playerScoreText.textContent = `Player: ${playerScore}`;
    pcScoreText.textContent = `PC: ${pcScore}`;
}));

resetScoreBtn.addEventListener('click', (e) => {
  playerScoreText.textContent = `Player: 0`;
  pcScoreText.textContent = `PC: 0`;
});

function computerTurn () {

    const choices = ['rock', 'paper', 'scissors'];
    const randNum = Math.floor(Math.random() * 3);

    computerChoice = choices[randNum];
}

function checkWinner() {
    if (computerChoice == playerChoice) {
      return 'Draw!';
    } else if (
      (computerChoice == 'rock' && playerChoice == 'paper') ||
      (computerChoice == 'paper' && playerChoice == 'scissors') ||
      (computerChoice == 'scissors' && playerChoice == 'rock')
    ) {
      playerScore++;
      return 'You win!';
    } else {
      pcScore++;
      return 'You lose :(';
    }
  }

// function checkWinner() {
//     if(computerChoice == playerChoice) {
//         return 'Draw!'
//     } 
//     else if(computerChoice == 'rock') {
//         return(playerChoice == 'paper' ? 'You win!' : 'You lose :(')
//     }
//     else if(computerChoice == 'paper') {
//         return(playerChoice == 'scissors' ? 'You win!' : 'You lose :(')
//     }
//     else if(computerChoice == 'scissors') {
//         return(playerChoice == 'rock' ? 'You win!' : 'You lose :(')
//     }
// }

