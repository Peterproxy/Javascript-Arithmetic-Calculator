//document.addEventListener('DOMContentLoaded', function() {





//INPUT FUNCTION
function getNumber(a) {
    myform.input.value += a;
}

//Equal sign function:
function compute() {
    //myform.answer.value = (eval(myform.input.value)).toFixed(6); } 
    myform.answer.value = (eval(myform.input.value))
}

//Backspace Function:
function backSpace() {
    let inputDisplay = myform.input.value;
    myform.input.value = inputDisplay.substr(0, inputDisplay.length - 1);
}

//clear screen functions:
function clearScreen() {
    document.getElementById('input').value = "";
    document.getElementById('answer').value = "";
}

//Square function:
function squaX() {
    myform.answer.value = Math.pow(myform.input.value, 2);
}

//Square- root function:
function squRoot() {
    // myform.input.value = Math.SQRT1_2(myform.input.value);
    myform.answer.value = Math.pow(myform.input.value, 1 / 2);
}


//OPERATORS FUNCTION
function getOperand(a) {
    myform.input.value += a;
}


//BRACKETS FUNCTION
let i = "0";

function brackets() {
    if (i == '0') {
        myform.input.value += '(';
        i = 1;
    } else if (i == 1) {
        myform.input.value += ')';
        i = 0;
    }
}


//PERCENTAGE FUNCTION
function getPerc() {
    myform.answer.value = (myform.input.value) / 100
}

//})