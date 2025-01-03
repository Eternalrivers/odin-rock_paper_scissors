function getRandom() {
  return  Math.floor((Math.random()) * 3);
}
//  A function that returns a random number between 100 and 0.
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
      console.log ("draw");
  
  } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log ("You lose! Paper beats rock.");
      return (++initComputerScore);
  
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log ("You won! Rock beats scissors.");
      return (++initHumanScore);
  }
   else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log ("You lose! Scissors beats paper.");
      return (++initComputerScore);

  } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log ("You won! Paper beats rock.");
      return (++initHumanScore);
  
  }else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log ("You won! Scissors beats paper.");
      return (++initHumanScore);
  
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log ("You lose! Rock beats scissors.");
      return (++initComputerScore);
  }
}

function finalScore() {
 if (initComputerScore < initHumanScore) {
   console.log (`You got ${initHumanScore} point(s). You won!`);
 
  } else if (initComputerScore > initHumanScore) {
   console.log (`You got ${initHumanScore} point(s). You lose!`);
 
  } else if (initComputerScore = initHumanScore) {
    console.log (`You got ${initHumanScore} point(s). It's a draw`);
  }
}

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

/**
 * The computerChoice variable has its variable in a constant value. 
 * Meaning that any presses of the button will result in the computer having the same choice.
 * The variable computerChoice was removed as a parameter for playRound moving the variable to the function itself.
 * 1st param for the playRound comes from the button using the dataset.
 */
btnRock.addEventListener ('click', function(e) {
  playRound (e.target.dataset.value);
});
btnPaper.addEventListener ('click', function(e) {
  playRound (e.target.dataset.value);
});
btnScissors.addEventListener ('click', function(e) {
  playRound (e.target.dataset.value);
});

/**
 * The computerChoice variable has its variable in a constant value. Meaning that any presses of the button will result in the computer having the same choice.
 * The variable computerChoice was removed moving the variable to the function itself.
 */