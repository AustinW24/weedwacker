const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const plants = document.querySelectorAll('.plant');
const start = document.querySelector('.start');
const timer = document.querySelector('.timer');
let lastHole;
let timeUp = false;
let score = 0;
let currentTime = 10;

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
        if (image < 6) {
            indvPlant.style.background = "url('/assets/happyflower.png') bottom center no-repeat"
            indvPlant.style.backgroundSize = "50%"
        } else {
            indvPlant.style.background = "url('/assets/evilweeds.png') bottom center no-repeat"
            indvPlant.style.backgroundSize = "50%"
        }
    })
}

function peep() {
    const time = randomTime(500, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) {
            peep();
            randomPicture();
        }
    }, time);
}

function startGame() {
    score = 0;
    currentTime = 10;
    scoreBoard.textContent = "Score: " + score;
    timeUp = false;
    if(!timeUp){
    }
    randomPicture();
    peep();
    setTimeout(() => timeUp = true, 10000)
}

function whack(e) {
    if (!e.isTrusted) return;
    this.parentNode.classList.remove('up');
    if (e.target.outerHTML.includes("happyflower")) {
        score -= 100
        scoreBoard.textContent = "Score: " + score;
    } else {
        score += 100
        scoreBoard.textContent = "Score: " + score;
    }
}

// function countDown() {
//     currentTime--;
//     timer.textContent = 'Time Left: ' + currentTime;

//     if (currentTime == 0) {
//         clearInterval(countDownTimerId);
//         alert(`GAME OVER! Your final score is ${score}!`)
//     }
// }
// let countDownTimerId = setInterval(countDown, 1000)


start.onclick = () => {
    let el = setInterval(() => {
        currentTime--;
        timer.textContent = 'Time Left: ' + currentTime;

        if (currentTime == 0) {
            clearInterval(el);
            alert(`GAME OVER! Your final score is ${score}!`)
        }
    }, 1000)
}

plants.forEach(plant => plant.addEventListener('click', whack))
