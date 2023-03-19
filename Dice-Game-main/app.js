var newGameBtn = document.querySelector('.newGameBtn');
var diceImg = document.querySelector('.diceImg');
var rollDiceBtn = document.querySelector('.rollDiceBtn');
var holdBtn = document.querySelector('.holdBtn');
var player1Score = document.querySelector('.player1Score');
var player2Score = document.querySelector('.player2Score');
var player1DiceScore = document.querySelector('.player1DiceScore');
var player2DiceScore = document.querySelector('.player2DiceScore');
var player1 = document.querySelector('.player1');
var player2 = document.querySelector('.player2');
var activePlayer = player1;
var diceScore = player1DiceScore;
var playerScore = player1Score;
var winnerAnnouce = document.querySelector('.winnerAnnouce');
var overlay = document.querySelector('.overlay')


function changeBg() {
    activePlayer.style.borderTopLeftRadius = "0px"
    activePlayer.style.borderBottomLeftRadius = "0px"
    activePlayer.style.borderTopRightRadius = "10px"
    activePlayer.style.borderBottomRightRadius = "10px"
}

function newGame() {
    location.reload();
    
}

function diceChanging() {
    var diceNum = Math.round(Math.random() * 5) + 1;
    diceImg.src = `./assets/${diceNum}.png`;
    diceImg.classList.add('clicked'); // Add this line
    if (diceNum == 1) {
        diceScore.textContent = 0;
        playerMoving();
    } else {
        diceScore.textContent = +diceScore.textContent + diceNum
    }
};

diceImg.addEventListener('click', function() {
    this.classList.remove('clicked');
    setTimeout(() => {
      this.style.transition = 'transform 0.5s ease-in-out';
      this.style.transform = 'none';
      setTimeout(() => {
        this.style.transition = '';
      }, 500);
    }, 500);
  });
  

function holdScore() {
    playerScore.textContent = Number(playerScore.textContent) + Number(diceScore.textContent)

    diceScore.textContent = 0

    if (playerScore.textContent >= 50) {
        if (activePlayer == player1) {
            alert(`Player 1 Wins`);
            newGame();
        } else {
            alert(`Player 2 Wins`);
            newGame();
        }
    } else {
        playerMoving();
    }
}

function playerMoving() {
    if (activePlayer == player1) {
        activePlayer = player2;
        activePlayer.classList.add('active');
        player1.classList.remove('active');
        changeBg();
    } else if (activePlayer == player2) {
        activePlayer = player1;
        activePlayer.classList.add('active');
        player2.classList.remove('active');

    }
    playerActivation();
}

function playerActivation() {
    if (activePlayer == player1) {
        diceScore = player1DiceScore;
        playerScore = player1Score;
    } else if (activePlayer == player2) {
        diceScore = player2DiceScore;
        playerScore = player2Score;
    }
}

newGameBtn.addEventListener('click', newGame);
rollDiceBtn.addEventListener('click', diceChanging);
holdBtn.addEventListener('click', holdScore);