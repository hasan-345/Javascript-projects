const question = document.querySelector("#question");
const btn = document.querySelectorAll(".btn")
const parentBtn = document.querySelector(".btns")
const nextBtn = document.querySelector("#next");

let questions = [
    {
        question: "What is  the name of capital city of pakistan?",
        answers:[
            {text:"Islamabad",correct: true},
            {text:"Toba Tek Singh",correct:false},
            {text:"Karachi",correct:false},
            {text:"Faislabad",correct:false}
        ]
    },
    {
        question: "What is  the name of prime minister of pakistan?",
        answers:[
            {text:"Nawaz shareef",correct: true},
            {text:"Imran khan",correct:false},
            {text:"Kakar",correct:false},
            {text:"Bilawal bhutto",correct:false}
        ]
    },
    {
        question: "What is stand for \"PTA\" ",
        answers:[
            {text:"Pakistan Telecommunication Authority",correct: true},
            {text:"Pakistan Toyota Authority",correct:false},
            {text:"Ben Ten ",correct:false},
            {text:"None",correct:false}
        ]
    },
    {
        question: "Who will be next prime minister of pakistan?",
        answers:[
            {text:"Nawaz shareef",correct: true},
            {text:"Imran khan",correct:false},
            {text:"Bilawal Bhutto",correct:false},
            {text:"None",correct:false}
        ]
    }
]
let score = 0;
let currentQuestion = 0;


function startQuiz(){
    score = 0;
    currentQuestion = 0;
    nextBtn.innerText = "Next"
    showAnswer();
}

function showAnswer(){
    resetState()
      let currentQue = questions[currentQuestion];
      let questionNumber = currentQuestion + 1;
      question.innerHTML = `${questionNumber})  ${currentQue.question}`; 
      currentQue.answers.forEach((val) => {
           let button = document.createElement("button");
            button.innerText = val.text;
            button.classList.add("btn")
           parentBtn.appendChild(button);
           if(val.correct){
             button.dataset.correct = val.correct;
           }
           button.addEventListener("click",selectedWinner);
      });
}
startQuiz();

function resetState(){
    nextBtn.style.display = "none"
    while(parentBtn.firstChild){
          parentBtn.removeChild(parentBtn.firstChild);
    }
}
function selectedWinner(e){
    let selectedbtn = e.target;
    let isCorrect = selectedbtn.dataset.correct === "true";
    if(isCorrect){
        selectedbtn.classList.add("correct");
        score++
    }else{
        selectedbtn.classList.add("Incorrect");
    }
      Array.from(parentBtn.children).forEach((y)=>{
        if(y.dataset.correct === "true"){
            y.classList.add("correct");
        }
        y.disabled = true
      })
      nextBtn.style.display = "block"

}
function showScore(){
    resetState();
    question.innerText = `your scored ${score} out of ${questions.length}`;
    nextBtn.innerText = "play agin";
    nextBtn.style.display = "block";
}
function handleNext(){
    currentQuestion++;
    if(currentQuestion < questions.length){
        showAnswer()
    }else{
        showScore()
    }
}
nextBtn.addEventListener("click",()=>{
    if(currentQuestion < questions.length){
        handleNext()
    }else{
        startQuiz()
    }
})