                /////EVENT LISTENERS/////


document.addEventListener("DOMContentLoaded", () => {
    // This is the event listener for my enter the game button, once you
    // click then the start function runs, thus doing the getQuestion function
    const enterIfYouDare = document.querySelector("#btn");
    enterIfYouDare.addEventListener("click", ()=> {
        // I am making the start button disappear when you click
        // by setting the style display to none, also doing the same with my h1.
        enterIfYouDare.style.display= "none";
        const h1 = document.querySelector("h1");
        h1.style.display="none";
        getQuestion();
    });
    
    // This is the event listener for my next button, it grabs a
    // new question every time it is clicked. 
    const nextButton = document.querySelector("#next-btn");
    nextButton.addEventListener("click", () => {
        const test =document.querySelector("#test");
        test.remove();
        getQuestion();
        console.log("#test", test)  
    });

    // This is where we get the user data with the event listener on the submit
    // button. I was trying to get the submit button to take away 
    // the currentQuestion. I have not figured that out yet. 
    const submitButton = document.querySelector("#button")
    submitButton.addEventListener("click", () => {
        getInputValue();
        // This clears the textfield after I click the submit button
        myInput.value="";
    })          
}
);

                /////VARIABLES/////
// variable to keep score of the game
let score=0;
// variable to be able to use currentQuestion in more the one function 
let currentQuestion 
//  variable to keep track of how many questions we asked, to keep track of the game and how to end it 
let totalQuestion 
//  variable used to generate  random question in they array of objects, and then splice out used quesiton
let randomElement

let questionAsk


                /////FUNCTIONS/////

// const start = () => {    
//     getQuestion();   
// }

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
    // currentQuestion = myQuestions.join('');
    console.log("currentQuestion:", currentQuestion);
    console.log("currentQuestion:", currentQuestion[0])
    // console.log(randomElement)
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
    // This is where I am getting the user input from my textfield box
    const userInput = document.querySelector("#myInput").value;
    // I am comparing what the user types into the textfield with what the
    // current question's answer is. Then I am adding to the score. This function
    // is connected to the submit button. 
    if (userInput === currentQuestion[0].answer){ 
        score++
        // const scoreMessage= document.createElement("p");
        // scoreMessage.innerHTML = `<p class ="right"> "You scored one point!</p>`
        // scoreMessage.style.display="flex";   
    } 
    if (score === 5) {
        const popUp = document.createElement("div");
        popUp.setAttribute('id', 'popUp');
        document.body.appendChild(popUp);
        const message= document.createElement("p");
        message.innerHTML = `<p class = "win">"You got all the questions right! You are a powerful witch!</p>`
        popUp.appendChild(message);
        popUp.style.display="flex";
        test.remove();    
    }  
    console.log(score)    
} 







