'use strict';
// Got to know the difference between textContent and value. Value is used to retreive value from input elements and tc
// selects the value from html elements such as <h1> This text can be selected </h2> but not this

// 2. add functionality when user presses enter to start the click function;
const userInput = document.querySelector('.guess');
userInput.value = ''; //to automatically clear the values as the page refreshes
let randomNumber = Math.floor(Math.random() * 20 + 1);
const check = document.querySelector('.check'); //button
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const qMark = document.querySelector('.number');
const restart = document.querySelector('.again');
const body = document.querySelector('.body');
const highScore = document.querySelector('.highscore');
let userScore = 20;

function evaluate() {
  const input = parseInt(userInput.value);
  if (input === randomNumber) {
    //show the message and stop and restart
    qMark.textContent = `${input}`;
    body.style.background = '#60b347';
    message.textContent = `Congratulations🥳🎉,You won!
                                You made it in ${20 - userScore + 1} attempt`;
    if (parseInt(highScore.textContent) < userScore) {
      highScore.textContent = userScore;
    }
  } else if (input < randomNumber) {
    //too high bro and score--
    message.textContent = 'Too low bro! Try again...';
    userScore--;
    score.textContent = userScore;
  } else {
    //too low bro and score--
    message.textContent = 'Too high bro! Try once more...';
    userScore--;
    score.textContent = userScore;
  }
}

// If you write evaluate() like this it will run at least once whether you click on it or not
// So we us evaluate so that the function is triggered only when the user clicks on check
check.addEventListener('click', evaluate);
// When the use presses enter in the input field evaluate is triggered.
userInput.addEventListener('keyup', e => {
  if (e.key === 'Enter') evaluate();
});

// Except highScore everyting is reset
function reset() {
  // Clear previous value
  userInput.value = '';
  // Generate random number once more
  randomNumber = Math.floor(Math.random() * 20 + 1);
  console.log(randomNumber);
  // Start with score 20 again
  userScore = 20;
  score.textContent = userScore;
  // message set to "Start guessing..."
  message.textContent = 'Start guessing...';
  // Mystery q mark
  qMark.textContent = '?';
  // background
  body.style.background = '#222';
}
restart.addEventListener('click', reset);
