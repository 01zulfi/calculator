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

const decimal = document.querySelector('.decimal');
const buttons = document.querySelectorAll('button');
buttons.forEach(index => index.addEventListener('click', calculate));
buttons.forEach(index => index.addEventListener('click', displayNumbers));

let firstValue = '';
let operator = '';
let secondValue = '';
function calculate() {  
    if (this.matches('.digit') && !operator) {
        if (document.querySelector('.answer')) {
            clearDisplay(); 
            const p = document.createElement('p');
            p.textContent = firstValue;
            container.appendChild(p)
            firstValue += this.value;
        }
        else {
            firstValue += this.value;
        }
    }
    if (this.matches('.operator') && firstValue) {
        if (operator) {
            let answer = operate(operator, Number(firstValue), Number(secondValue));
            displayAnswer(answer);
            clearValues(answer);
            operator = this.value;
        } else {
        operator = this.value;
        }
    }
    if (this.matches('.digit') && operator) {
        secondValue += this.value;
    }
    if (this.matches('.equal')) {
        if ( !firstValue || !operator || !secondValue) return
        let answer = operate(operator, Number(firstValue), Number(secondValue));
        checkDecimal(answer.toString());
        clearDisplay();
        displayAnswer(answer);
        clearValues(answer);  
    }
    if (this.matches('.clear')) {
        clearValues();
    }
    console.log(firstValue)
    console.log(operator)
    console.log(secondValue)
}

function clearValues(answer, symbol) {
    if (answer) {
        firstValue = answer;
    } else {
        firstValue = '';
    }
    operator = '';
    secondValue = '';
}

const container = document.querySelector('.display');
const body = document.querySelector('body');

function displayNumbers() {
    if (this.value == '=') return
    let p = document.createElement('p');
    p.textContent = this.value;
    container.appendChild(p);
    checkDecimal(container.textContent)
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
    if (countDecimal(answer) > 5) {
        p.textContent = answer.toFixed(5).toString();
    } else {
        p.textContent = answer.toString();
    }
    container.appendChild(p);
}

function countDecimal(number) {
    let string = number.toString();
    if (!(string.indexOf('.')==-1)) {
        let afterPoint = string.substr( string.indexOf('.') );
        return afterPoint.length
    } else return 0 
}


function checkDecimal(string) {
    if ( !(string.indexOf(".") == -1) ) {
        decimal.disabled = true;
    } else {
        decimal.disabled = false;
    }
}

