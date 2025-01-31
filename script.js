
let userScore = 0;
let computerScore = 0;
let drawScore = 0;


// math.random is gonna be from 0 to 1 .. numbers like 0.41651 0.95161 .. so we divided it into 3 parts
//compter random choice
function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = ''
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    }

    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    }

    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissors';
    }
    return computerMove;
}



function gameMove(move) {
    const computerMove = pickComputerMove();
    let result = ''

    if (move == computerMove) {
        result = 'Draw';
        drawScore++;
    }
    else if
        ((move == 'Rock' && computerMove == 'Paper') ||
        (move == 'Scissors' && computerMove == 'Rock') ||
        (move == 'Paper' && computerMove == 'Scissors')) {

        result = 'You Lose';
        computerScore++;
    }
    else if
        ((move == 'Paper' && computerMove == 'Rock') ||
        (move == 'Scissors' && computerMove == 'Paper') ||
        (move == 'Rock' && computerMove == 'Scissors')) {

        result = 'You Win';
        userScore++;
    }

    document.getElementById('result').innerText = `You picked ${move}, Computer picked ${computerMove} \n${result}!`;
    document.getElementById('score').innerText = `User: ${userScore} | Computer: ${computerScore} | Draws: ${drawScore}`;
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    drawScore = 0;
    document.getElementById('score').innerText = `User: ${userScore} | Computer: ${computerScore} | Draws: ${drawScore}`;
    document.getElementById('result').innerText = '';
}