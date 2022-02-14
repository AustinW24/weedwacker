const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const plants = document.querySelectorAll('.plant');
const start = document.querySelector('.start');
const timer = document.querySelector('.timer');
let lastHole;
let timeUp = false;
let score = 0;
let currentTime = 10;
