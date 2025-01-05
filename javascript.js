function getRandom() {
  return  Math.floor((Math.random()) * 3);
}
//  A function that returns a random number between 2 and 0.
function getComputerChoice(){
  const choice = getRandom ();
  
    if (choice == 1) {
      return ("rock");

    }else if (choice == 2) {
      return ("paper");
  
    }else {
    return ("scissors");
  }
}
// Random number generated is assigned a string value.

function getHumanChoice() {
  let userInput = prompt ("rock, paper, or scissors?");

  return (userInput); 
}

let initHumanScore = 0;
let initComputerScore = 0;


//uses string values from previous functions
function playRound(humanChoice) {
  const computerChoice = getComputerChoice ();

    if (humanChoice === computerChoice) {
      messageResult.textContent = ('draw');
          
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      initComputerScore++;
      messageResult.textContent = ("You lose! Paper beats rock.");
    
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      initHumanScore++;
      messageResult.textContent = ("You won! Rock beats scissors.");
    
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        initComputerScore++;
        messageResult.textContent = ("You lose! Scissors beats paper.");

    } else if (humanChoice === "paper" && computerChoice === "rock") {
        initHumanScore++;
        messageResult.textContent = ("You won! Paper beats rock.");
        
    }else if (humanChoice === "scissors" && computerChoice === "paper") {
        initHumanScore++;
        messageResult.textContent = ("You won! Scissors beats paper.");
    
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        initComputerScore++;
        messageResult.textContent = ("You lose! Rock beats scissors.");
    } 
  
    hum.textContent =(`Human score ${initHumanScore}`);
    comp.textContent =(`Computer score ${initComputerScore}`);
  
  }
 
function finalScore() {
 if (initComputerScore < initHumanScore) {
  messageResult.textContent = (`You got ${initHumanScore} point(s). You won!`);
 
  } else if (initComputerScore > initHumanScore) {
    messageResult.textContent = (`You got ${initHumanScore} point(s). You lose!`);
  }
}

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const btn = document.querySelectorAll ('button');



/**
 * The computerChoice variable has its variable in a constant value. 
 * Meaning that any presses of the button will result in the computer having the same choice.
 * The variable computerChoice was removed as a parameter for playRound moving the variable to the function itself.
 * 1st param for the playRound comes from the button using the dataset.
 */
btnRock.addEventListener ('click', function(e) {
  if (initComputerScore === 5 || initHumanScore === 5) {
    finalScore ();
    removeButtons();
  
  } 
  playRound (e.target.dataset.value);

  if (initComputerScore === 5 || initHumanScore === 5) {
    finalScore ();
    
}
});
btnPaper.addEventListener ('click', function(e) {
  if (initComputerScore === 5 || initHumanScore === 5) {
    finalScore ();
    removeButtons();
  
  } 
  playRound (e.target.dataset.value);

  if (initComputerScore === 5 || initHumanScore === 5) {
    finalScore ();
}
});
btnScissors.addEventListener ('click', function(e) {
  if (initComputerScore === 5 || initHumanScore === 5) {
    finalScore ();
    removeButtons();
  
  } 
  playRound (e.target.dataset.value);

  if (initComputerScore === 5 || initHumanScore === 5) {
    finalScore ();
}
});

/**
 * The computerChoice variable has its variable in a constant value. Meaning that any presses of the button will result in the computer having the same choice.
 * The variable computerChoice was removed moving the variable to the function itself.
 */
const hum = document.querySelector('#humanScore');
const comp = document.querySelector('#computerScore');
const messageResult = document.querySelector('.message');
const btns = document.querySelector("button");
const div = document.querySelector('div');

hum.textContent =(`Human score ${initHumanScore}`);
comp.textContent =(`Computer score ${initComputerScore}`);


function removeButtons() {
  div.removeChild("btns");
}