let startButton = document.querySelector(".start-button")
let timerEl = document.querySelector(".timer-numbers")
let answerButton1 = document.querySelector("#answer-btn")
let answerButton2 = document.querySelector("#answer-btn2")
let answerButton3 = document.querySelector("#answer-btn3")
let answerButton4 = document.querySelector("#answer-btn4")
let answerButton0 = document.querySelector("#answerbtn")
let totalScore = document.querySelector(".score-count")
let buttons = document.querySelectorAll(".answerbtn")

let containerTwo = document.querySelector("#question2")
let containerThree = document.querySelector("#question3")
let containerFour = document.querySelector("#question4")

let userScore = document.querySelector(".score")
let usersName = document.querySelector(".name")

let timer;
let score = 0;
let userInput;
let endCon = 0
let timerCount = 40

// create divs for each question
let body = document.body
let questionOne = document.createElement("div")
let questionTwo = document.createElement("div")
let questionThree = document.createElement("div")
let questionFour = document.createElement("div")
let leaderboard = document.createElement("div")

let DnF = document.createElement("h3")
let correctMessage = document.createElement("h3")
correctMessage.textContent = "Correct!"
let wrongMessage = document.createElement("h3")
wrongMessage.textContent = "Wrong!"
let scoreCount = document.createElement("span")
scoreCount.setAttribute("class", "score-count")
wrongMessage.setAttribute("class", "wrong-message")
wrongMessage.setAttribute("style", "color: #FF0000")
correctMessage.setAttribute("class", "correct-message")
correctMessage.setAttribute("style", "color: #00FF00")

// create ordered lists for each question
let seriesOne = document.createElement("div")
let seriesTwo = document.createElement("div")
let seriesThree = document.createElement("div")
let seriesFour = document.createElement("div")
let leaderboardScores = document.createElement("ol")

// create 4 answers for each question
let li1a = document.createElement("button")
let li1b = document.createElement("button")
let li1c = document.createElement("button")
let li1d = document.createElement("button")

let li2a = document.createElement("button")
let li2b = document.createElement("button")
let li2c = document.createElement("button")
let li2d = document.createElement("button")

let li3a = document.createElement("button")
let li3b = document.createElement("button")
let li3c = document.createElement("button")
let li3d = document.createElement("button")

let li4a = document.createElement("button")
let li4b = document.createElement("button")
let li4c = document.createElement("button")
let li4d = document.createElement("button")

// add id to list items
li1a.setAttribute("id", "answerbtn")
li1a.setAttribute("class", "answerbtn1")
li1b.setAttribute("id", "answerbtn")
li1b.setAttribute("class", "answerbtn2")
li1c.setAttribute("id", "answerbtn")
li1c.setAttribute("class", "answerbtn3")
li1d.setAttribute("id", "answerbtn")
li1d.setAttribute("class", "answerbtn4")

li2a.setAttribute("id", "answerbtn")
li2b.setAttribute("id", "answerbtn")
li2c.setAttribute("id", "answerbtn")
li2d.setAttribute("id", "answerbtn")

li3a.setAttribute("id", "answerbtn")
li3b.setAttribute("id", "answerbtn")
li3c.setAttribute("id", "answerbtn")
li3d.setAttribute("id", "answerbtn")

li4a.setAttribute("id", "answerbtn")
li4b.setAttribute("id", "answerbtn")
li4c.setAttribute("id", "answerbtn")
li4d.setAttribute("id", "answerbtn")

// add id to divs
questionOne.setAttribute("id", "question1")
questionTwo.setAttribute("id", "question2")
questionThree.setAttribute("id", "question3")
questionFour.setAttribute("id", "question4")

seriesOne.setAttribute("id", "answer-btn")
seriesTwo.setAttribute("id", "answer-btn2")
seriesThree.setAttribute("id", "answer-btn3")
seriesFour.setAttribute("id", "answer-btn4")

// create each question
questionOne.textContent = "What does '&&' mean if it is placed between two expressions?"
questionTwo.textContent = "Which of the following type of letiable is visible everywhere in Javascript code?"
questionThree.textContent = "Which of the following function of array object places new elements at the end?"
questionFour.textContent = "Which of the following function of Number object returns the number's value?"

// create multiple choice answers for users to choose from
li1a.textContent = "a) Only one of the expressions needs to be true"
li1b.textContent = "b) Both of the expressions need to be true"
li1c.textContent = "c) One expression needs to be greater than the other"
li1d.textContent = "d) None of the above."

li2a.textContent = "a) local letiable"
li2b.textContent = "b) global letiable"
li2c.textContent = "c) Both of the above."
li2d.textContent = "d) None of the above."

li3a.textContent = "a) pop()"
li3b.textContent = "b) join()"
li3c.textContent = "c) push()"
li3d.textContent = "d) concat()"

li4a.textContent = "a) valueOf()"
li4b.textContent = "b) toLocateString()"
li4c.textContent = "c) toString()"
li4d.textContent = "d) toPrecision()"

// append questions to body
body.appendChild(questionOne)
body.appendChild(questionTwo)
body.appendChild(questionThree)
body.appendChild(questionFour)

