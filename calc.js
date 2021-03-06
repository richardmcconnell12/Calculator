const numbers = document.querySelectorAll(".numbers");
const operations = document.querySelectorAll(".operator");

const operators = "+-/*";

const equal = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const back = document.querySelector(".back");
const decimal = document.querySelector(".decimal");

const display = document.querySelector(".display");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (display.textContent == "ERROR") {
            display.textContent = "";
        }
        display.textContent += number.textContent;
    })
});

operations.forEach((operation) => {
    operation.addEventListener("click", () => {
        if (display.textContent == "ERROR") {
            display.textContent = "";
        }
        display.textContent += operation.textContent;
    })
});

clear.addEventListener("click", () => {
    display.textContent = "";
});

// Removes the last digit in the display
back.addEventListener("click", () =>{
    display.textContent = display.textContent.slice(0, display.textContent.length -1);
});

decimal.addEventListener("click", () => {
    stringOperations = display.textContent.match(/[^\d()]+|[\d.]+/g);
    if (stringOperations[stringOperations.length -1].indexOf(".") == -1) {
        display.textContent += ".";
    }
});

equal.addEventListener("click", () => {
    stringOperations = display.textContent.match(/[^\d()]+|[\d.]+/g);
    let product = 0;

    for (let i = 0; i < stringOperations.length; i++) {
        if (operators.indexOf(stringOperations[i]) != -1) {
            let ops = stringOperations[i];
            let number1 = +stringOperations[i-1];
            let number2 = +stringOperations[i+1];
            if (ops == "/" && number2 == 0) {
                product = "ERROR";
                break;
            }
            product += operate(ops, number1, number2);
        }
    }
    if (stringOperations.length < 3) {
        product = display.textContent;
    }
    display.textContent = product;
});

function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return +(number1 / number2).toFixed(7);
}

function operate(operators, number1, number2) {
    console.log(operators)
    if(operators == "+") {
        return add(number1, number2);
    } else if (operators == "-") {
        return subtract(number1, number2);
    } else if (operators == "*") {
        return multiply(number1, number2);
    } else if (operators == "/") {
        return divide(number1, number2);
    } else {
        return "Operation does not exist!";
    }
}