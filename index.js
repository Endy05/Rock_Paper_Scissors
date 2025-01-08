humanSelection = document.querySelector('.humanChoice');
computerSelection = document.querySelector('.computerChoice');
score = document.querySelector('.score');
round = document.querySelector('.round');
winner = document.querySelector(".winner");
playAgain = document.querySelector(".game__box");

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    playGame('rock');
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    playGame('paper');
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    playGame('scissors');
});

humanScore = 0;
computerScore = 0;
let rounds = 0;

const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(humanChoice, computerChoice) {
    rounds++;

    if (humanChoice === computerChoice) {
        return 'It is a tie!';
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        return 'You win!';
    } else {
        computerScore++;
        return 'You lose!';
    }
}

function playGame(humanChoice1) {
    const humanChoice = humanChoice1;
    const computerChoice = getComputerChoice();

    console.log(playRound(humanChoice, computerChoice));

    updateDashbord(rounds, humanChoice, computerChoice);

    if (computerScore >= 5 || humanScore >= 5) {
        if (humanScore > computerScore) {
            winner.textContent = "YOU WIN :)";
        } else {
            winner.textContent = "YOU LOSE :(";
        }

        document.querySelector('.rock').style.display = 'none';
        document.querySelector('.paper').style.display = 'none';
        document.querySelector('.scissors').style.display = 'none';

        const button = document.createElement('button');
        button.textContent = "Restart Game";
        button.classList.add('restart');
        document.querySelector('.game__box').appendChild(button);

        button.addEventListener('click', () => {
            document.querySelector('.rock').style.display = 'inline-block';
            document.querySelector('.paper').style.display = 'inline-block';
            document.querySelector('.scissors').style.display = 'inline-block';

            winner.textContent = '';

            humanScore = 0;
            computerScore = 0;
            rounds = 0;
            updateDashbord(rounds, 'null', 'null');
            button.remove();
        });
    }
}

function updateDashbord(rounds, humanChoice, computerChoice) {
    humanSelection.textContent = humanChoice;
    computerSelection.textContent = computerChoice;
    score.textContent = humanScore + " : " + computerScore;
    round.textContent = rounds;
}
