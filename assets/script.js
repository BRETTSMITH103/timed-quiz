// CREATE OUR VARIABLES

// HTML ELEMENTS
var $firstNumber = $('#first-number');
var $secondNumber = $('#second-number');
var $operator = $('#operator');
var $result = $('#result');

// VARIABLES FOR CALCULATOR LOGIC
var firstNumber = '';
var secondNumber = '';
var operator = '';
var result = '';

// create a function for clearing all data and resetting values
function calculatorReset() {
  // reset logic variables
  // ex. firstNumber = "";
  // clear out HTML element values
  // ex. $firstNumber.text("");
}

// function to handle button click for numbers
function handleNumberClick(event) {
  // read value of number picked
  var numberPicked = $(this).val(){

    if (operator === "") {



  }


}
  // var numberPicked = $(event.target).val();
  // if there is nothing set in the operator variable yet, add numberPicked to firstNumber
  // else, add numberPicked to secondNumber
  // write number to the proper location on the page
}

// function to handle operator selection
function handleOperatorClick(event) {
  // get operator value out of button clicked

  car operatorPicked = $(this).val();
  // var operatorPicked = $(event.target).val()
  // if firstNumber variable is empty, return false

  if (!firstNumber) {
    return false;

  }
  // else set operator variable to value of operatorPicked
  // write operator value to the page
}

// function to handle clicking the equal sign "="
function handleEqualClick(event) {
  // check to make sure that firstNumber, operator, and secondNumber all have values
  // if any of them don't have a value, return false
  // use if statements to check value of "operator" variable and perform math operation based on that
  // if (operator === "plus") { }
  // write total to the page
}

// create event listeners
$('.number').on('click', handleNumberClick);
$('.operator').on('click', handleOperatorClick);
$('.equal').on('click', handleEqualClick);
$('.clear').on('click', calculatorReset);
Collapse