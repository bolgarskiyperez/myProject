const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multBtn = document.getElementById('mult')
const divisionBtn = document.getElementById('division')
let action = '+'

plusBtn.onclick = function plus() {
    action = '+'
}

minusBtn.onclick = function minus () {
    action = '-' 
}

multBtn.onclick = function mult () {
    action = '*'
}

divisionBtn.onclick = function division () {
    action = '/'
}

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result;
}

function computeWithAction(input1, input2, action) {
    const num1 = Number(input1.value)
    const num2 = Number(input2.value) 

    if (action === '+') {
        return num1 + num2;
    }

    if (action === '-') {
        return num1 - num2;
    }

    if (action === '*') {
        return num1 * num2;
    }

    if (action === '/') {
        return num1 / num2;
    }
}

submitBtn.onclick = function submit() {
    const result = computeWithAction(input1, input2, action);
    printResult(result);
}
