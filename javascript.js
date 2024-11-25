console.log("Hello World!")
console.log("John")

function getRandom() {
  return  Math.floor((Math.random()) * (100-1) + 1);
}
//  A function that returns a random number between 100 and 0.
function getComputerChoice(){

  let choice = getRandom ();

  console.log (choice);

  
  if (choice < 34 && choice > 0) {
   return ("rock");
  
  } else if (choice < 67 && choice > 33) {
    return ("paper");
  
  }else  {
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


let humanSelection = getHumanChoice();

let humanChoice = humanSelection.toLowerCase();
let computerChoice = getComputerChoice ();

//uses string values from previous functions

function playRound(humanChoice,computerChoice) {
    
    console.log (humanChoice);
    console.log (computerChoice);
    
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

function playGame (){
  
  for (let i = 0; i<5 ; i++) {

    //Function will initialize again until game reaches 5 rounds  

  let compChoice = getComputerChoice ();
  let humChoice = getHumanChoice ();
  let humOptions = humChoice.toLowerCase();
  
    // Assigned a different variable for the given functions. This variables are obtained as parameters for our playRound function.

  playRound (compChoice, humOptions);

  console.log (`Computer score = ${initComputerScore}`);
  console.log (`Human score = ${initHumanScore}`);
  }
  
  finalScore(initComputerScore, initHumanScore);

  // After the loop is finished. Scores were calculated to print the winner.
}