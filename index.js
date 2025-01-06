humanScore = 0;
computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(coices = ['rock', 'paper', 'scissors']) {
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getHumanChoice() {
    const humanChoice = prompt('What is your choice?');
    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
        return humanChoice;
    } else {
        console.log('Invalid choice');
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
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

function playGame() {
    let rounds = 0;

    while (rounds < 5) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        console.log('Computer: ' + computerChoice);
        console.log('Human: ' + humanChoice);
        console.log('Human: ' + humanScore + ' Computer: ' + computerScore);
        rounds++;
    }

    if (humanScore > computerScore) {
        console.log('You win the game!');
    } else if (humanScore < computerScore) {
        console.log('You lose the game!');
    } else {
        console.log('It is a tie!');
    }
}

playGame();












