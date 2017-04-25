var buttons = $('#buttons-container')[0];
var calcScreen = $('#screen');
var input = [];
var number1 = [];
var number2 = [];
var current = '0';
var operator = '';
var answer = 0;
$(buttons).on('click', function(event) {
  $target = $(event.target);
  if ($target.text() === 'C') {
      input = [];
      number1.length = 0;
      number2.length = 0;
      current = '0';
      operator = '';
      answer = 0;
    }
  if ($target.text().length <= 1) {
    if ($target.text() !== 'C') {
      input.push($target.text());
    }
    calcScreen.text(input.join(''));
    if (isNaN($target.text()) === false) {
      current += $target.text();
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
      } else if($target.text() !== 'C'){
        number1.push(current);
        current = '0';
        operator = $target.text();
    }
  }
  console.log(operator);
  console.log(number1);
  console.log(number2);
  console.log(answer);
});

function add(number1, number2) {
  calcScreen.text(parseInt(number1[0]) + parseInt(number2[0]));
  number1[0] = parseInt(number1[0]) + parseInt(number2[0]);
  current = '0';
  number2.length = 0;
  input.length = 0;
}
function subtract(number1, number2) {
  calcScreen.text(parseInt(number1[0]) - parseInt(number2[0]));
  number1[0] = parseInt(number1[0]) - parseInt(number2[0]);
  current = '0';
  number2.length = 0;
  input.length = 0;
}
function multiply(number1, number2) {
  calcScreen.text(parseInt(number1[0]) * parseInt(number2[0]));
  number1[0] = parseInt(number1[0]) * parseInt(number2[0]);
  current = '0';
  number2.length = 0;
  input.length = 0;
}
function divide(number1, number2) {
  calcScreen.text(parseInt(number1[0]) / parseInt(number2[0]));
  number1[0] = parseInt(number1[0]) / parseInt(number2[0]);
  current = '0';
  number2.length = 0;
  input.length = 0;
}
