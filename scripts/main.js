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
    console.log(randomNumber);
    console.log(computerChoice);
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLocaleUpperCase();

    if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        return `You Win! Rock beat Scissors`;
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        return `You Win! Paper beat Rock`;
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        return `You Win! Scissors beat Paper`;
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        return `You Lose! Paper beat Rock`;
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        return `You Lose! Scissors beat Paper`;
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        return `You Lose! Rock beat Scissors`;
    }

    return `It's a tie!`;
}

//const playerSelection = 'RocK';
const playerSelection = prompt("Enter Rock, Paper, or Scissors: ");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));