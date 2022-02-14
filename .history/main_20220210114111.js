const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const plants = document.querySelectorAll('.plant');
const start = document.querySelector('.start');
let lastHole;
let timeUp = false;
let score = 0;
let images = [{
    title: "happyflower",
    path: "/assets/happyflower.png"
},
{
    title: "happyflower",
    path: "/assets/evilweeds.png"
}];

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
        return randomHole(holes)
    }
    lastHole = hole;
    return hole;
}

function randomPicture() {
    let image = Math.round(Math.random() * 11);
    plants.forEach(indvPlant => {
        indvPlant.style.background = "url('/assets/happyflower.png') bottom center no-repeat"
        indvPlant.style.backgroundSize = "50%"
        })
    if (image < 6) {
        plants.forEach(indvPlant => {
        indvPlant.style.background = "url('/assets/happyflower.png') bottom center no-repeat"
        indvPlant.style.backgroundSize = "50%"
        })
    } else {
        plants.forEach(indvPlant => {
            indvPlant.style.background = "url('/assets/evilweeds.png') bottom center no-repeat"
            indvPlant.style.backgroundSize = "50%"

        })
    }
}

function peep() {
    const time = randomTime(400, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');

    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) {
            peep();
            randomPicture();
        }}, time);
}

function startGame() {
    score = 0;
    scoreBoard.textContent = "Score: " + score;
    timeUp = false;
    // randomPicture();
    peep();
    setTimeout(() => timeUp = true, 10000)
}

function whack(e) {
    if (!e.isTrusted) return;
    score += 100;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = "Score: " + score;
}


plants.forEach(plant => plant.addEventListener('click', whack))
