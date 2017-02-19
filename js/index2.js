//
// CALCULATOR
//
$(document).ready(function() {

    var $screen = $('#screen');
    var displayText = $screen.text();
    var currentOperator = '';
    var firstNumber = '';
    var secondNumber = '';

    $('.buttons').on('click', function() {

        var input = $(event.target).text()
        displayText += input
        $screen.text(displayText)

        if (input === 'C') {
            displayText = '';
            $screen.text('');
        }

    });


})
