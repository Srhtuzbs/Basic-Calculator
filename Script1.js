let buttons = document.querySelectorAll(".calc");
let operator;
let previous;
const screen = document.querySelector(".screen");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => router(e.target.innerText));
}


function router(value) {
    if (value === 'C') { clean() }
    else if (value === '--') { back() }
    else if (value === '/' || value === 'x' || value === '+' || value === '-') {
        previous = parseInt(screen.innerText);
        operator = value;
        screen.innerText = "0";
    }
    else if (value === '=') { calculate() }
    else { screen.innerText === '0' ? screen.innerText = value : screen.innerText += value }
}




function calculate() {
    let second = parseInt(screen.innerText);
    switch (operator) {
        case '+':
            screen.innerText = previous + second;
            break;
        case '-':
            screen.innerText = previous - second;
            break;
        case '/':
            screen.innerText = previous / second;
            break;
        case 'x':
            screen.innerText = previous * second;
            break;
        default:
            break;
    }
    previous, operator = null;
}

    function clean() {
        screen.innerText = "0";
        previous, operator = null;
}

    function back() {
        if (screen.innerText.length === 1) {
            screen.innerText = "0";
        }
        else {
            screen.innerText = screen.innerText.slice(0, -1);
        }
    }
