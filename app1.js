/////EVENT LISTENERS/////


document.addEventListener("DOMContentLoaded", () => {
    //This hides the submit button on the "welcome page"
    const hideButton = document.querySelector(".button-container")
    hideButton.style.display = "none";

    // This is the event listener for my enter the game button, once you
    // click then the start function runs, thus doing the getQuestion function
    const enterIfYouDare = document.querySelector("#btn");
    enterIfYouDare.addEventListener("click", () => {
        // I am making the start button disappear when you click
        // by setting the style display to none, also doing the same with my h1.
        enterIfYouDare.style.display = "none";
        const h1 = document.querySelector("h1");
        h1.style.display = "none";
        getQuestion();
        const showButton = document.querySelector(".button-container")
        showButton.style.display = "inline"
    });

    // This is where we get the user data with the event listener on the submit
    // button. I was trying to get the submit button to take away 
    // the currentQuestion. I have not figured that out yet. 
    const submitButton = document.querySelector("#button")
    submitButton.addEventListener("click", () => {
        //This removes the current questions and retrieves a new one. 
        test.remove();
        getQuestion();
        // This clears the textfield after I click the submit button
        myInput.value = "";
        checkQuestion();
        checkWinner();

    })

  
});

//ARRAY OF OBJECTS
const myQuestions = [
    {
        question: "What TV show statue lives here?",
        choices: ["Bewitched", "Elvira", "Sabrina, The Teenage Witch"],
        answer: "Bewitched",

    },
    {
        question: "In what year did the Salem Witch Trials take place?",
        choices: ["1692", "1776", "1806"],
        answer: "1692",
    },
    {
        question: "Which accused person was pressed to death for refusing to answer the court's questions?",
        choices: ["Giles Corey", "Tituba", "Samuel Wardwell"],
        answer: "Giles Corey",
    },

    {
        question: "How many convicted witches were hanged?",
        choices: ["19", "107", "45", "20"],
        answer: "19",
    },

    {
        question: "Members of which Salem Village family did much of the accusing?",
        choices: ["Porter", "Putnam", "Ryan"],
        answer: "Putnam",
    },

    {
        question: " Most of the accused in the Salem Witch Trials lived in what present day town?",
        choices: ["Peabody", "Topsfield", "Danvers", "Beverly"],
        answer: "Peabody",
    },
    {
        question: "Samuel Skelton acted as which important figure for Salem ?",
        choices: ["Pastor for the first church", "First appointed governor", "Witch trials judge"],
        answer: "Pastor for the first church",
    },
    ];

//// VARIABLES /////

let score = 0
let newArr = []
let askedQuestion=0 
let totalQuestion=6
let winningScore = 6


/////FUNCTIONS/////




const getQuestion = () => {
    // Making the function choose a random question, then using splice to 
    // take used question from the array. 
    let randomElement = Math.floor(Math.random() * myQuestions.length);
    let currentQuestion = myQuestions.splice(randomElement, 1)
    const userInput = document.querySelector("#myInput")
    userInput.setAttribute('answer', currentQuestion[0].answer);
    newArr.push(currentQuestion[0].answer)
    // I am creating the "test" for each question. 
    const test = document.createElement('section');
    test.setAttribute('id', 'test');
    // Taking the section I created with the id of "test" and appending it to the body
    document.body.appendChild(test);
    const questions = document.createElement('ul');
    // console.log(questions) 
    // Taking the ul "questions" that I created and appended it to
    // the section I created with the id of  "test"
    test.appendChild(questions);
    // I am changing the innerHTML to the currentQuestion that I created.
    // Because we are slicing out the random element, we can loop the the currentQuestion at index 0, and then
    // use dot notation to get to the current questions, questions.
    questions.innerHTML += `<div><h1 class="ques">${currentQuestion[0].question}</h1><div><h1>current score = ${score}</h1></div></div>`
    for (let i = 0; i < currentQuestion[0].choices.length; i++) {
        let newChoices = currentQuestion[0].choices[i]
        let newArray = newChoices.split('')
        // console.log(newArray)
        let finalArray = newArray.join('')
        let li = document.createElement('li');
        li.innerHTML = `<h3 class="option"> ${finalArray}</h3>`
        questions.appendChild(li);

    }

}

const getInputValue = () => {
    // This is where I am getting the user input from my textfield box
    const userInput = document.querySelector("#myInput").value;
    let currentAnswer = (document.querySelector("#myInput").getAttribute("answer"))
    // Tracking the score by comparing the user's input to the current answer.
    if (currentAnswer === userInput) {
        score++  
        console.log("correct")
    } 
    
}

const checkQuestion = () => {
    askedQuestion++
    if(askedQuestion >= totalQuestion) {
        test.remove();
        let gameOver = document.querySelector("#game-over")
        gameOver.innerHTML = `<h3 class="game-over"> Game Over!</h3>`
    }
}
const checkWinner = () => {
    if(score >= winningScore) {
        console.log(score)
        let result = document.querySelector("#result")
        result.innerHTML = `<h3 class="result"> You won!</h3>`
    }
}



