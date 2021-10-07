function add(a, b) {
    let result = a + b;
    return result
}

function subtract(a, b) {
    let result = a - b;
    return result
}

function multiply(a, b) {
    let result = a * b;
    return result
}

function divide(a, b) {
    result = a / b;
    return result
}

function operate(operator, a, b) {
    result = operator(a, b);
    return result
}

const display = document.querySelector('#display')
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const zero = document.querySelector('#zero')
const decimal = document.querySelector('#decimal')
const clear = document.querySelector('#clear')
const addition = document.querySelector('#addition')
const subtraction = document.querySelector('#subtract')
const division = document.querySelector('#divide')
const multiplication = document.querySelector("#multiply")
const equal = document.querySelector('#equal')
const del = document.querySelector('#delete')

let value1 = undefined; 
let value2 = undefined;
let operatorSelected = undefined;

one.addEventListener('click', () => display.innerHTML += 1)
two.addEventListener('click', () => display.innerHTML += 2)
three.addEventListener('click', () => display.innerHTML += 3)
four.addEventListener('click', () => display.innerHTML += 4)
five.addEventListener('click', () => display.innerHTML += 5)
six.addEventListener('click', () => display.innerHTML += 6)
seven.addEventListener('click', () => display.innerHTML += 7)
eight.addEventListener('click', () => display.innerHTML += 8)
nine.addEventListener('click', () => display.innerHTML += 9)
zero.addEventListener('click', () => display.innerHTML += 0)
decimal.addEventListener('click', () => display.innerHTML += '.')
clear.addEventListener('click', () => display.innerHTML = '')


addition.addEventListener('click', () => {
    value1 = parseInt(display.innerHTML);
    operatorSelected = add
    display.innerHTML = ''
})

subtraction.addEventListener('click', () => {
    value1 = parseInt(display.innerHTML);
    operatorSelected = subtract
    display.innerHTML = ''
})

division.addEventListener('click', () => {
    value1 = parseInt(display.innerHTML);
    operatorSelected = divide
    display.innerHTML = ''
})

multiplication.addEventListener('click', () => {
    value1 = parseInt(display.innerHTML);
    operatorSelected = multiply
    display.innerHTML = ''
})

del.addEventListener('click', () => {
    display.textContent = display.textContent
    .toString()
    .slice(0, -1)
})


equal.addEventListener('click', () => {
    let result;
    value2 = parseInt(display.innerHTML);
    result = operate(operatorSelected, value1, value2)
    display.innerHTML = result
})








