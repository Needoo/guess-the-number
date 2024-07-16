let randomNumber = Math.floor(Math.random() * 101);
let guessCount = 0;

function checkGuess() {
    const userGuess = document.getElementById('guessInput').value;
    const feedback = document.getElementById('feedback');
    guessCount++;

    if (userGuess < randomNumber) {
        feedback.textContent = `Too low! Try again. Guess count: ${guessCount}`;
    } else if (userGuess > randomNumber) {
        feedback.textContent = `Too high! Try again. Guess count: ${guessCount}`;
    } else {
        feedback.textContent = `Congratulations! You guessed it in ${guessCount} tries. The number was ${randomNumber}.`;
    }
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 101);
    guessCount = 0;
    document.getElementById('feedback').textContent = '';
    document.getElementById('guessInput').value = '';
}
