'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'π Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);
*/

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//μ€λ³΅λ μ½λ λ¨μννκΈ° μν΄μ
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // μλ ₯ κ°μ΄ μλ κ²½μ°
  if (!guess) {
    //document.querySelector('.message').textContent = 'βοΈ No number!';
    displayMessage('βοΈ No number!');

    // κ° μΌμΉ
  } else if (guess === SecretNumber) {
    document.querySelector('.message').textContent = 'π Correct Number!';

    document.querySelector('.number').textContent = SecretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    //highscore μ€μ 
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // κ°μ΄ νλ Έμλ(ν¬κ±°λ μμλ)
  } else if (guess !== SecretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > SecretNumber ? 'π Too high!' : 'π Too low!';
      displayMessage(guess > SecretNumber ? 'π Too high!' : 'π Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'π₯ You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  //   // κ°μ΄ ν΄λ
  //   else if (guess > SecretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'π Too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'π₯ You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     // κ°μ΄ μμλ
  //   } else if (guess < SecretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'π Too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'π₯ You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

//again λ²νΌ ν΄λ¦­ μ λ°μ
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  let SecretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
