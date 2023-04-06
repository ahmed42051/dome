var randomNumber = Math.floor(Math.random() * 10 + 1)
var guesses = document.querySelector('.guesses')
var LastResult = document.querySelector('.lastResult')
var lowOrHigh = document.querySelector('.lowOrHigh')
var guessSubmit = document.querySelector('.guessSubmit')
var guessField = document.querySelector('.guessField')
var guessCount = 1;


guessField.focus()

function checkGuess () {
    var userGuess = Number(guessField.value);
    if (!userGuess) {
        alert("Please enter a number between 1 and 10.");
        return;
      }
    if (userGuess < 0 || userGuess > 10) {
        alert('Please enter a number between 0 and 10.');
        return;
    }
    if(guessCount == 1){
        guesses.textContent = 'Previous Guesses: ';
    }
    guesses.textContent += userGuess + ' ';
    if(userGuess === randomNumber) {
        LastResult.textContent = 'Congratulations! You Guess The Right Number'
        LastResult.style.backgroundColor = 'green'
        lowOrHigh.textContent = '';
        setGameOver()
    }  else if(guessCount === 5) {
        LastResult.textContent = '!!!GAME OVER!!!';
        lowOrHigh.textContent = '';
        setGameOver();
    } else {
        LastResult.textContent = 'Wrong!';
    }
    if (userGuess < randomNumber) {
        lowOrHigh.textContent = 'last guess was too low'
    } else if(userGuess > randomNumber){
        lowOrHigh.textContent = 'last guess was too high'
        LastResult.backgroundColor = 'red'
    }
    guessCount ++;
    guessField.value = '';
    guessField.focus();
}

guessField.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      event.preventDefault();
      guessSubmit.click();
    }
});


guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button')
    resetButton.textContent = 'Play Again!';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    var resetParas = document.querySelector('.resultParas p')
    for (var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
    
    resetButton.parentNode.removeChild(resetButton)

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    randomNumber = Math.floor(Math.random() * 10 + 1);
}

console.log(randomNumber)