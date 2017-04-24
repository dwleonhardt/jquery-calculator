var buttons = $('#buttons-container')[0];
var calcScreen = $('#screen');
var number1 = [];
var number2 = [];
var current = '0';
var operator = '';
$(buttons).on('click', function(event) {
  $target = $(event.target);
  if ($target.text().length <= 1) {
    if (isNaN($target.text()) === false) {
      current += $target.text();
      // console.log(current);
    } else if($target.text() === '=') {
        number2.push(current);
        if (operator === '+') {
          add(number1, number2);
        } else if (operator === '÷') {
          divide(number1, number2);
        } else if (operator === 'x') {
          multiply(number1, number2);
        } else if (operator === '-') {
          subtract(number1, number2);
        }
      } else {
        number1.push(current);
        current = '0';
        operator = $target.text();
    }
  }
  console.log(number1[0]);
  console.log(number2[0]);
});

function add(number1, number2) {
  calcScreen.text(parseInt(number1[0]) + parseInt(number2[0]));
  number1[0] = parseInt(number1[0]) + parseInt(number2[0]);
}
function subtract(number1, number2) {
  calcScreen.text(parseInt(number1[0]) - parseInt(number2[0]));
  number1[0] = parseInt(number1[0]) - parseInt(number2[0]);
}
function multiply(number1, number2) {
  calcScreen.text(parseInt(number1[0]) * parseInt(number2[0]));
  number1[0] = parseInt(number1[0]) * parseInt(number2[0]);
}
function divide(number1, number2) {
  calcScreen.text(parseInt(number1[0]) / parseInt(number2[0]));
  number1[0] = parseInt(number1[0]) / parseInt(number2[0]);
}
