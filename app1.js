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
        getQuestion();
        keepScore();
    })
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
keepScore();
}

// const nextQuestion = () => {
//     // 1. How to make a click button for next question/add event listener

//     // 2. I want to generate new question
//     // getQuestion()
    
//     // 3. I want to keep track of what question we are on
//     currentQuestion++

//     // 4. I want to add to the score if there is a right answer
//     // score++
// }

const myQuestions = [
    {   question:"What TV show statue lives here?",
        choices:["Bewitched", "Elvira", "Sabrina, The Teenage Witch"],
        answer:0,
        
    },
    {   question:"In what year did the Salem Witch Trials take place?",
        choices:["1692", "1776", "1806"],
        answer:"1692"
    }
    ];

const getQuestion = () => {
    let randomElement = Math.floor(Math.random() * myQuestions.length);
    
    let currentQuestion = myQuestions.splice(randomElement, 1)
    console.log("currentQuestion:", currentQuestion);
    console.log("currentQuestion:", currentQuestion[0])
    console.log(randomElement)

    const test=document.createElement('section');
    test.setAttribute('id','test');
    
    const questions = document.createElement('ul');
    //make sure we put under image, append under image
    document.body.appendChild(test);
    test.appendChild(questions);
    questions.innerHTML += `<h1 class="ques">${currentQuestion[0].question}</h1>`
        for(let i = 0; i<currentQuestion[0].choices.length; i++) {
            let li=document.createElement('li'); 
            li.innerHTML = `<h3 class="choice">,<br>${currentQuestion[0].choices[i]}</br></h3>`       
            questions.appendChild(li);
    } 
}


const keepScore = () => {
    let score = 0;
    const getInputValue = document.querySelectorAll("#compareAnswer");
    console.log(getInputValue);
        if (getInputValue === myQuestions.answer) {
            score++
            // currentQuestion++
        }else{ 
            // currentQuestion++
     }
console.log(score)
}




const endGame = () => {
    if (score === 5) {
    console.log("You are a powerful witch!")
    }
}

