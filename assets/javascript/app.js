function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    //show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionsIndex().text;
  }
}

var questions = [
  new Question(
    "In what season did the cube come?",
    ["Season 4", "Season 5", "Season 6", "Season 7"],
    "Season 5"
  ),
  new Question(
    "How many DJ skins have there been so far (up to Season 8)?",
    ["One", "Two", "Four", "Five"],
    "Two"
  ),
  new Question(
    "What is the weapon that got removed really fast?",
    ["Sword", "Guided Missle", "Zapatron", "Burst AR"],
    "Zapatron"
  ),
  new Question(
    "What is the dance that you get right when you first get the game?",
    ["Dance Moves", "Orange Justice", "Hype", "Living Large"],
    "Dance Moves"
  ),
  new Question(
    "How many types of ARs are there?",
    ["Three", "Four", "Five", "Six"],
    "Five"
  )
];

var quiz = new Quiz(questions);

populate();

// for (var i = 0; i < questions.length; i++) {
// var choices = window.text(questions[i].text);
// if(choices == questions[i].answer) {
//     score++;
//     alert("Correct!");
// }
// };

//timer count down from 10 seconds

//questions

//try
//$ jquery instead of this function using this. "this" will work in function
function Question(text, choices, answer) {
  this.text = text; //this is referring to the window, it needs to be a function in a function
  this.choices = choices;
  this.answer = answer;
}
console.log(Question);

Question.prototype.correctAnswer = function(choice) {
  return choice === this.answer;
};

//controlling the quiz

function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}
console.log(Quiz);

Quiz.prototype.getQuestionsIndex = function() {
  return this.questions[this.questionIndex];
};

Quiz.prototype.isEnded = function() {
  return this.questions.length === this.questionIndex;
};
Quiz.prototype.guess = function(answer) {
  this.questionIndex++;

  if (this.getQuestionsIndex().correctAnswer(answer)) {
    this.score++;
  }

  this.questionIndex++;
};

var text = quiz.getQuestionsIndex().text;
for (var i = 0; i < choices.length; i++) {
  var element = document.getElementById("text" + i);
  element.innerHTML = questions[i];
  guess("btn" + i, choices[i]);
}

//show choices
var choices = quiz.getQuestionsIndex().choices;
for (var i = 0; i < choices.length; i++) {
  var element = document.getElementById("choice" + i);
  element.innerHTML = choices[i];
  guess("btn" + i, choices[i]);
}

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
    quiz.guess(guess);
    populate();
  };
}

function showProgress() {
  var currentQustionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML =
    "Wuestion " + currentQustionNumber + "of " + quiz.questions.length;
}
//
function showScores() {
  var gameOverHtml = "<h1>Result</h1>";
  gameOverHtml += "<h2 id='score'>Your score: " + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHtml;
}

// var number = 20;
// var intervalId;
// var score = 0;

// ]
// //when the Start button gets clicked run the start function
// $("#start").on(click, start);

// function start() {
//   clearInterval(intervalId);
//   intervalId = setInterval(decrement, 1000);
// }

// function decrement() {
//   number--;
//   $("#timer").html("<h2>" + number + "</h2>");
//   if (number === 0) {
//     stop();
//     alert("Time is Up!");
//   }
// }
// start();

// for(var i=0; i < questions.length; i++) {
// var response = window.prompt(questions[i].prompt);
// if(response == questions[i].answers) {
//     score++;
//     alert("Correct!");

// } else {
//     alert("That is incorrect.");
// }
// }
// alert("You got " + score + "/" + questions.length);

// //randomly select questions
// function getQuestions() {
//   return [
//     {
//       questionText: "Who sings Sunflower?",
//       options: ["Marshmellow", "Singer 2", "Singer 3", "Singer 4"],
//       correct: 0
//     },
//     {
//       questionText: "Question number 2?",
//       options: ["answer1", "answer2", "answer3", "answer4"],
//       correct: 3
//     },
//     {
//       questionText: "Question number 3?",
//       options: ["answer1", "answer2", "answer3", "answer4"],
//       correct: 2
//     },
//     {
//       questionText: "Question number 4?",
//       options: ["answer1", "answer2", "answer3", "answer4"],
//       correct: 1
//     },
//     {
//       questionText: "Question number 5?",
//       options: ["answer1", "answer2", "answer3", "answer4"],
//       correct: 3
//     },
//     {
//       questionText: "Question number 6?",
//       options: ["answer1", "answer2", "answer3", "answer4"],
//       correct: 3
//     },
//     {
//       questionText: "Question number 7?",
//       options: ["answer1", "answer2", "answer3", "answer4"],
//       correct: 3
//     },
//     {
//       questionText: "Question number 8?",
//       options: ["answer1", "answer2", "answer3", "answer4"],
//       correct: 3
//     },
//     {
//       questionText: "Question number 9?",
//       options: ["answer1", "answer2", "answer3", "answer4"],
//       correct: 3
//     },
//     {
//       questionText: "Question number 10?",
//       options: ["answer1", "answer2", "answer3", "answer4"],
//       correct: 3
//     }
//   ];
// }
// class Trivia extends React.Component {}
