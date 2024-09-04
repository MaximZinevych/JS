'use strict';

const congratulationMessage = '🎉 Correct Number!';
const invalidNumberMessage = '⛔️ Not Number!';
const lostMessage = '💥 You lost the game! Looser';

const messageSelector = document.querySelector('.message');
const number = document.querySelector('.number');
const checkButton = document.querySelector('.check');
const resetButton = document.querySelector('.again');

let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.warn(randomNumber);

let score = 20;
let highscore = 0;

const highscoreSelector = document.querySelector('.highscore');

checkButton.addEventListener('click', function () {
	//  Check if the player has a score
	if (score > 1) {
		const guessValue = Number(document.querySelector('.guess').value);

		// Check if the input is a number
		if (!guessValue) {
			messageSelector.textContent = invalidNumberMessage;

			// When player wins
		} else if (guessValue === randomNumber) {
			messageSelector.textContent = congratulationMessage;
			number.textContent = randomNumber;
			checkButton.disabled = true;
			checkButton.style.backgroundColor = 'gray';
			document.querySelector('body').style.backgroundColor = '#60b347';
			messageSelector.style.fontSize = '2.5rem';

			bounceAnimation();

			if (score > highscore) {
				highscore = score;
				highscoreSelector.textContent = highscore;
			}
			// When guess is wrong
		} else if (guessValue > randomNumber) {
			messageSelector.textContent = '📈 Too high!';
			score--;
		} else if (guessValue < randomNumber) {
			messageSelector.textContent = '📉 Too low!';
			score--;
		}

		// When player loses
	} else {
		messageSelector.textContent = lostMessage;
		checkButton.disabled = true;
		checkButton.style.backgroundColor = 'gray';
		score--;
	}
	document.querySelector('.score').textContent = score;
});

resetButton.addEventListener('click', resetGame);

function resetGame() {
	document.querySelector('.score').textContent = score = 20;
	checkButton.disabled = false;
	checkButton.style.backgroundColor = '#eee';
	document.querySelector('.guess').value = '';
	randomNumber = Math.trunc(Math.random() * 20) + 1;
	console.warn(randomNumber);
	number.textContent = '?';
	document.querySelector('body').style.backgroundColor = '#222';
	messageSelector.style.fontSize = '2rem';
	messageSelector.textContent = 'Start guessing...';
	bounceAnimation();
}

function bounceAnimation() {
	messageSelector.classList.remove('bounce');
	void messageSelector.offsetWidth;
	messageSelector.classList.add('bounce');
}
