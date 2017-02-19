//
// CACULATOR
//
$(document).ready(function() {

  let $screen = $('#screen');
  let displayText = $screen.text();
  let currentOperator = '';
  let hasEval = '';
  let numArr = [];

  $('.buttons').on('click', function() {
    let input = $(event.target).text();

    if (input >= 0 && input < 10) {
      if (hasEval === true) {
        hasEval = false;
        $screen.text('');
        displayText = '';
      }
      displayText += input;

          // console.log('display: ' + displayText, 'input:' + input);
          // console.log('display:' + displayText);
          // console.log('numArr[0] event:' + numArr[0]);
          // console.log('input:' + input);
      $screen.text(displayText);
    }  if (displayText) {
     if (input === '+') {
      currentOperator = '+';
      hasEval = false;
      numArr[0] = displayText;

          // console.log('numArr[0] plus:' + numArr[0]);
          // console.log('operator:' + currentOperator);
      displayText += input;
      $screen.text(numArr[0] + currentOperator);
    }
    else if (input === '-') {
      currentOperator = '-';
      hasEval = false;
      numArr[0] = displayText;
      displayText += input;
      $screen.text(numArr[0] + currentOperator);
    }
    else if (input === 'x') {
      currentOperator = 'x';
      hasEval = false;
      numArr[0] = displayText;
      displayText += input;
      $screen.text(numArr[0] + currentOperator);
    }
    else if (input === '÷') {
      currentOperator = '÷';
      hasEval = false;
      numArr[0] = displayText;
      displayText += input;
      $screen.text(numArr[0] + currentOperator);
    }
    else if (input === '=') {
      numArr = displayText.split(/[x÷+-]/);
      hasEval = true;
      console.log('numArray:' + numArr);

      // console.log('numarr0:' + numArr[0]);
      // console.log('numarr1:' + numArr[1]);
      // numArr[1] = numArr[1];
      if (currentOperator === '+') {
                //  for (i = 0; i < numArr.length; i++) {
        displayText = Number(numArr[0]) + Number(numArr[1]);
        $screen.text(displayText);

      // console.log(displayText);
                //  }
      }
      if (currentOperator === '-') {
        displayText = Number(numArr[0]) - Number(numArr[1]);
        $screen.text(displayText);
      }
      if (currentOperator === 'x') {
        displayText = Number(numArr[0]) * Number(numArr[1]);
        $screen.text(displayText);
      }
      if (currentOperator === '÷') {
        displayText = Number(numArr[0]) / Number(numArr[1]);
        $screen.text(displayText);
      }

            // console.log('numArr[0]' + numArr[0]);
            // console.log('numArr[1]' + numArr[1]);
    }

      else if (input === 'C') {
            // console.log(input);
        displayText = '';
        $screen.text('');
      }
      console.log('hasEval: ' + hasEval);
    }
  });
});
