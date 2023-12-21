// Call game() to play --

// Function game() gets number of rounds
// Game is repeated till number of rounds are reached (ties don't count)
// Score is kept track of, including ties. 
// Score is displayed at the end of all rounds.
function game (rounds = 1) {
    let playerScore = 0;
    let computerScore = 0; 
    let numberOfTies = 0;
    for (let i = 0; i < rounds; i++) {
        let playerSelection = prompt("Rock, paper or scissors?", "rock");
        let outcome = playRound(playerSelection, getComputerChoice());
        if (outcome === 'win') {
            playerScore++;
        } else if (outcome === 'loss') {
            computerScore++;
        } else if (outcome === 'tie') {
            i = i - 1;
            numberOfTies++;
        }
    }
    let winnerIs = (playerScore > computerScore) ? 'You win! You beat the computer!' :
        (playerScore < computerScore) ? 'You lose! Sorry, you were beat by the computer.' :
        'Tie!! No one wins.';
    let playScoreDeclaration = 'Player scored: ' + playerScore;
    let computerScoreDeclaration = 'Computer scored: ' + computerScore;
    let numberOfTiesDeclaration = 'Number of ties: ' + numberOfTies;
    let combinedResultsDeclaration = `${winnerIs}
${playScoreDeclaration}      
${computerScoreDeclaration}   
${numberOfTiesDeclaration}`;
    console.log(combinedResultsDeclaration);
    return combinedResultsDeclaration
}

// Write a function that plays a single round of Rock Paper Scissors. 
// The function should take two parameters, playerSelection and 
// computerSelection - and then return a string that declares the winner
// of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive 
// (so users can input rock, ROCK, RocK or any other variation).
// Account for TIES by re-playing the round.
/* 
DECLARE function playRound
GET parameters playerSelection and computerSelection
    SET playerSelection to lowercase
    SET computerSelection to lowercase
    INIT outcomeDeclaration
    CASE playerSelection OF
    'rock'
        IF computerSelection is 'rock'
            PRINT 'Rock against rock, game is a tie'
            CALL playRound
        ELSEIF computerSelection is 'paper'
            SET outcomeDeclaration to 'You Lose! Rock loses to paper'
        ELSEIF computerSelection is 'scissors'
            SET outcomeDeclaration to 'You Win! Rock beats scissors'
        ELSE
            SET outcomeDeclaration to 'Unknown outcome, please try again' 
        ENDIF
    'paper'
        IF computerSelection is 'rock'
            SET outcomeDeclaration to 'You Win! Paper beats Rock'    
        ELSEIF computerSelection is 'paper'
            PRINT 'Paper against paper, game is a tie'
            CALL playRound
        ELSEIF computerSelection is 'scissors'
            SET outcomeDeclaration to 'You Lose! Paper loses to scissors'
        ELSE
            SET outcomeDeclaration to 'Unknown outcome, please try again'     
        ENDIF
    'scissors'
        IF computerSelection is 'rock'
            SET outcomeDeclaration to 'You Lose! Scissors lose to rock'    
        ELSEIF computerSelection is 'paper'
            SET outcomeDeclaration to 'You Win! Scissors beat paper'
        ELSEIF computerSelection is 'scissors'
            PRINT 'Scissors against scissors, game is a tie'
            CALL playRound
        ELSE
            SET outcomeDeclaration to 'Unknown outcome, please try again' 
        ENDIF
    return outcomeDeclaration
    ENDCASE
*/
function playRound (playerSelection, computerSelection) {
    if (playerSelection) {
        playerSelection = playerSelection.toLowerCase();
    }
    if (computerSelection) {
        computerSelection = computerSelection.toLowerCase();
    }
    console.log("player:" + playerSelection);
    console.log("computer:" + computerSelection);
    let roundOutcome;
    let outcomeDeclaration;
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'rock') {
                outcomeDeclaration = 'Rock against rock, game is a tie';
                roundOutcome = 'tie';
            } else if (computerSelection === 'paper') {
                outcomeDeclaration =  'You Lose! Rock loses to paper';
                roundOutcome = 'loss';
            } else if (computerSelection === 'scissors') {
                outcomeDeclaration = 'You Win! Rock beats scissors';
                roundOutcome = 'win';
            } else {
                outcomeDeclaration = 'Unknown outcome, please try again';
                roundOutcome = 'tie';
            } break;
        case 'paper':
            if (computerSelection === 'rock') {
                outcomeDeclaration = 'You Win! Paper beats Rock';
                roundOutcome = 'win';
            } else if (computerSelection === 'paper') {
                outcomeDeclaration = 'Paper against paper, game is a tie';
                roundOutcome = 'tie';
            } else if (computerSelection === 'scissors') {
                outcomeDeclaration = 'You Lose! Paper loses to scissors';
                roundOutcome = 'loss';
            } else {
                outcomeDeclaration = 'Unknown outcome, please try again'
                roundOutcome = 'tie';
            } break;

        case 'scissors':
            if (computerSelection === 'rock') {
                outcomeDeclaration = 'You Lose! Scissors lose to rock';
                roundOutcome = 'loss';
            } else if (computerSelection === 'paper') {
                outcomeDeclaration = 'You Win! Scissors beat paper';
                roundOutcome = 'win';
            } else if (computerSelection === 'scissors') {
                outcomeDeclaration = 'Scissors against scissors, game is a tie';
                roundOutcome = 'tie';
            } else {
                outcomeDeclaration = 'Unknown outcome, please try again'
                roundOutcome = 'tie';
            } break;
        default:
            outcomeDeclaration = 'Unknown outcome, please try again'
    }
    console.log(outcomeDeclaration);
    return roundOutcome
}

// Function to return random computer choice of move
// Generates a random decimal between 0 and 1
// Returns the computer's move based on the random number
/* 
DECLARE function getComputerChoice
    It takes no parameters
    SET randomNumber by using random number generator 
    IF randomNumber is less than or equal to 0.33 
        SET computerChoice to rock
    ELSEIF randomNumber is greater than 0.33 or less than equal to 0.66
        SET computerChoice to paper
    ELSE
        SET computerChoice to scissors
    ENDIF
    RETURN computerChoice
END function getComputerChoice
*/
function getComputerChoice() {
    let computerChoice;
    let randomNumber = Math.floor(Math.random() * 3);
    console.log("random number is: " + randomNumber);
    if (randomNumber === 0) {
        computerChoice = "rock";
    } else if (randomNumber  === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}