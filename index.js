
let button = document.getElementById('guess');
let restart = document.getElementById('restart');
let counter = document.getElementById('counter');
let userGuessInput = document.getElementById('guessValue');
let hint = document.getElementById('hint');
let count = 0;
let won = false;
let selectElement = document.getElementById('option');
let randomValue;

selectElement.onchange = function () {
    let selectedValue = this.value;

    if (selectedValue === 'easy') {
        randomValue = Math.floor(Math.random() * 10) + 1;
        button.onclick = function () {
            let userGuess = Number(userGuessInput.value);
            function1(userGuess);
            increaseCounter();
        }
    } else if (selectedValue === 'medium') {
        randomValue = Math.floor(Math.random() * 90) + 11;
        button.onclick = function () {
            let userGuess = Number(userGuessInput.value);
            function2(userGuess);
            increaseCounter();
        }
    } else if (selectedValue === 'hard') {
        randomValue = Math.floor(Math.random() * 400) + 101;
        button.onclick = function () {
            let userGuess = Number(userGuessInput.value);
            function3(userGuess);
            increaseCounter();
        }
    }
};

function function1(userGuess) {
    if (userGuess >= 1 && userGuess <= 10) {
        if (userGuess === randomValue) {
            hint.innerText = `Congratulations, you won in ${count + 1} attempts!`;
            won = true;
        } else if (userGuess < randomValue) {
            hint.innerText = "Your guess is too low!";
        } else if (userGuess > randomValue) {
            hint.innerText = "Your guess is too high!";
        }
    } else {
        hint.innerText = "No hints for this value";
    }
}

function function2(userGuess) {
    if (userGuess >= 11 && userGuess <= 100) {
        if (userGuess === randomValue) {
            hint.innerText = `Congratulations, you won in ${count + 1} attempts!`;
            won = true;
        } else if (userGuess < randomValue) {
            hint.innerText = "Your guess is too low!";
        } else if (userGuess > randomValue) {
            hint.innerText = "Your guess is too high!";
        }
    } else {
        hint.innerText = "No hints for this value";
    }
}

function function3(userGuess) {
    if (userGuess >= 101 && userGuess <= 500) {
        if (userGuess === randomValue) {
            hint.innerText = `Congratulations, you won in ${count + 1} attempts!`;
            won = true;
        } else if (userGuess < randomValue) {
            hint.innerText = "Your guess is too low!";
        } else if (userGuess > randomValue) {
            hint.innerText = "Your guess is too high!";
        }
    } else {
        hint.innerText = "No hints for this value";
    }
}

function increaseCounter() {
    if (count < 4) {
        count++;
        counter.innerText = count;
    } else {
        counter.innerText = "Guesses Finished";
        if (!won) {
            hint.innerText = "You lost, the answer was " + randomValue;
        }
    }
}

restart.onclick = function () {
    count = 0;
    won = false;
    counter.innerText = count;
    hint.innerText = "Select an option";
    userGuessInput.value = "";
    selectElement.value.innerText = "Select an option";
};
