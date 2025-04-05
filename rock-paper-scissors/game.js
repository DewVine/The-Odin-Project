// Rock, Paper, Scissors Game

// track stats and choice
let userChoice;
let compChoice;
let userWin = 0;
let compWin = 0;
let ties = 0;

// function that handles final result
function gameResult() {
    if (ties >= 3) {
        console.log("The game was a tie, better luck next time.");
    }
    else if (compWin > userWin) {
        console.log("You lost, computer got the best of you.");
    }
    else {
        console.log("You won, nice job!");
    }
}

// function that handles win logic
function gameLogic() {
    
    // array containing real values of numbers
    let choices = ['blank', 'Rock', 'Paper', 'Scissors'];

    // tie logic
    if (userChoice == compChoice) {
        ties += 1;
        console.log("You both chose " + choices[userChoice] + ". You tied.");
        console.log("You've won " + userWin + ", Computer has won " + compWin + " and you've tied " + ties + " times.");
        return;
    }
    
    // win logic
    switch(userChoice) {
        case 1:
            if (compChoice == 2) {
                compWin += 1;
                console.log("You lost, you chose " + choices[userChoice] + " computer chose " + choices[compChoice] + ".");
            }
            else {
                userWin +=1;
                console.log("You won, you chose " + choices[userChoice] + " computer chose " + choices[compChoice] + ".");
            }
            break;
        case 2:
            if (compChoice == 3) {
                compWin += 1;
                console.log("You lost, you chose " + choices[userChoice] + " computer chose " + choices[compChoice] + ".");
            }
            else {
                userWin +=1;
                console.log("You won, you chose " + choices[userChoice] + " computer chose " + choices[compChoice] + ".");
            }
            break;
        case 3:
            if (compChoice == 1) {
                compWin += 1;
                console.log("You lost, you chose " + choices[userChoice] + " computer chose " + choices[compChoice] + ".");
            }
            else {
                userWin +=1;
                console.log("You won, you chose " + choices[userChoice] + " computer chose " + choices[compChoice] + ".");
            }
            break;
    }
    console.log("You've won " + userWin + ", Computer has won " + compWin + " and you've tied " + ties + " times.");
}

// function that calls for user input
function userInput() {
    while (true) {
            let choice = prompt("1 = Rock, 2 = Paper, 3 = Scissors: ");

            // Make sure user input is a number between 1 and 3
            if (!isNaN(choice)) {
                if (choice >= 1 && choice <= 3) {
                    return parseInt(choice);
                }
            }

            console.log("You must input a valid number between 1 and 3.");
    }
} 

// function to randomize computer guess
function compInput() {
    return Math.floor(Math.random()*3)+1;
}

// function to start game and give result, one game is 5 rounds
function startGame() {

    // introduce game
    console.log("Rock, Paper, Scissors");
    console.log("The aim of the game is to beat your opponent.");
    console.log("Rock Beat Scissors, Paper Beats Rock, and Scissors beats Paper.");

    // game must be 5 rounds
    for (let rounds=0; rounds<5; rounds++) {
        userChoice = userInput();
        compChoice = compInput();
        gameLogic(userChoice, compChoice, userWin, compWin, ties);
    }
    
    gameResult(userWin, compWin, ties);
}

startGame();