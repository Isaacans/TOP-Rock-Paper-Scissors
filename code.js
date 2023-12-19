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
    console.log(computerChoice);
    let randomNumber = Math.random();
    console.log(randomNumber);
    if (randomNumber <= 0.33) {
        computerChoice = "rock";
    } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}