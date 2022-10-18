const getComputerChoice= () => {
    let computerChoice = Math.floor(Math.random() * 3);

    switch(computerChoice) {
        case 0:
            computerChoice = 'Rock';
            break;
        case 1:
            computerChoice = 'Paper';
            break;
        default:
            computerChoice = 'Scissors';
    }
    
    return computerChoice;
}

const getPlayerChoice = () => {
    let playerChoice = prompt('Make your selection:');
    return playerChoice.toLowerCase();
}

const playRound = () => {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    switch(playerChoice) {
        case 'Rock':
        case 'rock':
            switch(computerChoice) {
                case 'Rock':
                    console.log('Player chose Rock. Computer chose Rock. Tie!');
                    return 0;
                case 'Paper':
                    console.log('Player chose Rock. Computer chose Paper. Computer wins!');
                    return 1;
                case 'Scissors':
                    console.log('Player chose Rock. Computer chose Scissors. Player wins!');
                    return 2;
            }
            break;

        case 'Paper':
        case 'paper':
            switch(computerChoice) {
                case 'Rock':
                    console.log('Player chose Paper. Computer chose Rock. Player wins!');
                    return 2;
                case 'Paper':
                    console.log('Player chose Paper. Computer chose Paper. Tie!');
                    return 0;
                case 'Scissors':
                    console.log('Player chose Paper. Computer chose Scissors. Computer Wins!')
                    return 1;
            }
            break;

        case 'Scissors':
        case 'scissors':
            switch(computerChoice) {
                case 'Rock':
                    console.log('Player chose Scissors. Computer chose Rock. Computer wins!');
                    return 1;
                case 'Paper':
                    console.log('Player chose Scissors. Computer chose Paper. Player wins!');
                    return 2;
                case 'Scissors':
                    console.log('Player chose Scissors. Computer chose Scissors. Tie!')
                    return 0;
            }
            break;
        
        default:
            console.log('Something went wrong. Select either "rock", "paper", or "scissors".')
            return 'error';
    }
}

const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 3 && computerScore < 3) {
        let roundResults = playRound();

        switch(roundResults) {
            case 0:
                console.log('Round ended in a tie. Redo round!');
                break;
            case 1:
                ++computerScore;
                console.log(`Computer won that round. Player score: ${playerScore}. Computer score: ${computerScore}.`);
                break;
            case 2:
                ++playerScore;
                console.log(`Player won that round. Player score: ${playerScore}. Computer score: ${computerScore}.`);
                break;
            case 'error':
                console.log('Something went wrong with your selection. Redoing round.');
            default:
                console.log('Something went wrong. Redoing round.');
                break;
        }
    }

    if (playerScore === 3) {
        console.log('Player wins!');
        return;
    } else if(computerScore === 3) {
        console.log('Computer wins!')
        return;
    } else {
        console.log('Something went wrong. Ending game.')
        return;
    }
}
