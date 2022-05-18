/* 
GAME FUNCTION:
  - player must guess a number between min and max
  - players get x number of guesses
  - notify player o guesses remaining
  - notify player of the correct answer if loose
  - let player choose to play again
*/


// game values
let min = 1, 
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// play again event listener
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
})

// listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  // validate
  if(isNaN(guess) || guess < min || guess > max ) {
    setMessage(`Please enter number between ${min} and ${max}`, 'red');
  }

  // check if won
  if(guess === winningNum){
    // game won
    gameOver(true, `${winningNum} is correct, WIN!`, 'green');
  } else {
    // wrong number
    guessesLeft -= 1;

    if(guessesLeft === 0) {
      // game over - lost
      gameOver(false, `Game Over, LOSE, The correct number was ${winningNum}`);

    } else {
      // change border color
      guessInput.style.borderColor = 'red';
      //clear Input
      guessInput.value = '';
      // game continues - answer wrong
      setMessage(`${guess} is not correct, ${guessesLeft} remaining`, 'red');

    }
  }
});

// game over
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';

  // disable input
  guessInput.disabled = true;
  // change border color
  guessInput.style.borderColor = color;
  // set message win
  setMessage(msg, color);

  // play again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

// get winning number 
function getRandomNum(min, max){
  let random = Math.floor(Math.random()*(max-min+1)+min);
  return random;
}

// set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}