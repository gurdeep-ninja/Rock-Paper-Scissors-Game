/* JavaScript Rock, Paper or Scissors game */
/*
    Player is prompted to pick a choice between rock, paper or scissors.
    After 10 games, the player is shown the score and asked if they would
    like to play again.
*/
// valid choices for game
let options = ['rock', 'paper', 'scissors']


// keep track of user wins
let userWins = 0

// keep track of computer wins
let computerWins = 0

// keep track of games drawed
let draws = 0

// keep track of number of games played
let gameCount = 0

// Set game status to true (used in do while loop)
let playGame = true


// Put game in loop until user no longer wants to play again
do {
    // computer picks a random choice from the options
    let computerChoice = options[Math.floor(Math.random() * options.length)]

    // prompts the user to pick an option from the array
    let userChoice = prompt(`Pick either ${options.toString()}`).toLowerCase().trim()

    // check if user choice contains valid choice, if invalid, ask user to choose again
    if (options.includes(userChoice)) {
        // prompt the user if they lose, win or draw against the computer
        alert(calculateWin(computerChoice, userChoice))
    } else {
        // prompt the user if they lose, win or draw against the computer
        userChoice = prompt(`Incorrect choice - pick either ${options.toString()}`).toLowerCase().trim()
    }
    // Once games played equal 10 show the player the results and 
    // ask if they would like to play again.
    if (gameCount === 10) {
        alert("User wins = " + userWins +
            " User Losses = " + computerWins +
            " Draws = " + draws);
            
        // Ask the player if they would like to play again
        if (confirm('Play again?')) {
            userWins = 0
            computerWins = 0
            draws = 0
            gameCount = 0

        // If the user doesn't want to play again, the game ends.
        } else {
            playGame = false
        }
    }


} while (playGame === true)


// Function to calculate if the user, wins, loses or draws against the computer

function calculateWin(computerChoice, userChoice) {
    // Add to the game counter
    gameCount++
    
    // If draw
    if (userChoice === computerChoice) {
        // Increase draw counter
        draws++

        // return draw
        return 'draw'

    // If the player wins
    } else if (

        (userChoice == 'rock' && computerChoice == 'scissors') ||
        (userChoice == 'scissors' && computerChoice == 'paper') ||
        (userChoice == 'paper' && computerChoice == 'rock')) {
        
        // increase player win counter
        userWins++
        
        // return win
        return 'win'

    // If the computer wins
    } else {

        // increase computer win counter
        computerWins++

        // return lose
        return 'lose'
    }
}