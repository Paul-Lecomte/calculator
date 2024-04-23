let userNumber = [];
let outputDisplay = document.getElementById('output');
let results;
let firstNbr;
let secondNbr;
let operator;

// Push numbers into userNumber and display them
function usrInpNbr(val) {
    userNumber.push(val);
    outputDisplay.innerText = userNumber.join('');
    console.log(userNumber);
}

// Reset all inputs and the display
function setAllZero() {
    userNumber = [];
    firstNbr = [];
    secondNbr = [];
    operator = [];
    results = [];
    outputDisplay.innerText = '';
}

// Call the setAllZero function
function reset() {
    setAllZero();
}

// Push operators into userNumber and display them
function usrInpOp(val) {
    firstNbr = userNumber.join('');
    userNumber.push(val);
    outputDisplay.innerText = userNumber.join('');
}

//Function equal that is going to push the result
function equal() {
    let calculation = userNumber.join('');
    let result = calculate(calculation);
    outputDisplay.innerText = '';
    outputDisplay.innerText = result;
}

// Function to execute the calcualtion
function calculate(expression) {
    // Split the expression into numbers and operators
    let numbers = expression.split(/\+|\-|\x|\//).map(parseFloat);
    let operators = expression.replace(/[0-9]|\./g, '').split('');

    // This does the calculation with the given operators
    let result = numbers[0];
    for (let i = 0; i < operators.length; i++) {
        switch (operators[i]) {
            case '-':
                result -= numbers[i + 1];
                break;
            case '+':
                result += numbers[i + 1];
                break;
            case 'x':
                result *= numbers[i + 1];
                break;
            case '/':
                if (numbers[i + 1] !== 0) {
                    result /= numbers[i + 1];
                } else {
                    return 'Division by zero is impossible';
                }
                break;
            default:
                break;
        }
    }

    return result;
}
