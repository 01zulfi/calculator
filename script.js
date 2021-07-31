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
    if ( operator == 'add' ) return addNum(a, b)
    if ( operator == 'subtract' ) return subtractNum(a, b)
    if ( operator == 'multiply' ) return multiplyNum(a, b)
    if ( operator == 'divide' ) return divideNum(a, b)
}