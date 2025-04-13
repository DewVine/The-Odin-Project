// Rock, Paper, Scissors Game

// track stats
let userWin = 0;
let compWin = 0;
let ties = 0;
let rounds = 0;

let round = document.querySelector('.rounds')
let result = document.querySelector('.result');
let score = document.querySelector('.score');

// function that handles final result
function gameResult() {
    if (ties >= 3) {
        result.innerText = "Result: The game was a tie, better luck next time.";
    }
    else if (compWin > userWin) {
        result.innerText = "Result: You lost, computer got the best of you.";
    }
    else {
        result.innerText = "Result: You won, nice job!";
    }
}

// function that handles win logic
function gameLogic(userChoice, compChoice) {
    
    // array containing real values of numbers
    let choices = ['blank', 'Rock', 'Paper', 'Scissors'];

    // tie logic
    if (userChoice == compChoice) {
        ties += 1;
        result.innerText = "Result: You both chose " + choices[userChoice] + ". You tied.";
        score.innerText = "Players Wins: " + userWin + " - Computer Wins: " + compWin + " - and Ties: " + ties;
        return;
    }
    
    // win logic
    switch(userChoice) {
        case 1:
            if (compChoice == 2) {
                compWin += 1;
                result.innerText = "Result: You lost, you chose " + choices[userChoice] + " computer chose " + choices[compChoice] + ".";
            }
            else {
                userWin +=1;
                result.innerText = "Result: You won, you chose " + choices[userChoice] + " computer chose " + choices[compChoice] + ".";
            }
            break;
        case 2:
            if (compChoice == 3) {
                compWin += 1;
                result.innerText =  "Result: You lost, you chose " + choices[userChoice] + " computer chose " + choices[compChoice] + ".";
            }
            else {
                userWin +=1;
                result.innerText = "Result: You won, you chose " + choices[userChoice] + " computer chose " + choices[compChoice] + ".";
            }
            break;
        case 3:
            if (compChoice == 1) {
                compWin += 1;
                result.innerText = "Result: You lost, you chose " + choices[userChoice] + " computer chose " + choices[compChoice] + ".";
            }
            else {
                userWin +=1;
                result.innerText = "Result: You won, you chose " + choices[userChoice] + " computer chose " + choices[compChoice] + ".";
            }
            break;
    }
    score.innerText = "Players Wins: " + userWin + " - Computer Wins: " + compWin + " - and Ties: " + ties;
}

// function to randomize computer guess
function compInput() {
    return Math.floor(Math.random()*3)+1;
}

// function to give correct user input
function userInput(choice) {
    switch(choice) {
        case "Rock":
            return 1;
        case "Paper":
            return 2;
        case "Scissors":
            return 3;
    }
}

// controls
let buttons = document.querySelectorAll('button');
for (const button of buttons) {
    button.addEventListener('click', function (e) {
        if (rounds < 5) {
            rounds++;
            round.innerText = "Rounds: " + rounds;
            let userChoice = userInput(button.textContent);
            let compChoice = compInput();
            gameLogic(userChoice, compChoice);
        } else {
            gameResult(userWin, compWin, ties);
        }
    })
}

