
/* 
Rock, Paper, Scissors Game
Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.
Our code will break the game into four parts:

Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results.
*/

const getUserChoice = function(userInput){
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    } else {
      console.log('Error! Please type in \'rock\',\'paper\', \'scissors\'.');
    };
  };
  
  
  const getComputerChoice = function(){
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0){
      return 'rock';
    } else if (randomNumber === 1){
      return 'paper';
    } else if(randomNumber === 2){
      return 'scissors'
    };
  };
  
  
  const determineWinner = function(userChoice, computerChoice){
    if(userChoice === computerChoice){
      return 'The game was a tie.'
    };
    if(userChoice === 'bomb'){
      return 'You won!';
    }
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'Computer won!'
      } else {
        return 'You Won!'
      };
    };
    if(userChoice === 'paper'){
      if(computerChoice === 'scissors' || computerChoice === 'rock'){
        return 'The computer won!'
      } else {
        return 'You won!'
      };
    };
    if(userChoice === 'scissors'){
      if(computerChoice === 'rock' || computerChoice === 'paper'){
        return 'The computer won'
      } else {
        return 'You won'
      };
    };
  };
  
  const playGame = function(){
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw '+ computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();
  
  