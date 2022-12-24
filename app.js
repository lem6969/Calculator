function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num === 0) {
        // display an error message if tryng to divide by 0
        return "Error: Division by 0";
    }
    return num1 / num2;
};

function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num);
            case "-":
                return subtract(num1, num2);
                case "*":
                    return multiply(num1, num2);
                    case "/":
                        return divide(num1, num2);
                        defult:
                        return "Error: Invalid operator";  
    }
};
const calculator = document.getElementById("calculator");
const display = document.getElementById("display");

let fistNumber = null;
let operator = null;
let secondNumber = null;

//Certainly! Here is the rest of the JavaScript code you can use to complete the calculator:

const calculator = document.getElementById("calculator");
const display = document.getElementById("display");

let firstNumber = null;
let operator = null;
let secondNumber = null;

calculator.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("number")) {
    // update display with clicked number
    display.textContent = target.textContent;

    if (operator) {
      // if an operator has already been chosen, set secondNumber
      secondNumber = parseFloat(target.textContent);
    } else {
      // otherwise, update firstNumber
      firstNumber = parseFloat(target.textContent);
    }
  } else if (target.classList.contains("operator")) {
    // save operator and clear display
    operator = target.textContent;
    display.textContent = "0";
  } else if (target.id === "equals") {
    // perform operation and update display with result
    const result = operate(operator, firstNumber, secondNumber);
    display.textContent = result.toString().slice(0, 8);

    // reset firstNumber, operator, and secondNumber for next calculation
    firstNumber = null;
    operator = null;
    secondNumber = null;
  } else if (target.id === "clear") {
    // reset all values and clear display
    firstNumber = null;
    operator = null;
    secondNumber = null;
    display.textContent = "0";
  }
});
