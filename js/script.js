/* JavaScript Rock, Paper or Scissors game */

// valid choices for game
let options = ['rock', 'paper', 'scissors']


let userWins = 0
let computerWins = 0
let draws = 0
let gameCount = 0
let playGame = true


do {
// computer picks a random choice from the options
let computerChoice = options[Math.floor(Math.random() * options.length)]    
    let userChoice = 'rock'

    if (options.includes(userChoice)) {

        console.log(calculateWin(computerChoice, userChoice))
        console.log("userWins: "+userWins)
        console.log("computerWins: "+computerWins)
        console.log("draws: "+draws)
        console.log("gameCount:"+gameCount)
    } else {
        console.log("invalid choice")
    }
    if(gameCount === 10){
        alert("User wins = " + userWins +
            " User Losses = " + computerWins +
            " Draws = " + draws);
            if(confirm('Play again?')){
                userWins = 0
                computerWins = 0
                draws = 0
                gameCount = 0

            } else {
                playGame = false
            }
    }


} while (playGame === true)

function calculateWin(computerChoice, userChoice) {
    gameCount++
    if (userChoice === computerChoice) {
        draws++
        return 'draw'
    } else if (
        (userChoice == 'rock' && computerChoice == 'scissors') ||
        (userChoice == 'scissors' && computerChoice == 'paper') ||
        (userChoice == 'paper' && computerChoice == 'rock')) {
        userWins++
        return 'win'
    } else {
        computerWins++
        return 'lose'
    }
}