// append list elements to questions
questionOne.appendChild(seriesOne)
questionTwo.appendChild(seriesTwo)
questionThree.appendChild(seriesThree)
questionFour.appendChild(seriesFour)

// append list items to list element
seriesOne.appendChild(li1a)
seriesOne.appendChild(li1b)
seriesOne.appendChild(li1c)
seriesOne.appendChild(li1d)

seriesTwo.appendChild(li2a)
seriesTwo.appendChild(li2b)
seriesTwo.appendChild(li2c)
seriesTwo.appendChild(li2d)

seriesThree.appendChild(li3a)
seriesThree.appendChild(li3b)
seriesThree.appendChild(li3c)
seriesThree.appendChild(li3d)

seriesFour.appendChild(li4a)
seriesFour.appendChild(li4b)
seriesFour.appendChild(li4c)
seriesFour.appendChild(li4d)

body.appendChild(correctMessage)
body.appendChild(wrongMessage)
body.appendChild(scoreCount)

// add styling to listed items
questionOne.setAttribute("style", "padding: 30px; font-weight: bolder; font-size: 30px")
seriesOne.setAttribute("style", "font-weight: normal; font-size: 20px")
li1a.setAttribute("style", "color:white; background: #800080; padding: 0.5rem; margin-bottom: 0.2rem; margin-right: 90rem; border-radius: 10px")
li1b.setAttribute("style", "color:white; background: #800080; padding: 0.5rem; margin-bottom: 0.2rem; margin-right: 90rem; border-radius: 10px")
li1c.setAttribute("style", "color:white; background: #800080; padding: 0.5rem; margin-bottom: 0.2rem; margin-right: 90rem; border-radius: 10px")
li1d.setAttribute("style", "color:white; background: #800080; padding: 0.5rem; margin-bottom: 0.2rem; margin-right: 90rem; border-radius: 10px")
li1b.setAttribute("data-state", "true")
li2b.setAttribute("data-state", "true")
li3c.setAttribute("data-state", "true")
li4a.setAttribute("data-state", "true")

questionTwo.setAttribute("style", "padding: 30px; font-weight: bolder; font-size: 30px")
seriesTwo.setAttribute("style", "font-weight: normal; font-size: 20px")
li2a.setAttribute("style", "color:white; background: #800080; padding: 0.5rem; margin-bottom: 0.2rem; margin-right: 90rem; border-radius: 10px")
li2b.setAttribute("style", "color:white; background: #800080; padding: 0.5rem; margin-bottom: 0.2rem; margin-right: 90rem; border-radius: 10px")
li2c.setAttribute("style", "color:white; background: #800080; padding: 0.5rem; margin-bottom: 0.2rem; margin-right: 90rem; border-radius: 10px")
li2d.setAttribute("style", "color:white; background: #800080; padding: 0.5rem; margin-bottom: 0.2rem; margin-right: 90rem; border-radius: 10px")

questionThree.setAttribute("style", "padding: 30px; font-weight: bolder; font-size: 30px")
seriesThree.setAttribute("style", "font-weight: normal; font-size: 20px")
li3a.setAttribute("style", "color:white; background: #800080; padding: 0.5rem; margin-bottom: 0.2rem; margin-right: 90rem; border-radius: 10px")
li3b.setAttribute("style", "color:white; background: #800080; padding: 0.5rem; margin-bottom: 0.2rem; margin-right: 90rem; border-radius: 10px")
li3c.setAttribute("style", "color:white; background: #800080; padding: 0.5rem; margin-bottom: 0.2rem; margin-right: 90rem; border-radius: 10px")
li3d.setAttribute("style", "color:white; background: #800080; padding: 0.5rem; margin-bottom: 0.2rem; margin-right: 90rem; border-radius: 10px")

questionFour.setAttribute("style", "padding: 30px; font-weight: bolder; font-size: 30px")
seriesFour.setAttribute("style", "font-weight: normal; font-size: 20px")
li4a.setAttribute("style", "color:white; background: #800080; padding: 0.5rem; margin-bottom: 0.2rem; margin-right: 90rem; border-radius: 10px")
li4b.setAttribute("style", "color:white; background: #800080; padding: 0.5rem; margin-bottom: 0.2rem; margin-right: 90rem; border-radius: 10px")
li4c.setAttribute("style", "color:white; background: #800080; padding: 0.5rem; margin-bottom: 0.2rem; margin-right: 90rem; border-radius: 10px")
li4d.setAttribute("style", "color:white; background: #800080; padding: 0.5rem; margin-bottom: 0.2rem; margin-right: 90rem; border-radius: 10px")

// hide all questions until game starts
document.querySelector("#question1").style.display = "none"
document.querySelector("#question2").style.display = "none"
document.querySelector("#question3").style.display = "none"
document.querySelector("#question4").style.display = "none"

document.querySelector(".correct-message").style.display = "none"
document.querySelector(".wrong-message").style.display = "none"

document.querySelector("#container").style.display = "none"

// when start button is pressed startGme function is called
function startGame() {
    score = 0
    document.querySelector(".start-intro").style.display = "none"
    cycleQuestions()
    startTimer()
}

