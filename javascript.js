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

