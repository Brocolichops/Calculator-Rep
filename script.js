const oneButton = document.getElementById('one');
const twoButton = document.getElementById('two');
const threeButton = document.getElementById('three');
const fourButton = document.getElementById('four');
const fiveButton = document.getElementById('five');
const sixButton = document.getElementById('six');
const sevenButton = document.getElementById('seven');
const eightButton = document.getElementById('eight');
const nineButton = document.getElementById('nine');
const zeroButton = document.getElementById('zero');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const decimalButton = document.getElementById('decimal');
const signButton = document.getElementById("sign");
const powerButton = document.getElementById("power");
const percentageButton = document.getElementById("percentage")
const screen = document.getElementById('screen');
const buttons = document.getElementById('buttons');
const buttonArray = [
    oneButton,
    twoButton, 
    threeButton,
    fourButton,
    fiveButton,
    sixButton,
    sevenButton,
    eightButton,
    nineButton
];

const numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const specialArray = ['+', '-', '*', '/', '^', '=', '%', '.', 'C', 'c', '_', 'Enter', '+/-', 'x']

const writeToScreen = (value) => {
    if (screen.innerText.length <= 20 && screen.innerText !== "Error")  value.length <= 3 ? screen.innerText += value: screen.innerText = screen.innerText

};

buttons.addEventListener('click', (e) => {
    
    numbersArray.includes(e.target.innerText) ? writeToScreen(e.target.innerText) : null
    specialArray.includes(e.target.innerText) ? specialButtons(e.target.innerText) : null;
}    
);

document.addEventListener('keydown', (e) => {
    if (numbersArray.includes(e.key))  {
        writeToScreen(e.key);        
    }
    if (e.key === 'Backspace') screen.innerText = screen.innerText.slice(0, -1);
    specialArray.includes(e.key) ? specialButtons(e.key): null;
    
}
);


const specialButtons = (button) => {
    if (!specialArray.includes(screen.innerText[screen.innerText.length - 1]) && screen.innerText !== "Error")switch (button){
        case "+":
            screen.innerText += '+';
            break;
        case "-":
            screen.innerText += '-';
            break;
        case "*":
            screen.innerText += "x";
            break;
        case "x":
            screen.innerText += "x";
            break;
        case "X":
            screen.innerText += "x";
            break;
        case "/":
            screen.innerText += '/';
            break;
        case "^":
            screen.innerText += "^";
            break;

        case ".":
            screen.innerText += '.';
            break
        case "_":
            if (!isNaN(screen.innerText)) screen.innerText = Number(screen.innerText) * -1;
            break;
        case "+/-":
            if (!isNaN(screen.innerText)) screen.innerText = Number(screen.innerText) * -1;
            break;
        case "%":
            screen.innerText += '%';
            break;
        case "=":
            screen.innerText = computeResult();
            break;
        case "Enter":
            screen.innerText = computeResult();
            break;
    }
    switch (button){
                case "C":
            screen.innerText = '';
            break;
        case "c":
            screen.innerText = '';
            break
    }
}



const computeResult = () => {
    const inputExpression = screen.innerText;
    let operation;
    let firstNumber = '';
    let secondNumber = '';
    for (let i = 0; i < inputExpression.length; i++){
        if (specialArray.includes(inputExpression[i]) && i > 0 && inputExpression[i] !== '.'){
            operation = inputExpression[i];
        }else{
            operation ? secondNumber += inputExpression[i]:firstNumber += inputExpression[i];
        }
    }
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    
    switch (operation){
        case "+":
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case "x":
            return firstNumber * secondNumber;
        case "/":
            return secondNumber !== 0 ? firstNumber/secondNumber: "Error";
        case "^":
            return firstNumber ** secondNumber;
        case "%":
            return (firstNumber/100) * secondNumber;
        default:
            return screen.innerText 
    }
}
