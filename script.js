const minNum = 1;
const maxNum = 10;
const submit = document.getElementById('submit');
let answer = Math.floor(Math.random() * 10) + 1;

let attempts = document.getElementById('attempts');
let guess = document.getElementById('guess');
let response = document.getElementById('response');
let attempt = 0;
let running = true;
const resetButton = document.getElementById('resetButton');

resetButton.onclick = function () {
    attempt = 0;
    response.textContent = '';
    guess.value = '';
    answer = Math.floor(Math.random() * 10) + 1; // Generate a new answer
    running = true;
};

submit.onclick = function () {
    if (!running) return; // Prevents further guessing if the game is over

    let userGuess = Number(guess.value);

    if (userGuess < minNum || userGuess > maxNum) {
        response.textContent = 'Please input a valid number';
    } else {
        attempt++;

        if (userGuess < answer) {
            response.textContent = 'TOO LOW! TRY AGAIN';
        } else if (userGuess > answer) {
            response.textContent = 'TOO HIGH! TRY AGAIN';
        } else {
            response.textContent = `Correct!! The answer was ${answer}`;
            running = false; // Stops the game after a correct guess
        }
    }
};

