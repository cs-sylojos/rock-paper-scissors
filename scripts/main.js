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
    console.log(`Player throw ${playerSelection}`);
    console.log(`Computer throw ${computerSelection}`);

    if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        console.log(`You Win! Rock beat Scissors`);
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        console.log(`You Win! Paper beat Rock`);
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        console.log(`You Win! Scissors beat Paper`);
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        console.log(`You Lose! Paper beat Rock`);
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        console.log(`You Lose! Scissors beat Paper`);
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        console.log(`You Lose! Rock beat Scissors`);
    } else {
        console.log(`It's a tie!`);
    }
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

const playerSelection = document.querySelectorAll('button');
playerSelection.forEach((playerChoice) => {
    playerChoice.addEventListener('click', e => {
        const computerSelection = getComputerChoice();
        playRound(e.target.id.toLocaleUpperCase(), computerSelection);
    });
});