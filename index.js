var readlineSync = require('readline-sync')
var score = 0

var highScore = [
  {
    name: "Nick",
    score: 3,
  },
  {
    name: "Sheldon",
    score: 1,
  },
]

function newUser(){
  var userName = readlineSync.question("May I know your name? ")
  console.log("Welcome " + userName + "! to the Big Bang Theory quiz." + "\n")
}

var questions = [
  {
    question: "Who played the role of Sheldon?",
    a: "Jim Parsons",
    b: "Ronald Downey Jr.",
    answer: "a",
  },
  {
    question: "Who is sheldon's best friend?",
    a: "Rajesh Koothrapali",
    b: "Leonard Hofstader",
    answer: "b",
  },
  {
    question: "How many seasons are there in BBT?",
    a: 12,
    b: 13,
    answer: "a",
  },
  {
    question: "Which one of these is the Leonard's profession?",
    a: "Astrophysicist",
    b: "Experimental Physicist",
    answer: "b",
  }
]

function askQuestion(){
  for(var i = 0; i<4; i++){
    var currentQuestion = questions[i]
    console.log(currentQuestion.question + "\n"
    + "a. " + currentQuestion.a + "  b. " + currentQuestion.b)
    checkAnswer(currentQuestion.answer)
  }
  console.log("Yay! You scored " + score + " points.")
}

function checkAnswer(someAnswer){
  var userAnswer = readlineSync.question()
  if(userAnswer == someAnswer)
  {
    score++
    console.log("Correct!")
    console.log("Current Score: " + score + "\n")
  }
  else{
    score--
    console.log("Incorrect!")
    console.log("Current Score: " + score + "\n")
  }
}

function showScores(){
  console.log("\n" + "Check out some of the high scores. If you think your name should be here then send me a screenshot of your score." + "\n")
  for(var i = 0; i<2; i++){
    var currentScore = highScore[i]
    console.log(currentScore.name + ":" + currentScore.score)
  }
}

newUser()
askQuestion()
showScores()