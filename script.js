// Useful variables
const result = {
  'rock': {
    'paper': false,
    'scissors': true
  },
  'paper': {
    'rock': true,
    'scissors': false
  },
  'scissors': {
    'rock': false,
    'paper': true
  }
}
const options = ['rock', 'paper', 'scissors'];

// Media queries
const body = document.querySelector('body');
const game = document.querySelector('.game');
const results = document.querySelector('.results');
const playAgain = document.querySelector('.play-again');
const playerBoard = document.querySelector('.player-board');
const computerBoard = document.querySelector('.computer-board');
const resultsBoard = document.querySelector('.results-board')
const emptyChoice = document.querySelector('.empty')
const outcome = document.querySelector(".outcome");
let player;
let computer;
let playerChoice = document.querySelector('.player');
let computerChoice = document.querySelector('.computer');

// Event listeners
game.addEventListener('click', attempt);
playAgain.addEventListener('click', runGame)


// Functions
function attempt(e) {
  if (e.target.classList[0] === 'choice') {
    player = e.target.classList[1];
    showPlayer();
  }
}
function showPlayer() {
  game.classList.add('inactive');
  playerChoice.innerHTML = document.querySelector(`.${player}`).innerHTML
  playerChoice.classList.add(player);
  results.classList.remove('inactive');
  computerBoard.addEventListener('click', showComputer)
}
function randomChoice(options, player) {
  let newOptions = options.filter(o =>  o !== player )
  let index = Math.floor(Math.random() * newOptions.length);
  return newOptions[index];
}
function showComputer() {
  computerBoard.removeEventListener('click', showComputer)
  computer = randomChoice(options, player);
  computerChoice.innerHTML = document.querySelector(`.${computer}`).innerHTML;
  computerChoice.classList.add(computer);
  setTimeout(() => showOutcome(), 500);
}
function showOutcome() {
  results.removeEventListener('click', showOutcome)
  outcome.textContent = result[player][computer] ? "YOU WIN" : "YOU LOSE";
  resultsBoard.classList.remove('inactive');
}
function clearResults() {
  resultsBoard.classList.add('inactive');
  playerChoice.innerHTML = "";
  playerChoice.classList.remove(player);
  computerChoice.innerHTML = "";
  computerChoice.classList.remove(computer);
  outcome.textContent = ""
}
function runGame() {
  clearResults();
  game.classList.remove('inactive');
  results.classList.add('inactive');
}








