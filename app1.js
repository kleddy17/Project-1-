                /////EVENT LISTENERS/////


document.addEventListener("DOMContentLoaded", () => {
    const enterIfYouDare = document.querySelector("#btn");
    enterIfYouDare.addEventListener("click", ()=> {
        enterIfYouDare.style.display= "none";
        start();
    });
        }
      );

                /////VARIABLES/////

let score 
let currentQuestion 
let totalQuestion 
let rightAnswer



                /////FUNCTIONS/////

const start = () => {
let currentQuestion = 0;
let score = 0;
getQuestion();
}

const nextQuestion = () => {
    // 1. How to make a click button for next question/add event listener

    // 2. I want to generate new question
    // getQuestion()
    
    // 3. I want to keep track of what question we are on
    currentQuestion++

    // 4. I want to add to the score if there is a right answer
    // score++
}

const myQuestions = [
    {   question:"1. What TV show statue lives here?",
        choices:["Bewitched", "Elvira", "Sabrina, The Teenage Witch"],
        answer:1,
        
    },
    {   question:"2. In what year did the Salem Witch Trials take place?",
        choices:["1692", "1776", "1806"],
        answer:"1692"
    }
    ];

const getQuestion = () => {
    const test=document.createElement('section');
    test.setAttribute('id','test');
    for (let i=0; i<myQuestions.length; i++){
        const ul=document.createElement('ul');
        document.body.appendChild(test);
        test.appendChild(ul);
        ul.innerHTML=ul.innerHTML + myQuestions[i].question
        for(let j = 0; j<myQuestions[i].choices.length; j++) {
            let li=document.createElement('li');
            ul.appendChild(li);
            li.innerHTML=li.innerHTML + myQuestions[i].choices[j];
        }
    }
}
const keepScore = () => {
const getInputValue = document.querySelectorAll('input[type="text"]');
    if (getInputValue === myQuestions.answer) {
        score++
        currentQuestion++
    }else{ currentQuestion++
    }
}


const endGame = () => {
if (score === 5) {
    console.log("You are a powerful witch!")
}
}

