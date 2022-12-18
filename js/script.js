/* JavaScript Rock, Paper or Scissors game */

// valid choices for game
let options = ['rock', 'paper', 'scissors']

// computer picks a random choice from the options
let computerChoice = options[Math.floor(Math.random() * options.length)]

let userWins = 0
let computerWins = 0
let draws = 0
let gameCount = 0
let playGame = true

console.log(computerChoice)

/*let userChoice = prompt(`Pick either ${options.toString()}`).toLowerCase().trim()*/

do {
    let userChoice = 'rock'

    if (options.includes(userChoice)) {

        if (userChoice === computerChoice) {
            console.log("draw")
        } else if (userChoice == 'rock') {

        }
        console.log("valid choice")
    } else {
        console.log("invalid choice")
    }
} while (playGame === true)

function calculateWin(computerChoice, userChoice) {
    if (userChoice === computerChoice) {
        return 'draw'
    } else if (
        (userChoice == 'rock' && computerChoice == 'scissors') ||
        (userChoice == 'scissors' && computerChoice == 'paper') ||
        (userChoice == 'paper' && computerChoice == 'rock')) {
        return 'win'
    } else {
        return 'lose'
    }
}