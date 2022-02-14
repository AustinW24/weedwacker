const holes = document.querySelectorAll(".hole");
const plants = document.querySelectorAll(".plant");
const start = document.querySelector(".start");
let timeUp = false;

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

//whack function

//countDown function

//randomImage function
