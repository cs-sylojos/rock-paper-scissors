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
        playerChoiceImage.src = './images/rock.png';
        computerChoiceImage.src = './images/scissor.png';
        playerWinCount++;
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        displayResult(undefined, playerSelection, computerSelection, 'Win');
        playerChoiceImage.src = './images/paper.png';
        computerChoiceImage.src = './images/rock.png';
        playerWinCount++;
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        displayResult(undefined, playerSelection, computerSelection, 'Win');
        playerChoiceImage.src = './images/scissor.png';
        computerChoiceImage.src = './images/paper.png';
        playerWinCount++;
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        displayResult(undefined, playerSelection, computerSelection, 'Lose');
        playerChoiceImage.src = './images/rock.png';
        computerChoiceImage.src = './images/paper.png';
        computerWinCount++;
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        displayResult(undefined, playerSelection, computerSelection, 'Lose');
        playerChoiceImage.src = './images/paper.png';
        computerChoiceImage.src = './images/scissor.png';
        computerWinCount++;
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        displayResult(undefined, playerSelection, computerSelection, 'Lose');
        playerChoiceImage.src = './images/scissor.png';
        computerChoiceImage.src = './images/rock.png';
        computerWinCount++;
    } else {
        displayResult(undefined, playerSelection, computerSelection);
        if (playerSelection === 'ROCK' && computerSelection === 'ROCK') {
            playerChoiceImage.src = './images/rock.png';
            computerChoiceImage.src = './images/rock.png';
        } else if (playerSelection === 'PAPER' && computerSelection === 'PAPER') {
            playerChoiceImage.src = './images/paper.png';
            computerChoiceImage.src = './images/paper.png';
        } else if (playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS') {
            playerChoiceImage.src = './images/scissor.png';
            computerChoiceImage.src = './images/scissor.png';
        }
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
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const winner = document.querySelector('#winner');
const outputResult = document.querySelector('#outputContainer');
const playerSelection = document.querySelectorAll('.buttonContainer > button');
const computerChoiceImage = document.querySelector('#computerImage');
const playerChoiceImage = document.querySelector('#playerImage');
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
        playerScore.textContent = `Player - ${playerWinCount}`;
        computerScore.textContent = `Computer - ${computerWinCount}`;
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