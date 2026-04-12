function scrollToEnd(el) {
    el.scrollLeft = el.scrollWidth;
}

function clicked(button, input, result) {
    let buttonContent = button.textContent;
    let resultContent = result.textContent;
    let inputContent  = input.textContent;
    let operators = ['-', '+', '**', '*', '/']

    if ((resultContent != "" && inputContent == "") && operators.includes(buttonContent)) {
        input.textContent = resultContent;
    }
    
    switch (buttonContent) {
        case 'C':
            input.textContent = "";
            result.textContent = "";
            break;
        case 'ANS':
            input.textContent += resultContent;
            break;
        case '=':
            let answer = eval(inputContent);
            input.textContent = "";
            result.textContent = answer;
            break;
        case '( )':
            let lastOpenP = inputContent.lastIndexOf('(');
            let lastClosedP = inputContent.lastIndexOf(')');
            if (lastOpenP > lastClosedP) {
                input.textContent += ')';
            } else {
                input.textContent += '(';
            }
            break;
        case '~':
            break;
        case 'Back':
            input.textContent = inputContent.slice(0,-1);
            return
        default:
            input.textContent += buttonContent;
    }
    scrollToEnd(input);
}

let input = document.querySelector("#input");
let result = document.querySelector("#result");
let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click', () => clicked(button, input, result));
});