                /////EVENT LISTENERS/////


document.addEventListener("DOMContentLoaded", () => {
    const enterIfYouDare = document.querySelector("#btn");
    enterIfYouDare.addEventListener("click", ()=> {
        enterIfYouDare.style.display= "none";
        const h1 = document.querySelector("h1");
        h1.style.display="none";
        start();
    });
    const nextButton = document.querySelector("#next-btn");
    nextButton.addEventListener("click", () => {
        const removeQuesAns = document.querySelector("#test")
        removeQuesAns.style.display="none";
        // keepScore();
        getQuestion();
        // getInputValue();
    });

    const submitButton = document.querySelector("#button")
    submitButton.addEventListener("click", () => {
        // getQuestion();
    })
}
);

                /////VARIABLES/////

let score = 0;
let currentQuestion 
let questionAsk = 0;
let totalQuestion 
let rightAnswer



                /////FUNCTIONS/////

const start = () => {
    // let questionAsk = 0;
    // let score = 0;
getQuestion();
    // getInputValue();
}

const myQuestions = [
    {   question:"What TV show statue lives here?",
        choices:["Bewitched", "Elvira", "Sabrina, The Teenage Witch"],
        answer:"Bewitched",
        
    },
    {   question:"In what year did the Salem Witch Trials take place?",
        choices:["1692", "1776", "1806"],
        answer:"1692",
    },
    {   question: "Which accused person was pressed to death for refusing to answer the court's questions?",
        choices:["Giles Corey", "Tituba","Samuel Wardwell"],
        answer:"Giles Corey",
    },

    {   question:"How many convicted witches were hanged?",
        choices:["19", "107", "45", "20"],
        answer: "19"
    },

    {   question:"Members of which Salem Village family did much of the accusing?",
        choices: ["Porter","Putnam","Ryan"],
        answer: "Putnam"
    },
    ];

const getQuestion = () => {
    // Making the function choose a random question, then using splice to 
    // take used question from the array. 
let randomElement = Math.floor(Math.random() * myQuestions.length);
let currentQuestion = myQuestions.splice(randomElement, 1)
    // console.log("currentQuestion:", currentQuestion);
    console.log("currentQuestion:", currentQuestion[0])
    // console.log(randomElement)

const test=document.createElement('section');
test.setAttribute('id','test');
const questions = document.createElement('ul');
    // Make sure we put under image, append under image.
document.body.appendChild(test);
test.appendChild(questions);
questions.innerHTML += `<h1 class="ques">${currentQuestion[0].question}</h1>`
    for(let i = 0; i<currentQuestion[0].choices.length; i++) {
         let li=document.createElement('li');
          li.innerHTML = `<h3 class="option">, <br>${currentQuestion[0].choices[i]}</br></h3>`
           questions.appendChild(li);
    }
// const createAnswer = document.createElement('div')
// test.appendChild(createAnswer);
// createAnswer.innerHTML = `${currentQuestion[0].answer}`
// const userInput = document.querySelector("#myInput").value;
// if (userInput === currentQuestion[0].answer){  
//     score++
//     console.log(score)
// }
    


}
  

const getInputValue = () => {
let questionAsk = 0;
let score = 0;
const userInput = document.querySelector("#myInput").value;
if (userInput === currentQuestion[0].answer){
        score++
        questionAsk++
    } else {
        console.log("Wrong")
    }
   console.log(score++)
   console.log(userInput)
 
}






const endGame = () => {
    if (score === 5) {
        console.log("You are a powerful witch!")
    }
}

