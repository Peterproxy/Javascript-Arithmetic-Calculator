//VARIABLE DECLARATIONS
const inputDisplay = document.getElementById('calc-input');
const outputDisplay = document.getElementById('calc-output');
const operators = document.getElementById('division');

//NUMBER KEYS
const numKeys = document.getElementsByClassName('keys');
Array.from(numKeys).forEach(function(btn) {
    btn.addEventListener('click', getNumber);
})

function getNumber() {
    inputDisplay.value += this.value;
}

//OR Number Buttons
/* for (var i = 0; i < numKeys.length; i++) {
    numKeys[i].addEventListener('click', function() {
        inputDisplay.value += this.value;
    });
} */

//Equal sign function:
const compute = document.getElementById('equal');
compute.addEventListener('click', equals)

function equals() {
    outputDisplay.value = (eval(inputDisplay.value))
}

// Clear Screen (CE)
document.getElementById('clearScreen').addEventListener('click', clear)

function clear() {
    inputDisplay.value = '';
    outputDisplay.value = '';
}

//Backspace Function:
document.getElementById('backSpc').addEventListener('click', backSpace);

function backSpace() {
    let inputText = inputDisplay.value;
    inputDisplay.value = inputText.substr(0, inputText.length - 1);
}

//Square function:
document.getElementById('square').addEventListener('click', squaX);

function squaX() {
    outputDisplay.value = Math.pow(inputDisplay.value, 2);
}

//Square- root function:
document.getElementById('squareRt').addEventListener('click', squRoot);

function squRoot() {
    outputDisplay.value = Math.pow(inputDisplay.value, 1 / 2);
}

//BRACKETS FUNCTION
document.getElementById('bracket').addEventListener('click', brackets)
let i = "0";

function brackets() {
    if (i == '0') {
        inputDisplay.value += '(';
        i = 1;
    } else if (i == 1) {
        inputDisplay.value += ')';
        i = 0;
    }
}


//PERCENTAGE FUNCTION
document.getElementById('perc').addEventListener('click', getPerc)

function getPerc() {
    outputDisplay.value = (inputDisplay.value) / 100
}
