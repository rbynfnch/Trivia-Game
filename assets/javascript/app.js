$("#start").on("click" function() {
    $("#start").remove();
    console.log("you clicked start");
for(var i=0; i<questions.length; i++){
$("#questions").append("<h2>" + questions[i].question + "</h2>");
for(var j=0, j < questions[i].answers.length; j++){
    $("#questions").append("<input type='radio' name='question- " + i + "' value= '" + questions[i].answers[j] + "'>" + questions[i].answers[j])
}
}
game.start();
})


$(document).on("click", "#end",function(){
    game.done();
})

// function populate() {
//   if (quiz.isEnded()) {
//     showScores();
//   } else {
//     //show question
// var element = document.getElementById("question");
//     element.innerHTML = quiz.getQuestionsIndex().text;
//   }
// }

var questions = [{
    question: "In what season did the cube come?",
    answers: ["Season 4", "Season 5", "Season 6", "Season 7"],
    correctAnswer: "Season 5"
}, {
        question: "How many DJ skins have there been so far (up to Season 8)?",
        answers: ["One", "Two", "Four", "Five"],
        correctAnswer: "Two"
    }, {
        question: "What is the weapon that got removed really fast?",
        answers: ["Sword", "Guided Missle", "Zapatron", "Burst AR"],
        correctAnswer: "Zapatron"
    }, {
        question: "What is the dance that you get right when you first get the game?",
        answers: ["Dance Moves", "Orange Justice", "Hype", "Living Large"],
        correctAnswer: "Dance Moves" 
    }, {
        question: "How many types of ARs are there?",
        answers: ["Three", "Four", "Five", "Six"],
        correctAnswer: "Five" 
}];;

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function() {
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter<=0){
            console.log("Time is up!");
            game.done();
        }
    },
    start: function(){
        timer = setInterval(game.countdown,1000);
        $("#sub-wrapper").prepend("<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>");
        $("#start").remove();
        console.log("you clicked start");
        for (var i = 0; i < questions.length; i++) {
            $("#questions").append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0, j< questions[i].answers.length; j++) {
                $("#questions").append("<input type='radio' name='question- " + i + "' value= '" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
        $("#sub-wrapper").append("<br><button id="end">DONE</button>");
    },
    done: function(){
        $.each($('input[name="question-1]":checked')),function(){
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        this.result();
    },
    result: function(){
        clearInterval(timer);
        $("#sub-wrapper h2").remove();

        $("#sub-wrapper").html("<h2>All done!</h2>");
        $("#sub-wrapper").append("<h3>Correct Answers: "+this.correct+"</h3>");
        $("#sub-wrapper").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
$("#sub-wrapper").append("<h3>Unanswered: "+(questions.length+(this.incorrect+this.correct))+"</h3>");
    }
}

// var quiz = new Quiz(questions);

// populate();

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
// 


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
