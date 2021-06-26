// Useful variables
const resultGuide = {
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
let player;
let computer;
let winner;
let score = (localStorage.score && 0)

// Media queries
const body = document.querySelector('body');
const game = document.querySelector('.game');
const results = document.querySelector('.results');
const playAgain = document.querySelector('.play-again');
const playerBoard = document.querySelector('.player-board');
const computerBoard = document.querySelector('.computer-board');
const outcomeBoard = document.querySelector('.outcome-board')
const outcome = document.querySelector(".outcome");
let playerChoice = document.querySelector('.player');
let computerChoice = document.querySelector('.computer');
let rulesModal = document.querySelector('.rules-modal');
let overlay = document.querySelector('.overlay');

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
  playerChoice.classList.add('large-choice');
  results.classList.remove('inactive');
  computerBoard.addEventListener('click', showComputer)
}

function randomChoice(options) {
  let index = Math.floor(Math.random() * options.length);
  return options[index];
}

function result(player, computer) {
  if (player === computer) return "IT'S A TIE!";
  return resultGuide[player][computer] ? "YOU WIN!" : "YOU LOSE!";
}

function whoWon() {
  if (resultGuide[player][computer] === undefined) return null
  return resultGuide[player][computer] ? playerChoice : computerChoice;
}

function showComputer() {
  computerBoard.removeEventListener('click', showComputer)
  computer = randomChoice(options);
  computerChoice.innerHTML = document.querySelector(`.${computer}`).innerHTML;
  computerChoice.classList.add(computer);
  computerChoice.classList.remove('empty-choice');
  computerChoice.classList.add('large-choice');
  showOutcome();
}

function showOutcome() {
  winnerChoice =  whoWon()
  winnerChoice && winnerChoice.classList.add('winner');
  outcome.textContent = result(player, computer);
  results.removeEventListener('click', showOutcome)
  outcomeBoard.classList.remove('inactive');
}

function clearResults() {
  outcomeBoard.classList.add('inactive');
  playerChoice.innerHTML = "";
  playerChoice.classList.remove(player);
  playerChoice.classList.remove('large-choice');
  computerChoice.innerHTML = "\n        <h3>CLICK TO REVEAL</h3>\n      ";
  computerChoice.classList.remove(computer);
  computerChoice.classList.add('empty-choice');
  computerChoice.classList.remove('large-choice');
  outcome.textContent = ""
  winnerChoice && winnerChoice.classList.remove('winner');
}

function runGame() {
  clearResults();
  game.classList.remove('inactive');
  results.classList.add('inactive');
}


function openModal() {
  rulesModal.classList.remove('inactive');
  overlay.classList.remove('inactive');
}

function closeModal() {
  rulesModal.classList.add('inactive');
  overlay.classList.add('inactive');
}





