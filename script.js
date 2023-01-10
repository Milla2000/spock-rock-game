
const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const playerChoiceall= document.getElementById('player');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

//const allGameIcons = document.querySelectorAll('.far');
const resultText = document.getElementById('resultText');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

// passing player selection value and styling icons

// var myLink = document.getElementById('player');
// myLink.onclick = function (){
//      console.log()
// }
var icon = document.querySelectorAll("i")


function myselect (event) {
  var clickedicon = event.target;
   switch(clickedicon.id) {
    case "playerRock" :
      console.log('hello')
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = '---Rock';
      break;

    case 'playerPaper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = '---Paper';
      break;

    case 'playerScissors':
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = '---Scissors';
      break;

    case 'playerLizard':
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = '---Lizard';
      break;
      
    case 'playerSpock':
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = '---Spock';
      break;
    default:
      break;

  }  
    };

playerChoiceall.addEventListener("click", myselect);