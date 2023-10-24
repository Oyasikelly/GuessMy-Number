'use strict';
// // console.log(document.querySelector('.label-highscore').textContent);
// document.querySelector('.message').textContent = 'Correct!!';
// document.querySelector('.message').textContent;
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 10;
// let number = document.querySelector('.number').textContent;

// document.querySelector('.score').textContent = 18;
// document.querySelector('.highscore').textContent = Math.trunc(
//   Math.round(Math.random() * 7 + 1)
// );

// document.querySelector('.guess').value = 10;

// if (number === guess) {
//   console.log('equal!');
// }

const secreteNumber = Math.round(Math.random() * 20 + 1);
let scores = 5;
let highscore = 0;
const clicked = document.querySelector('.check');

const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const trials = function (trials) {
  document.querySelector('.score').textContent = trials;
};
const myGuess = function (guess) {
  document.querySelector('.number').textContent = guess;
};
// ==========================================================
clicked.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no code input
  console.log(secreteNumber);

  if (!guess) {
    displaymessage('Empty guess😜,add a number');
  }
  // When player wins
  else if (guess === secreteNumber) {
    if (scores >= 0) {
      displaymessage('You have guest correctly!✔🏆');
      myGuess(secreteNumber);
      document.querySelector('body').style.backgroundColor = '#68b347';
    } else {
      myGuess(secreteNumber);
      trials(0);
      displaymessage("You've lost, but nice try👍");
    }
    if (scores > highscore) {
      highscore = scores;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // ========= When input guess is incorrect =========
  else if (guess !== secreteNumber) {
    if (scores >= 1) {
      displaymessage(guess > secreteNumber ? '📈 Too High' : '📉 Too Low');
      scores--;
      trials(scores);
    } else {
      displaymessage('You lost the game😡');
      trials(0);
      document.querySelector('body').style.backgroundColor = '#ff0000';
    }
  }
});

const againBtn = document.querySelector('.again');
againBtn.addEventListener('click', () => {
  console.log('reset');
});
