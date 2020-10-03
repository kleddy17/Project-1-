                /////EVENT LISTENERS/////


document.addEventListener("DOMContentLoaded", () => {
    // 
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
         
    });

    const submitButton = document.querySelector("#button")
    submitButton.addEventListener("click", () => {
        const section = document.querySelectorAll("section")
        section.style.display="none";
       getInputValue();
       endGame();
    })          
}
);

                /////VARIABLES/////

let score=0;
let currentQuestion 
let questionAsk 
let totalQuestion 
let rightAnswer
let randomElement



                /////FUNCTIONS/////

const start = () => {    
    getQuestion();   
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
    randomElement = Math.floor(Math.random() * myQuestions.length);
    currentQuestion = myQuestions.splice(randomElement, 1)
   
    console.log("currentQuestion:", currentQuestion);
    console.log("currentQuestion:", currentQuestion[0])
    console.log(randomElement)
    // I am creating the "test" for each question. 
    const test=document.createElement('section');
    test.setAttribute('id','test');
    const questions = document.createElement('ul');
    // Taking the section I created with the id of "test" and appending it to the body
    document.body.appendChild(test);
     // Taking the ul "questions" that I created and appended it to
    // the section I created with the id of  "test"
    test.appendChild(questions);
    // I am changing the innerHTML to the currentQuestion that I created.
    questions.innerHTML += `<h1 class="ques">${currentQuestion[0].question}</h1>`
    for(let i = 0; i<currentQuestion[0].choices.length; i++) {
        let li=document.createElement('li');
        li.innerHTML = `<h3 class="option">, <br>${currentQuestion[0].choices[i]}</br></h3>`
        questions.appendChild(li);
    }
 
}
  
const getInputValue = () => {
    const userInput = document.querySelector("#myInput").value;
    if (userInput === currentQuestion[0].answer){ 
        score++
        questionAsk++
    console.log ("Right")
    } else {
    console.log("wrong")
    }   
    console.log(score++) 
} 

const endGame = () => {
    if (score === 5) {
        console.log("You are a powerful witch!")
    }
}

// const test = () => {
//     document.querySelectorAll("#test")
//      while(test.firstChild){
//         test.removeChild(test.firstchild)

// }
// }


