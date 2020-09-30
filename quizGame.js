// target HTML elements

var highscoresDiv = document.getElementById("highscores");
var scoresDiv = document.getElementById("score");
var quizDiv = document.getElementById("quiz");
var timerParagraph = document.getElementById("timer");
var questionHeading = document.getElementById("question");
var answersDiv = document.getElementById("answers");

var scores = 0;
var timer;
var timeLeft;
var currentQuestion = 0;

// create question objects

var questions = [
    {
        question: "What color is the sky?",
        options: ["blue", "red", "green", "orange"],
        answer: "blue"
    },
    
    {
        question: "what sound does a cat make?",
        options: ["moo", "howl", "oink", "meow"],
        answer: "meow"
    },

    {
        question: "what color is a banana?",
        options: ["yellow", "magenta", "purple", "beige"],
        answer: "yellow"
    },
    
    {
        question: "what sound does a dog make",
        options: ["honk", "woof", "quack", "ribbit"],
        answer: "woof"
    },

    {
        question: "What color is the moon?",
        options: ["black", "periwinkle", "white", "chartruse"],
        answer: "white"
    },

    {
        question: "Enter your initials to save your score!",
        options: [],
    }
];

// start quiz function

function startQuiz(){
    timeLeft = 90;
    scores = 0;
    currentQuestion = 0;
    timer = setInterval(clockTick, 1200);
    document.getElementById("score").innerHTML = scores;
    displayQuestion(currentQuestion);    
}

//timer function

function clockTick(){
    timeLeft--;
    timerParagraph.textContent = "Time Remaining: " + timeLeft + " seconds";

    if(timeLeft < 1 || currentQuestion == questions.length -1){
        clearInterval(timer);
    }
}

// display question function

function displayQuestion(currentQuestion){
    questionHeading.textContent = questions[currentQuestion].question;
    answersDiv.innerHTML = "";
    
    for(let i = 0; i <questions[currentQuestion].options.length; i++){
        var button = document.createElement("input");
        button.setAttribute("type", "button");
        button.setAttribute("value", questions[currentQuestion].options[i]);
        button.setAttribute("id", questions[currentQuestion].options[i]);
        button.setAttribute("onclick", questions[currentQuestion].options[i] + "()");
        answersDiv.append(button);    
    }

    if(currentQuestion == questions.length - 1){
        initials();
    }

}
//correct answers add points

function blue(){
    scores += 100;
    document.getElementById("score").innerHTML = scores;
    currentQuestion ++;
    displayQuestion(currentQuestion);
}

function meow(){
    scores += 100;
    document.getElementById("score").innerHTML = scores;
    currentQuestion ++;
    displayQuestion(currentQuestion);
}

function yellow(){
    scores += 100;
    document.getElementById("score").innerHTML = scores;
    currentQuestion ++;
    displayQuestion(currentQuestion);
}

function woof(){
    scores += 100;
    document.getElementById("score").innerHTML = scores;
    currentQuestion ++;
    displayQuestion(currentQuestion);
}

function white(){
    scores += 100;
    document.getElementById("score").innerHTML = scores;
    currentQuestion ++;
    displayQuestion(currentQuestion);
}

//wrong answers subtract time


function red(){
    timeLeft -= 10;
    document.getElementById("score").innerHTML = scores;
    currentQuestion ++;
    displayQuestion(currentQuestion);
}

function green(){
    timeLeft -= 10;
    document.getElementById("score").innerHTML = scores;
    currentQuestion ++;
    displayQuestion(currentQuestion);
}

function orange(){
    timeLeft -= 10;
    document.getElementById("score").innerHTML = scores;
    currentQuestion ++;
    displayQuestion(currentQuestion);
}

function moo(){
    timeLeft -= 10;
    document.getElementById("score").innerHTML = scores;
    currentQuestion ++;
    displayQuestion(currentQuestion);
}

function howl(){
    timeLeft -= 10;
    document.getElementById("score").innerHTML = scores;
    currentQuestion ++;
    displayQuestion(currentQuestion);
}

function oink(){
    timeLeft -= 10;
    document.getElementById("score").innerHTML = scores;
    currentQuestion ++;
    displayQuestion(currentQuestion);
}

function magenta(){
    timeLeft -= 10;
    document.getElementById("score").innerHTML = scores;
    currentQuestion ++;
    displayQuestion(currentQuestion);
}

function purple(){
    timeLeft -= 10;
    document.getElementById("score").innerHTML = scores;
    currentQuestion ++;
    displayQuestion(currentQuestion);
}

function beige(){
    timeLeft -= 10;
    document.getElementById("score").innerHTML = scores;
    currentQuestion ++;
    displayQuestion(currentQuestion);
}

function honk(){
    timeLeft -= 10;
    document.getElementById("score").innerHTML = scores;
    currentQuestion ++;
    displayQuestion(currentQuestion);
}

function quack(){
    timeLeft -= 10;
    document.getElementById("score").innerHTML = scores;
    currentQuestion ++;
    displayQuestion(currentQuestion);
}

function ribbit(){
    timeLeft -= 10;
    document.getElementById("score").innerHTML = scores;
    currentQuestion ++;
    displayQuestion(currentQuestion);
}

function black(){
    timeLeft -= 10;
    document.getElementById("score").innerHTML = scores;
    currentQuestion ++;
    displayQuestion(currentQuestion);
}

function periwinkle(){
    timeLeft -= 10;
    document.getElementById("score").innerHTML = scores;
    currentQuestion ++;
    displayQuestion(currentQuestion);
}

function chartruse(){
    timeLeft -= 10;
    document.getElementById("score").innerHTML = scores;
    currentQuestion ++;
    displayQuestion(currentQuestion);
}

//enter initials function

function initials(){
    var initial = document.createElement("input");
    initial.setAttribute("type", "text");
    initial.setAttribute("id", "initial");
    answersDiv.append(initial);

    var button = document.createElement("input")
    button.setAttribute("type", "button")
    button.setAttribute("id", "username")
    button.setAttribute("onclick", "addInitials()");
    button.setAttribute("value", "Save Score");
    answersDiv.append(button);
}

function addInitials() {
    var initial = document.getElementById("initial").value
    var li = document.createElement("li").innerHTML = initial + ": " + scores + "  /  ";
    document.getElementById("highestScores").append(li);
}

