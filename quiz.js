const question = [
    {
        question:"Which is the largest river in the world",
        answers:[
            {text:"Yello river",correct:false},
            {text:"Nile river",correct:true},
            {text:"Amazon river",correct:false},
            {text:"Parana river",correct:false},

        ]
    },
    {
        question:"Which iphone model is costs high in the world",
        answers:[
            {text:"iPhone13",correct:false},
            {text:"iPhone 15 pro",correct:false},
            {text:"iPhone 14",correct:false},
            {text:"Falcon Supernova iPhone6",correct:true},

        ]
    },
    {
        question:"Which is the longest river in the world",
        answers:[
            {text:"Yello river",correct:false},
            {text:"Nile river",correct:false},
            {text:"Amazon river",correct:true},
            {text:"Parana river",correct:false},

        ]
    },
    {
        question:"Which iPhone is the no 1 in the world",
        answers:[
            {text:"iPhone 14 pro",correct:false},
            {text:"iPhone 15 pro",correct:true},
            {text:"iPhonr 13 pro",correct:false},
            {text:"iPhone 16 pro",correct:false},

        ]
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let Score=0;

function StartQuiz(){
    currentQuestionIndex=0;
     Score=0;
     nextbutton.innerHTML = "Next";
     showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "."+currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
        });
}

function resetState(){
    nextbutton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        Score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.Disabled = true;
    });
    nextbutton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML= `You Scored ${Score} out of ${question.length}!`;
    nextbutton.innerHTML="play again";
    nextbutton.style.display = "block";
}

function handleNextbutton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextbutton.addEventListener("click", ()=>{
    if(currentQuestionIndex < question.length){
        handleNextbutton();
    }else{
        StartQuiz();
    }
});


StartQuiz();
