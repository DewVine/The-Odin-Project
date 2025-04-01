// Rock, Paper, Scissors Game
/*To Do
- Make sure user input is a number between 1 and 3
*/

// function that handles final result
function gameResult(userWin, compWin, ties) {

}

// function that handles win logic
function gameLogic(userChoice, compChoice) {
    
}

// function that calls for user input
function userInput() {
    let choice = prompt("1 = Rock, 2 = Paper, 3 = Scissors: ");
    return choice;
} 

// function to randomize computer guess
function compInput() {
    return Math.floor(Math.random()*3)+1;
}

// function to start game and give result, one game is 5 rounds
function startGame() {
    // track user stats and choice
    let userChoice;
    let compChoice;
    let userWin = 0;
    let compWin = 0;
    let ties = 0;

    // introduce game
    console.log("Rock, Paper, Scissors");
    console.log("The aim of the game is to beat your opponent."
    console.log("Rock Beat Scissors, Paper Beats Rock, and Scissors beats Paper.")

    // game must be 5 rounds
    for (let rounds=0; rounds<5; rounds++) {
        // ask user input
        userChoice = userInput();

        // get compChoice
        compChoice = compInput();

        // give result
        gameLogic(userChoice, compChoice);
    }

    // give final result
    gameResult(userWin, compWin, ties);
}

startGame();