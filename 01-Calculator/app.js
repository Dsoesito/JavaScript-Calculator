const sevenBtn = document.getElementById("7-btn");
const eightBtn = document.getElementById("8-btn");
const nineBtn = document.getElementById("9-btn");
const plusBtn = document.getElementById("+btn");

const fourBtn = document.getElementById("4-btn");
const fiveBtn = document.getElementById("5-btn");
const sixBtn = document.getElementById("6-btn");
const minussBtn = document.getElementById("-btn");

const oneBtn = document.getElementById("1-btn");
const twoBtn = document.getElementById("2-btn");
const threeBtn = document.getElementById("3-btn");
const multiplyBtn = document.getElementById("*btn");

const zeroBtn = document.getElementById("0-btn");
const decimalBtn = document.getElementById(".btn");
const equalsBtn = document.getElementById("equals-btn");
const divideBtn = document.getElementById("/btn");
const clearBtn = document.getElementById("all-clear");

let currentDisplay = document.getElementById("main-screen");
let miniDisplay = document.getElementById("operation-screen");
let firstValue = null;
let secondValue = null;

sevenBtn.addEventListener("click", updateDisplay.bind(null, 7));
eightBtn.addEventListener("click", updateDisplay.bind(null, 8));
nineBtn.addEventListener("click", updateDisplay.bind(null, 9));
plusBtn.addEventListener("click", updateMiniDisplay.bind(null, "+"));

fourBtn.addEventListener("click", updateDisplay.bind(null, 4));
fiveBtn.addEventListener("click", updateDisplay.bind(null, 5));
sixBtn.addEventListener("click", updateDisplay.bind(null, 6));
minussBtn.addEventListener("click", updateMiniDisplay.bind(null, "-"));

oneBtn.addEventListener("click", updateDisplay.bind(null, 1));
twoBtn.addEventListener("click", updateDisplay.bind(null, 2));
threeBtn.addEventListener("click", updateDisplay.bind(null, 3));
multiplyBtn.addEventListener("click", updateMiniDisplay.bind(null, "*"));

zeroBtn.addEventListener("click", updateDisplay.bind(null, 0));
decimalBtn.addEventListener("click", updateDisplay.bind(null, "."));
equalsBtn.addEventListener("click", calculate);
divideBtn.addEventListener("click", updateMiniDisplay.bind(null, "/"));
clearBtn.addEventListener("click", clear);

function updateDisplay(val) {
  currentDisplay.value = currentDisplay.value += val;
}

function updateMiniDisplay(operation) {
  firstValue = JSON.parse(currentDisplay.value);
  currentDisplay.value = null;
  miniDisplay.value = operation;
}

function clear() {
  currentDisplay.value = null;
  miniDisplay.value = null;
}
function finalResult(result) {
  miniDisplay.value = null;
  currentDisplay.value = result;
}

function calculate() {
  let result = null;
  secondValue = JSON.parse(currentDisplay.value);
  if (miniDisplay.value === "+") {
    result = firstValue + secondValue;
    finalResult(result);
  } else if (miniDisplay.value === "-") {
    result = firstValue - secondValue;
    finalResult(result);
  } else if (miniDisplay.value === "*") {
    result = firstValue * secondValue;
    finalResult(result);
  } else if (miniDisplay.value === "/") {
    if (firstValue !== 0 && secondValue !== 0) {
      result = firstValue / secondValue;
    } else {
      result = 0;
    }
    finalResult(result);
  } else {
    alert("Invalid operation input!");
  }
}
