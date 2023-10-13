let currentInput = ""; // Initialize the current input value.
let memory = 0; // Initialize the memory variable.

function updateDisplay() {
  document.getElementById("operation").value = currentInput; // Update the display with the current input value.
}

function appendToDisplay(value) {
  currentInput += value; // Append the provided value to the current input.
  updateDisplay();
}

function appendZero(value) {
  if (currentInput.slice(-1) !== ".") {
    currentInput += value; // Append the provided value (dot) to the current input if the last character is not already a dot.
  }
  updateDisplay();
}

function clearDisplay() {
  currentInput = ""; // Clear the current input value.
  updateDisplay();
}

function calculateResult(operation) {
  if (operation === "=") {
    try {
      currentInput = eval(currentInput); // Evaluate the current input as a mathematical expression.
    } catch (error) {
      currentInput = "Error"; // Handle errors and display "Error" if evaluation fails.
    }
  } else if (operation === "1/X") {
    currentInput = 1 / parseFloat(currentInput); // Calculate the reciprocal (1/X) of the current input.
  } else if (operation === "x2") {
    currentInput = Math.pow(parseFloat(currentInput), 2); // Square (x2) the current input.
  } else if (operation === "√") {
    currentInput = Math.sqrt(parseFloat(currentInput)); // Calculate the square root (√) of the current input.
  }
  updateDisplay();
}

function toggleSign() {
  currentInput = (parseFloat(currentInput) * -1).toString(); // Toggle the sign of the current input.
  updateDisplay();
}

function memoryClear() {
  memory = 0; // Clear the memory value.
}

function memoryRecall() {
  currentInput = memory.toString(); // Recall the value from memory and set it as the current input.
  updateDisplay();
}

function memoryAppend() {
  if (/[+\-/*]/.test(currentInput)) {
    console.log(memory);
    return; // Do not add to memory if operators are present in currentInput.
  } else {
    memory = parseFloat(currentInput); // Add the current input to memory if it doesn't contain operators.
    console.log(memory);
  }
}

function memoryAdd() {
  memory += parseFloat(currentInput); // Add the current input to the memory value.
}

document.addEventListener("DOMContentLoaded", function () {
  updateDisplay(); // Initialize the display with the current input value.
});
