//setTimeout(ask, 1000*2);

// var questionNumber = [
//   "Question #1",
//   "Question #2",
//   "Question #3",
//   "Question #4",
//   "Question #5"
// ];
// var actualQuetion = [
//   "What does the J. stand for in Homer J Simpson",
//   "What is the address of the Simpson Household?",
//   "What is the name of the Simpsons Cat",
//   "What town is considered the rival of Springfield",
//   "Who Shot Mr. Burns?"
// ];
// var answersA = [
//   "Jay",
//   "256 Spooner St.",
//   "Cutsie",
//   "Shelbyville",
//   "Hans Moleman"
// ];
// var answersB = [
//   "Jerome",
//   "19 Springfield Way",
//   "Snowball",
//   "Ogdonville",
//   "Homer"
// ];
// var answersC = [
//   "Jerry",
//   "1908 Jebediah Rd",
//   "The Cat",
//   "Pawnee",
//   "Maggie"];
// var answersD = [
//   "James",
//   "742 Evergreen Terrace",
//   "Buffy",
//   "Scranton",
//   "Grandpa Simpson"
// ];

var questions = [
  {
    question: "What does the J stand for in Homer J Simpson",
    answers: ["Jay", "Jerome", "Jerry", "James"],
    correctAnswer: 0,
    userAns: ""
  },
  {
    question: "What is the address of the Simpson Household?",
    answers: [
      "256 Spooner St.",
      "19 Springfield Way",
      "1908 Jebediah Rd",
      "742 Evergreen Terrace"
    ],
    correctAnswer: 3,
    userAns: ""
  },
  {
    question: "What is the name of the Simpsons Cat",
    answers: ["Cutsie", "Snowball", "The Cat", "Buffy"],
    correctAnswer: 1,
    userAns: ""
  },
  {
    question: "Who Shot Mr. Burns?",
    answers: ["Hans Moleman", "Homer", "Sideshow Bob", "Maggie"],
    correctAnswer: 3,
    userAns: ""
  },
  {
    question: "What town is considered the rival of Springfield",
    answers: ["Shelbyville", "Ogdonville", "Pawnee", "Scranton"],
    correctAnswer: 0,
    userAns: ""
  }
];

var questionNum = 0;
var time = 5;
var timerHolder;

function picker(arr, num) {
  if (num <= arr.length-1) {
    questionNum += 1;
    return arr[num];
  }
}

$(document).ready(function() {
  $(".buttonA").on("click", function () {
    getQuestion();
    setInterval(countDown, 1000);
    

  });
  
  function getQuestion () {
    $("div.text-center").empty();
    var question = picker(questions, questionNum);
  $("div.text-center").append("<p>" + question.question + "</p>");

  var answerList = question.answers;
    for (let i = 0; i < answerList.length; i++) {
      var button = $("<button>");
      button.text(answerList[i]);
      console.log(answerList[i]);

      $("div.text-center").append("<br>", button);
    }
    

  };


  function countDown() {
    console.log(time);
    if (time === 0) {
      getQuestion();
      resetTimer();
    }

    time--;
  }

  function resetTimer() {
  // stop interval from running
    clearInterval(timerHolder);
    time = 20;
  }

});
// function ask(){
// 	$(".buttonA, .buttonB, .buttonC, .buttonD").empty();
//   $(".buttonA").append(answersA[0]);
//   $(".buttonB").append(answersB[0]);
//   $(".buttonC").append(answersC[0]);
//   $(".buttonD").append(answersD[0]);
//   $("p").append(actualQuetion[0]);
//   $("h3").append(questionNumber[0]);
// }

// function ask(){
// 	$(".buttonA, .buttonB, .buttonC, .buttonD").empty();
//   $(".buttonA").append(answersA[1]);
//   $(".buttonB").append(answersB[1]);
//   $(".buttonC").append(answersC[1]);
//   $(".buttonD").append(answersD[1]);
//   $("p").append(actualQuetion[1]);
//   $("h3").append(questionNumber[1]);
// }

// function ask(){
// 	$(".buttonA, .buttonB, .buttonC, .buttonD").empty();
//   $(".buttonA").append(answersA[2]);
//   $(".buttonB").append(answersB[2]);
//   $(".buttonC").append(answersC[2]);
//   $(".buttonD").append(answersD[2]);
//   $("p").append(actualQuetion[2]);
//   $("h3").append(questionNumber[2]);
// }

// function ask(){
// 	$(".buttonA, .buttonB, .buttonC, .buttonD").empty();
//   $(".buttonA").append(answersA[3]);
//   $(".buttonB").append(answersB[3]);
//   $(".buttonC").append(answersC[3]);
//   $(".buttonD").append(answersD[3]);
//   $("p").append(actualQuetion[3]);
//   $("h3").append(questionNumber[3]);
// }

// function ask(){
// 	$(".buttonA, .buttonB, .buttonC, .buttonD").empty();
//   $(".buttonA").append(answersA[4]);
//   $(".buttonB").append(answersB[4]);
//   $(".buttonC").append(answersC[4]);
//   $(".buttonD").append(answersD[4]);
//   $("p").append(actualQuetion[4]);
//   $("h3").append(questionNumber[4]);

// }


    //.append("<br>"+"<button>"+question.answers[0]+"</button>");

    // var answersList = question.answers;
    // var buttons = [];
    // for (let i = 0; i < answersList.length; i++) {
    //   var button = $("<button>");
    //   button.text(buttons[i]);
    //   button.attr('data-id', i);
    //   $("#questions").append("<br>"+ button[i]);
    //   console.log(button);

    // }
