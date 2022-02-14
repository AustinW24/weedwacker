const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const plants = document.querySelectorAll('.plant');
const start = document.querySelector('.start');
const timer = document.querySelector('.timer');
let lastHole;
let timeUp = false;
let score = 0;
let currentTime = 30;

function randomTime(min, max){
    return Math.round(Math.random() * (max - min) + min)
}

function randomHole(holes){
    let idx = Math.floor(Math.random() * holes.length);
    const currentHole = holes[idx];
    if(currentHole === lastHole){
        return randomHole(holes);
    }
    lastHole = currentHole;
    return currentHole;
}

function peek() {
    const time = randomTime(500, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if(!timeUp) {
            peep();
        }
    }, time)
}

function startGame() {

    currentTime = 30;
    scoreBoard.textContent = `Current Score: ${score}`;
    timeUp = false;
    
}
