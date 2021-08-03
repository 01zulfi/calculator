function addNum(a, b) {
    return a + b
}

function subtractNum(a, b) {
    return a - b
}

function multiplyNum(a, b) {
    return a * b
}

function divideNum(a, b) {
    return a / b
}

function operate(operator, a, b) {
    if ( operator == '+' ) return addNum(a, b)
    if ( operator == '-' ) return subtractNum(a, b)
    if ( operator == '*' ) return multiplyNum(a, b)
    if ( operator == '/' ) return divideNum(a, b)
}

const buttons = document.querySelectorAll('button');
buttons.forEach(index => index.addEventListener('click', calculate));
buttons.forEach(index => index.addEventListener('click', displayNumbers));

let firstValue = '';
let operator = '';
let secondValue = '';
function calculate() {
    if (this.matches('.digit') && !operator) {
        clearDisplay();
        firstValue += this.value;
    }
    if (this.matches('.operator') && firstValue) {
        operator = this.value;
    }
    if (this.matches('.digit') && operator) {
        secondValue += this.value;
    }
    if (this.matches('.equal')) {
        if ( !firstValue || !operator || !secondValue) return
        let answer = operate(operator, Number(firstValue), Number(secondValue));
        console.log(answer);
        clearDisplay();
        displayAnswer(answer);
        clearValues();  
    }
    if (this.matches('.clear')) {
        clearValues();
    }
    console.log(firstValue)
    console.log(operator)
    console.log(secondValue)
}

function clearValues() {
    firstValue = '';
    secondValue = '';
    operator = '';
}

const container = document.querySelector('.display');
const body = document.querySelector('body');

function displayNumbers() {
    if (this.value == '=') return
    let p = document.createElement('p');
    p.textContent = this.value; 
    container.appendChild(p);
    if (this.matches('.operator') || this.matches('.clear')) {
        clearDisplay();
    }
}

function clearDisplay() {
    let p = document.querySelectorAll('p');
    p.forEach(index => index.remove());
}

function displayAnswer(answer) {
    let p = document.createElement('p');
    p.classList.add('answer');
    p.textContent = answer.toString();
    container.appendChild(p);
}