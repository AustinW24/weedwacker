const holes = document.querySelectorAll(".hole");
const plants = document.querySelectorAll(".plant");
const start = document.querySelector(".start");

function randomTime(min, max) {
   return Math.floor(Math.random() * (max-min)) + min;
}

function randomHole(holes){
    let idx = randomTime(0, holes.length-1);
    return holes[idx];
}

function peek() {
    
}
