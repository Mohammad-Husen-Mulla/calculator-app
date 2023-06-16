let euqal = document.querySelector('.equal');
let clear = document.querySelector('.btn-clr');
let operators = document.querySelectorAll('.operations');
let input = "";
let res = 0;

// Function to Display the Number
function displayKeys(value) {
  input = input + String(value);
  document.querySelector('.display-calc').textContent = input;
}

// Function To Clear The Screen
function clearNumbers() {
  input = "";
  document.querySelector('.display-calc').textContent = input;
}

document.querySelectorAll('.number').forEach(num => num.addEventListener('click', function () {

  if (input.length <= 45) {
    displayKeys(this.value);
  }
}));

// Backspace event
document.querySelector('.btn-delete').addEventListener('click', function () {

  if (input.length === 1) {
    clearNumbers();
  } else if (input.length > 1) {
    let sub = input.substring(0, input.length - 1);
    document.querySelector('.display-calc').textContent = sub;
    input = sub;
  }

});


// Operation onclick event
document.querySelectorAll('.operations').forEach(operation => operation.addEventListener('click', function () {

  displayKeys(this.value);

}));

euqal.addEventListener('click', function () {

  if (input.includes('+')) {
    calculation('+');
    return;
  }

  if (input.includes('-')) {
    calculation('-');
    return;
  }

  if (input.includes('*')) {
    calculation('*');
    return;
  }

  if (input.includes('/')) {
    calculation('/');
    return;
  }

});

clear.addEventListener('click', clearNumbers);

function calculation(operator) {
  let op = String(operator);
  let numbers = input.split(op);

  let firstNumber = Number(numbers[0]);
  let secondNumber = Number(numbers[1]);
  if (op === '+') {
    res = (firstNumber) + (secondNumber);

  } else if (op === '-') {
    res = (firstNumber) - (secondNumber);
  } else if (op === '*') {
    res = (firstNumber) * (secondNumber);
  } else if (op === '/') {
    res = (firstNumber) / (secondNumber);
  }

  res ||= "Invalid";
  document.querySelector('.display-calc').textContent = res;
  input = String(res);
  return;
}