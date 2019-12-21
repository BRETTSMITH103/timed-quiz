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
  // create variables to reference all DOM elements we're working with

  // time-left

  // start game button
  // start-screen element

  // quiz-content

  // post-game-screen
  // user-score
  // play-again-btn


  // create variables for game logic
  // timerIntervalId
  // score
  // secondsLeft


  // create function to start game
  // set secondsLeft variable starting time (300 seconds = 5 minutes)
  // write secondsLeft to the page

  // reset score to 0
  // write score to the page (optional)

  // hide start-screen element && post-game-screen
  // show quiz-content element

  // display first question
  displayQuestion(0);

  // set timerIntervalId to setInterval function that decrements secondsLeft every second
  timerIntervalId = setInterval(function () {
    secondsLeft--;
    if (secondsLeft <= 0) {
      stopGame();
    }
  }, 1000);



  // create function to display a question and possible choices
  function displayQuestion(questionIndex) {
    // check if questionIndex in questions array doesn't exist
    if (!questions[questionIndex]) {
      // stop game, we've hit last question
      return stopGame();
    }

    // get questions[questionIndex]
    // print question to the page
    // use data attribute to know which index the question is
    // loop through choices and print out choices to the page (make them buttons)

  }

// create function to handle users answering
  // use event delegation to make sure button was clicked
  // read data attribute of what question we answered (index)
  // check to see if choice picked is same as questions correct answer
  // if yes, increase score++
  // if no, subtract time from secondsLeft

  // get index of next question (this question's index + 1)
  // run displayQuestion(nextQuestionIndex)



// create a function to stop the game (either by answering all the questions or time has run out)
  // clearInterval() to stop the timer
  // hide quiz-content element
  // show post-game-screen
  // print out user score



// add event listeners
  // start game button (for starting the game)
  // quizcontent (for answering a question) -> use event delegation
  // play again button (for starting the game)


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