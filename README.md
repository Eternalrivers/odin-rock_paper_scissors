# odin-rock_paper_scissors
Project: Rock Paper Scissors

This project will demonstrate the lessons I have learned for the past few weeks regarding variables and operators, data types & conditionals, function basics. Using all this to make a working script for rock, paper, and scissors.

Pseudocode:
Task 1:
Return randomly generated number from 1 to 99
Assign range for string values "rock", "paper", and "scissors"
  If values is between 1 to 33 then return string value "rock"
  If values is between 34 to 66 then return string value "paper"
  If values is between 67 to 99 then return string value "scissors"

Task 2:
Obtain a user input
Return a valid choice depending on the user's input
  If user enter's "rock", return "rock"
  If user enter's "paper", return "paper"
  If user enter's "scissors", return "scissor"
  Else return "NIL"

Task 3:
Initialize two counter variable for human score and computer score
Set both variable's value to zero

Task 4:
Get humanChoice and computerChoice string values 
Set humanChoice so that user inputted values is case insensitive
Set humanChoice and computerChoice as parameters for a new function
Obtain round winner between humanChoice and computerChoice by using conditions;
  "rock beats scissors"
  "scissor beats paper"
  "paper beats rock"
Print string value showing the round winner.
Increment humanScore or computerScore by 1 depending on the round winner

Task 5:
Set a new game
  A new game consists of maximum of 5 rounds
  Increment the winner's score by 1 each time the round ends
Repeat each round until the game reaches 5 rounds
Calculate the total scores to determine the winner
