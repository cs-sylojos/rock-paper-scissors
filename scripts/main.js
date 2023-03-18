function getComputerChoice() {
    let computerChoice;
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        computerChoice = 'ROCK';
    } else if (randomNumber === 1) {
        computerChoice = 'PAPER';
    } else {
        computerChoice = 'SCISSORS';
    }

    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    const elementToRemove = document.querySelectorAll(`div#outputContainer > p`);
    elementToRemove.forEach((element) => {
        if (element !== null) {
            element.remove();
        }
    });

    displayResult('Player', playerSelection);
    displayResult('Computer', undefined, computerSelection);

    if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        displayResult(undefined, playerSelection, computerSelection, 'Win');
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        displayResult(undefined, playerSelection, computerSelection, 'Win');
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        displayResult(undefined, playerSelection, computerSelection, 'Win');
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        displayResult(undefined, playerSelection, computerSelection, 'Lose');
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        displayResult(undefined, playerSelection, computerSelection, 'Lose');
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        displayResult(undefined, playerSelection, computerSelection, 'Lose');
    } else {
        displayResult(undefined, playerSelection, computerSelection);
    }
}

function displayResult(who, playerChoice = null, computerChoice = null, winLose = 'tie') {
    const content = document.createElement('p');
    if (playerChoice !== null && computerChoice === null) {
        content.classList.add(who);
        content.textContent = `${who} throw ${playerChoice}`;
    } else if (playerChoice === null && computerChoice !== null) {
        content.classList.add(who);
        content.textContent = `${who} throw ${computerChoice}`;
    } else if (playerChoice !== null && computerChoice !== null && winLose === 'Win') {
        content.textContent = `You ${winLose}! ${playerChoice} beat ${computerChoice}`;
    } else if (playerChoice !== null && computerChoice !== null && winLose === 'Lose') {
        content.textContent = `You ${winLose}! ${computerChoice} beat ${playerChoice}`;
    } else if (playerChoice === computerChoice) {
        content.textContent = `It's a ${winLose}!`;
    }
    outputResult.appendChild(content);
}
/*
function game() {
    let playerWinCount = 0;
    let computerWinCount = 0;
    let playerSelection;
    let exit = false;

    const btns = document.querySelectorAll('button');
    btns.forEach((btn) => {
        btn.addEventListener('click', playRound());
    });

    for (let round = 1; round <= 5; round++) {
        for (;;) {
            playerSelection = prompt(`Round ${round}: Enter Rock, Paper, or Scissors: `);
            if (playerSelection === null) {
                exit = true;
                break;
            }
            playerSelection = playerSelection.toLocaleUpperCase();
            if (playerSelection === 'ROCK' || playerSelection === 'PAPER' || playerSelection === 'SCISSORS') {
                break;
            } else if (playerSelection === 'QUIT') {
                exit = true;
                break;
            }
            console.log(`Please enter one of the choices: Rock, Paper, or Scissors`);
        }
        if (exit === true) {
            console.log(`You have quit the game.`);
            break;
        }
        const computerSelection = getComputerChoice();
        console.log(`Round ${round}: `);
        let count = playRound(playerSelection, computerSelection);
        if (count === 1) {
            playerWinCount++;
            console.log(`Round ${round} score: Player - ${playerWinCount} vs Computer - ${computerWinCount}`);
        } else if (count === 0) {
            computerWinCount++;
            console.log(`Round ${round} score: Player - ${playerWinCount} vs Computer - ${computerWinCount}`);
        } else if (count === 2) {
            console.log(`Round ${round} score: Player - ${playerWinCount} vs Computer - ${computerWinCount}`);
        }
    }

    if (exit === false) {
        if (playerWinCount > computerWinCount) {
            console.log(`Winner is Player!`);
        } else if (playerWinCount < computerWinCount) {
            console.log(`Winner is Computer!`);
        } else {
            console.log(`There is no winner. It's a tie!`);
        }
    }
}

game();*/

const outputResult = document.querySelector('#outputContainer');
const playerSelection = document.querySelectorAll('button');
playerSelection.forEach((playerChoice) => {
    playerChoice.addEventListener('click', e => {
        const computerSelection = getComputerChoice();
        playRound(e.target.id.toLocaleUpperCase(), computerSelection);
    });
});