const holes = document.querySelectorAll(".hole");
const plants = document.querySelectorAll(".plant");
const start = document.querySelector(".start");
const timer = document.querySelector(".timer");
const currentScore = document.querySelector(".score");
let timeUp = false;
let score = 0;

function randomTime(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomHole(holes) {
    //generate random idx
    let idx = randomTime(0, holes.length - 1);
    return holes[idx];
}

function peek() {
    //hole
    let currentHole = randomHole(holes);
    //time
    let time = randomTime(500, 1000);
    //add a classlist of UP to hole
    currentHole.classList.add("up");
    setTimeout(() => {
        if (!timeUp) {
            peek();
        }
    }, time)
}

//startGame function
function startGame() {
    score = 0;
    timeUp = false;
    currentScore.textContent(`Score: ${score}`);
    peek();
    let timeLeft = setInterval( countDown,10000)
}

//whack function
function whack(e) {
    if(e.isTrusted
}

//countDown function

//randomImage function