function cycleQuestions() {
    document.querySelector("#question1").style.display = "contents"
    document.querySelector("#question2").style.display = "none"
    document.querySelector("#question3").style.display = "none"
    document.querySelector("#question4").style.display = "none"
    checkAnswers();

    document.getElementById("answer-btn").onclick = function() {change2()};
    function change2() {
        document.querySelector("#question1").style.display = "none"
        document.querySelector("#question2").style.display = "contents"
        document.querySelector("#question3").style.display = "none"
        document.querySelector("#question4").style.display = "none"
        checkAnswers();
    }


    document.getElementById("answer-btn2").onclick = function() {change3()};
    function change3() {
        document.querySelector("#question1").style.display = "none"
        document.querySelector("#question2").style.display = "none"
        document.querySelector("#question3").style.display = "contents"
        document.querySelector("#question4").style.display = "none"
        checkAnswers();
    }


    document.getElementById("answer-btn3").onclick = function() {change4()};
    function change4() {
        document.querySelector("#question1").style.display = "none"
        document.querySelector("#question2").style.display = "none"
        document.querySelector("#question3").style.display = "none"
        document.querySelector("#question4").style.display = "contents"
        endCon++
        checkAnswers();
    }

}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount >= 0) {
            // use endCon to define end condition (all questions answered)
            if (endCon && timerCount > 0) {
                clearInterval(timer);
                timesUp();
                setName();
            }
        }
        if (timerCount === 0 || timerCount < 0) {
            clearInterval(timer);
            timesUp();
            setName();
        }
    }, 1000); return;
}



function checkAnswers() {
    document.querySelector(".correct-message").style.display = "none"
    document.querySelector(".wrong-message").style.display = "none"
    let containerOne = document.querySelector("#question1")
    containerOne.addEventListener("click", function(event) {
        let li1b = event.target;
        if (li1b.matches("button")) {
            let state = li1b.getAttribute("data-state")
            if (state === "true") {
                Correct()
            } else {
                Wrong()
            }
        } 
    })
    document.querySelector(".correct-message").style.display = "none"
    document.querySelector(".wrong-message").style.display = "none"
    let containerTwo = document.querySelector("#question2")
    containerTwo.addEventListener("click", function(event) {
        let li2b = event.target;
        if (li2b.matches("button")) {
            let state2 = li2b.getAttribute("data-state")
            if (state2 === "true") {
                Correct()
            } else {
                Wrong()
            }
        } 
    })
    document.querySelector(".correct-message").style.display = "none"
    document.querySelector(".wrong-message").style.display = "none"
    let containerThree = document.querySelector("#question3")
    containerThree.addEventListener("click", function(event) {
        let li3c = event.target;
        if (li3c.matches("button")) {
            let state3 = li3c.getAttribute("data-state")
            if (state3 === "true") {
                Correct()
            } else {
                Wrong()
            } 
        }
    })
    document.querySelector(".correct-message").style.display = "none"
    document.querySelector(".wrong-message").style.display = "none"
    let containerFour = document.querySelector("#question4")
    containerFour.addEventListener("click", function(event) {
        let li4a = event.target;
        if (li4a.matches("button")) {
            let state4 = li4a.getAttribute("data-state")
            if (state4 === "true") {
                Correct()
            } else {
                Wrong()
            }
        } 
    })


}
function Correct(){
    document.querySelector(".correct-message").style.display = "contents"
    document.querySelector(".wrong-message").style.display = "none"
    console.log(score + 10)
}

function Wrong() {
    document.querySelector(".correct-message").style.display = "none"
    document.querySelector(".wrong-message").style.display = "contents"
    score -= 15
    timerCount = timerCount -= 10
    timerEl.textContent = timerCount
}

function setScore() {
    scoreCount.textContent = score
    localStorage.setItem("scoreCount", score)
}

function getScore() {
    let storedScore = localStorage.getItem("scoreCount")
    if (storedScore === null) {
        score = 0
    } else {
        score = storedScore
    }
}

function timesUp() {
    document.querySelector("#question1").style.display = "none"
    document.querySelector("#question2").style.display = "none"
    document.querySelector("#question3").style.display = "none"
    document.querySelector("#question4").style.display = "none"
    document.querySelector(".correct-message").style.display = "none"
    document.querySelector(".wrong-message").style.display = "none"
}

function setName() {
    let response = window.prompt("Enter Nickname  Below!")
    if (response !== null) {
        localStorage.setItem("name", response);
        gameLeaderBoard();
    } else {
        location.reload();
    } 
} 

function leaderboardArray() {
    let response = localStorage.getItem("name")
    let storedScore = localStorage.getItem("scoreCount")

    if (!response || !storedScore) {
        return;
    }
    document.getElementById("nameName").innerHTML = response
    document.getElementById("scoreScore").innerHTML = storedScore
}

function gameLeaderBoard() {
    leaderboardArray();
    document.querySelector(".highscores-link").style.display = "none"
    document.querySelector("#container").style.display = "contents"
}


startButton.addEventListener("click", startGame)
