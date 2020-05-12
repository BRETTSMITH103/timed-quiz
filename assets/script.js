var timeRemaining = document.querySelector("#time-left");
var startScreen = document.querySelector("#start-screen");
var startGameButton = document.querySelector("#start-game-btn");
var questionsS = document.querySelector("#quiz-content");
var postGame = document.querySelector("#post-game-screen");
var finalScore = document.querySelector("#user-score");
var playAgainButton = document.querySelector("#play-again-btn");

var currentQuestionIndex = 0;

var timerIntervalId;
var score = 0;

var secondsLeft = questions.length * 6;
var intervalRunning = false

function startGame() {
  secondsLeft = questions.length * 6;

  timeRemaining.textContent = secondsLeft;

  finalScore.value = finalScore.defaultValue;

  if (!intervalRunning) {
    intervalRunning = true;
    timerIntervalId = setInterval(function () {
      secondsLeft--;
      timeRemaining.textContent = secondsLeft
      console.log(secondsLeft)
      if (secondsLeft === 0) {

        stopGame();
      }
    }, 1000);
  }

  displayQuestions(0);
}

function displayQuestions(questionIndex) {
  if (questionIndex === questions.length) {

    console.log('hi')
    return stopGame();

  }
  var currentQuestion = questions[questionIndex];

  var titleEl = document.getElementById("question-title");

  titleEl.textContent = currentQuestion.questions;

  var choicesEl = document.getElementById("choices");
  choicesEl.innerHTML = "";
  currentQuestion.choices.forEach(function (choice, i) {
    var choiceButton = document.createElement("button");
    choiceButton.setAttribute("value", choice);
    choiceButton.textContent = i + 1 + ". " + choice;
    choiceButton.onclick = questionClick;
    choicesEl.appendChild(choiceButton);
  });

}

function questionClick() {
  if (this.value !== questions[currentQuestionIndex].answer) {
    alert("Nope! Wrong Answer!");
  } else {
    alert("You're Right! Way to go!");
    score++;
  }
  currentQuestionIndex++;
  displayQuestions(currentQuestionIndex);
}

function stopGame() {
  console.log("stopGame");
  intervalRunning = false;
  clearInterval(timerIntervalId)
  questionsS.setAttribute("class", "hide");
  postGame.removeAttribute("class");
  userScoreEl.textContent = score;
}

function playAgain() {
  postGame.setAttribute("class", "hide");
  questionsS.removeAttribute("class");

  startGame();
}

startGameButton.addEventListener("click", function (event) {
  var element = event.target;
  if (element.matches("button") === true) {
    startScreen.setAttribute("class", "hide");

    questionsS.removeAttribute("class");
    startGame();
  }
});

startGameButton.addEventListener("click", startGame);

questionsS.addEventListener("click", function (event) {
  event.preventDefault();
});

playAgainButton.addEventListener("click", playAgain);