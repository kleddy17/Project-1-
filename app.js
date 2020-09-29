        // console.log("Welcome To Salem")
        //----NOTES && IDEAS----//

        // add event listener in the greet function?
        // when you click on the picture in the grid
        // a prompt shows up. 
        // use append/remove child?

        // how to set a timer for each round
        // game active






        //----EVENT LISTENERS----//

document.addEventListener("DOMContentLoaded", () => {
const enterIfYouDare = document.querySelector("#btn");
btn.addEventListener("click", start);
    }
  );



        //----VARIABLES----//
        // We need to keep score so I made 
        // these variables to store my values in.
let score = 0;
        // a variable for how many right answers the player gets
let rightAnswers = 0;
        // a variable for how many wrong answers the player gets
let wrongAnswers = 0;

        // let currentQuestion = myQuestions[i].question++;


        //---FUNCTIONS-----//
const start = () => {
        // if (rightAnwsers === 10 && wrongAnswers === false)
        //     alert("You're a winner!")
getQuestion()
}

        // I knew I had to make an array of objects so I could
        // easliy grab each property. 
const myQuestions = [
    {   question:"1. What TV show statue lives here?",
        choices:["Bewitched", "Elvira", "Sabrina, The Teenage Witch"],
        answer:1,
        //  imgSrc: https://i.pinimg.com/originals/6a/d0/8e/6ad08e68856775ddaaab44fc506e1bf7.jpg
    },
    {   question:"2. In what year did the Salem Witch Trials take place?",
        choices:["1692", "1776", "1806"],
        answer:"1692"
    }

    ];
        // Trying to make a keepScore function, thinking I could 
        // also keep track of my rightAnswers, then add score++?
        // Invoke this at the start()?
const keepScore = () => {
    for(let i =0; myQuestions.length; i++) {
        let rightAnswer = myQuestions[i].answer;
    
    }
    keepScore()
}
const getQuestion =  () =>{ 
        // making my radio buttons from myQuestions array
        // for loop to go through myQuestions array
    for(let i =0; myQuestions.length; i++) {
        // saying for every object in my question array
        // pick out the ones labeled question and write
        // it.
    let question = myQuestions[i].question;
    document.write(question);
        // going through the array of questions again and grabbing
        // the choices value
        // making a variable to store our choices, called options. 
    let options = myQuestions[i].choices;
        // Had to google why we used the <br>, its for style 
        // of the text. 
        // The HTML <br> element produces a line break in text 
    document.body.appendChild(document.createElement("br"));
        // Googled the rest of this. I have never used radio buttons
        // before so this is the only way I could get them to work. 
    const name = "radio" + i;
    for(const opt in options) {
    const radioEle = document.createElement("input");
        radioEle.type= "radio";
        radioEle.value = options[opt];
        radioEle.name = name;
    document.body.appendChild(radioEle);
    const label = document.createElement("Label");
          label.innerHTML = options[opt];
    document.body.appendChild(label);
    document.body.appendChild(document.createElement("br"));
        }
        document.body.appendChild(document.createElement("br"));  
      }
      }      


        
    


















    