//
// CALCULATOR
//
$(document).ready(function() {

var $screen = $('#screen');
var displayText = $screen.text();
var firstNumber = '';
var secondNumber = '';
var currentOperator = '';
var result = '';


$('.buttons').on('click', function() {
  //console.log("add clicked");
  //console.log(event.target.innerText);

  var input = $(event.target).text();
  if (input >= 0 && input < 10) {
    //console.log(input);
    displayText += input;
    firstNumber = displayText;
  //  console.log(screenText);
  $screen.text(displayText);
}

else if (input === 'x') {
  displayText = '';
  $screen.text('');
  console.log(firstNumber);
  input += displayText;
  currentOperator = 'x';
//  console.log(currentOperator)

} else if (input === '+') {
  displayText = '';
  $screen.text('');
  console.log(firstNumber);
  input += displayText;
  currentOperator = '+';

} else if (input === '-') {
  displayText = '';
  $screen.text('');
  console.log(firstNumber);
  input += displayText;
  currentOperator = '-';

} else if (input === '÷') {
  displayText = '';
  $screen.text('');
  console.log(firstNumber);
  input += displayText;
  currentOperator = '÷';

} else if (input === '=') {
  displayText = '';
  var hasEval = true;
//  $screen.text('');

  secondNumber = displayText;

  // input += screenText;
  if (currentOperator === '+') {
    displayText = Number(firstNumber) + Number(secondNumber)
    $screen.text(displayText);
    console.log('first number:' + firstNumber);
    console.log(currentOperator)
    console.log('second number:' + secondNumber);
    console.log('total:' + firstNumber + secondNumber);
  }
  //$screen.text(firstNumber + currentOperator + secondNumber)
  //console.log(secondNumber);
//  console.log(currentOperator);

} else if  (input === 'C') {
  console.log(input);
  displayText = '';
  $screen.text('');
//  console.log(currentOperator)
}
});

});
