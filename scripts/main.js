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
        playerWinCount++;
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        displayResult(undefined, playerSelection, computerSelection, 'Win');
        playerWinCount++;
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        displayResult(undefined, playerSelection, computerSelection, 'Win');
        playerWinCount++;
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        displayResult(undefined, playerSelection, computerSelection, 'Lose');
        computerWinCount++;
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        displayResult(undefined, playerSelection, computerSelection, 'Lose');
        computerWinCount++;
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        displayResult(undefined, playerSelection, computerSelection, 'Lose');
        computerWinCount++;
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
        content.textContent = `Player score! ${playerChoice} beat ${computerChoice}`;
    } else if (playerChoice !== null && computerChoice !== null && winLose === 'Lose') {
        content.textContent = `Computer score! ${computerChoice} beat ${playerChoice}`;
    } else if (playerChoice === computerChoice) {
        content.textContent = `It's a ${winLose}!`;
    }
    outputResult.appendChild(content);
}

let roundCount = 0;
let playerWinCount = 0;
let computerWinCount = 0;
const round = document.querySelector('#round');
const score = document.querySelector('#score');
const winner = document.querySelector('#winner');
const outputResult = document.querySelector('#outputContainer');
const playerSelection = document.querySelectorAll('button');
playerSelection.forEach((playerChoice) => {
    playerChoice.addEventListener('click', e => {
        const computerSelection = getComputerChoice();
        playRound(e.target.id.toLocaleUpperCase(), computerSelection);
        roundCount++;
        const winnerToRemove = document.querySelector('div#winner > p');
        if (winnerToRemove !== null) {
            winnerToRemove.remove();
        }
        round.textContent = `Round ${roundCount}`;
        score.textContent = `Player - ${playerWinCount} vs Computer - ${computerWinCount}`;
        if (playerWinCount === 5 || computerWinCount === 5) {
            roundCount = 0;
            const winnerContent = document.createElement('p');
            if (playerWinCount === 5) {
                winnerContent.textContent = `Game Over! Player has Won the game!`;
            } else if (computerWinCount === 5) {
                winnerContent.textContent = `Game Over! Computer has Won the game!`;
            }
            playerWinCount = 0;
            computerWinCount = 0;
            winner.appendChild(winnerContent);
        }
    });
});