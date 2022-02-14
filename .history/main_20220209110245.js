const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector(".score");
const plants = document.querySelectorAll('.plant');
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max){
    return Math.round(Math.random() * (max-min) + min)
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if(hole === lastHole){
        return randomHole(holes)
    }
    lastHole = hole;
    return hole;

}

function startGame() {
    scoreBoard.textContent = 0;
    score = 0;
    
}
