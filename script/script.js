'use strict';

//inputs
const radioButtons = document.getElementsByName("radioButton");
const optionsContainer = document.getElementById("options-container")
const optionOne = document.getElementById("option-one");
const optionTwo = document.getElementById("option-two");
const optionThree = document.getElementById("option-three");
const optionFour = document.getElementById("option-four");
// question
const question = document.getElementById("question");
// submit button
const submit = document.getElementById("submit");
//outputs
const labelOne = document.getElementById("label-one");
const labelTwo = document.getElementById("label-two");
const labelThree = document.getElementById("label-three");
const labelFour = document.getElementById("label-four");

let score = 0;
let questionCounter = 1;

//functions
const init = () => {
    questionOne();
}

const questionOne = () => {
    question.innerText = "Which language runs in a web browser?";
    labelOne.innerText = "Java";
    labelTwo.innerText = "C";
    labelThree.innerText = "Python";
    labelFour.innerText = "JavaScript";
}

const questionTwo = () => {
    question.innerText = "What does CSS stand for?";
    labelOne.innerText = "Central Style Sheets";
    labelTwo.innerText = "Cascading Style Sheets";
    labelThree.innerText = "Cascading Simple Sheets";
    labelFour.innerText = "Cars SUVs Sailboats";
}

const questionThree = () => {
    question.innerText = "What does HTML stand for?";
    labelOne.innerText = "Hypertext Markup Language";
    labelTwo.innerText = "Hypertext Markdown Language";
    labelThree.innerText = "Hyperloop Machine Language";
    labelFour.innerText = "Helicopters Terminals Motorboats Lamborginis";
}

const questionFour = () => {
    question.innerText = "What year was JavaScript launched?";
    labelOne.innerText = "1996";
    labelTwo.innerText = "1995";
    labelThree.innerText = "1994";
    labelFour.innerText = "none of the above";
}

const checkAnswer = () => {
    const selectedAnswer = document.querySelector('input[name="radioButton"]:checked');

    if (selectedAnswer) {
        const answerValue = selectedAnswer.id;

        if (questionCounter === 1) {
            //counter updating and 2nd question call
            questionCounter++;
            questionTwo()
            if (answerValue === 'option-four') {
                score++;
            }
        } else if (questionCounter === 2) {
            //counter updating and 3rd question call
            questionCounter++;
            questionThree()
            if (answerValue === 'option-two') {
                score++;
            }
        } else if (questionCounter === 3) {
            //counter updating and 4th question call
            questionCounter++;
            questionFour()
            if (answerValue === 'option-one') {
                score++;
            }
        } else if (questionCounter === 4) {
            if (answerValue === 'option-four') {
                score++;
            }
            //displaying a message with score
            displayResult()
        } else {
            displayResult()
        }
    }
}

const displayResult = () => {
    question.innerText = `You answered  ${score}/4 questions correctly`;
    optionsContainer.classList.add("hide")
    submit.innerText = "Reload"
    submit.addEventListener("click", function () {
        //referred in google
        location.reload();
    });
}

//events
submit.addEventListener("click", checkAnswer);

//initial settings
init();
