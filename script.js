import { startConfetti, stopConfetti, removeConfetti } from './confetti.js';

const playerScoreEl = document.getElementById('playerScore');
const resetBtn = document.getElementById('reset');
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

const allGameIcons = document.querySelectorAll('.far');
const resultText = document.getElementById('resultText');

const choices = {
  Rock: { name: 'Rock', defeats: ['Scissors', 'Lizard'] },
  Paper: { name: 'Paper', defeats: ['Rock', 'Spock'] },
  Scissors: { name: 'Scissors', defeats: ['Paper', 'Lizard'] },
  Lizard: { name: 'Lizard', defeats: ['Paper', 'Spock'] },
  Spock: { name: 'Spock', defeats: ['Scissors', 'Rock'] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';


//reset all 'selected' icon
function resetSelected(){
  allGameIcons.forEach((icon) =>{
    icon.classList.remove('selected');
  });
  stopConfetti();
  removeConfetti();
}

//reset score and playerchoice/computer choice
function resetAll(){
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  computerChoiceEl.textContent = '';
  computerScoreEl.textContent = computerScoreNumber;
  playerChoiceEl.textContent = playerScoreNumber;
  playerScoreEl.textContent = "";
  resultText.textContent= "";
  resetSelected();
}


//random computer choice
function computerRandomChoice(){
  const computerChoiceNumber = Math.random();
  if(computerChoiceNumber < 0.2){
    computerChoice = "Rock";
  }
  else if(computerChoiceNumber <= 0.4){
    computerChoice = "Paper";
  }
  else if(computerChoiceNumber <= 0.6){
    computerChoice = "Scissors";
  }
  else if(computerChoiceNumber <= 0.8){
    computerChoice = "Lizard";
  }
  else {
    computerChoice = "Spock";
  }
 //console.log('computerrandomchoice:', computerChoice)
}
//add 'selected' styling and computer choice
function displayComputerChoice () { 


  
   switch(computerChoice) {
    case "Rock" :
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = '---Rock';
      break;

    case 'Paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = '---Paper';
      break;

    case 'Scissors':
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = '---Scissors';
      break;

    case 'Lizard':
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = '---Lizard';
      break;
      
    case 'Spock':
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = '---Spock';
      break;
      
    default:
      //console.log('computerChoice')
      break;

  }  
    };

//check result, increase scores, update resultText
function updateScore(clickedicon){
   //console.log('current:',clickedicon, computerChoice)
   if(clickedicon === computerChoice){
     resultText.textContent = "It's a tie!";
   }else{
    const choice = choices[clickedicon];
    //console.log("value", choice.defeats.indexOf(computerChoice));

    if(choice.defeats.indexOf(computerChoice) > -1){
      startConfetti(900);
      resultText.textContent= "You Won!";
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
    }else{
      stopConfetti()
      resultText.textContent= "You Lose!";
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;

    }

   }
}


//call functions to process turn
function checkResult(clickedicon){

  resetSelected();
  computerRandomChoice();
  //displayComputerChoice();
  updateScore(clickedicon);
  
}


// passing player selection value and styling icons

// var myLink = document.getElementById('player');
// myLink.onclick = function (){
//      console.log()
// }


function myselect (playerChoice) {
  var clickedicon = playerChoice.target.title;
  checkResult(clickedicon);
  

   switch(clickedicon) {
    case "Rock" :
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = '---Rock';
      break;

    case 'Paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = '---Paper';
      break;

    case 'Scissors':
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = '---Scissors';
      break;

    case 'Lizard':
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = '---Lizard';
      break;
      
    case 'Spock':
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = '---Spock';
      break;
    default:
      break;

  }  
  // console.log(clickedicon.title)

  if( clickedicon.title == ''){
    //console.log('if statement')
    return;
  }else{
    displayComputerChoice();
  } 
  //console.log(clickedicon)
};
    
//on startup set initial values


playerChoiceall.addEventListener("click", myselect);
resetBtn.addEventListener("click", resetAll )
window.onload = function() { resetAll();};


