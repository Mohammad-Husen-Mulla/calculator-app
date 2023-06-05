let plus = document.querySelector('.plus');
let minus = document.querySelector('.multiply');
let euqal = document.querySelector('.equal');
let input = "";
let res = 0;
let arrayResult = [];

function displayKeys(value) {
  input = input + String(value);
  document.querySelector('.display-calc').textContent = input;
}

function clearNumbers() {
  input = "";
  document.querySelector('.display-calc').textContent = "";
}

const addition = function (result, number) {
  return Number(result) + Number(number);
}


document.querySelectorAll('.number').forEach(num => num.addEventListener('click', function () {

  if (input.length <= 45) {
    displayKeys(this.value);



  }

  arrayResult.push(this.value);
  console.log(arrayResult);

}));

euqal.addEventListener('click', function () {


});

function calculation(signs) {

  switch (signs) {
    case '+': {
      addition(result,)
      break;
    }
  }
}

