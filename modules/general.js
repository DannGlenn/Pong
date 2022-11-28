import { ballPosChange } from './ball.js'
import { prePlayerPosChange } from './player.js'

let score = [0, 0]
const p1Score = document.getElementById("p1Score");
const p2Score = document.getElementById("p2Score");
let run;
let fps = 40
let gameStarted = false;
const buttons = document.querySelectorAll('button')
const controlls = document.getElementById("ctrls")

document.addEventListener('DOMContentLoaded', loadScore)
buttons[0].addEventListener('click', fastMode)
buttons[1].addEventListener('click', resetScore)

function resetScore() {
    // clears localStorage and reverts score back to [0, 0]
    localStorage.clear();
    score = [0, 0]
    p2Score.innerHTML = score[1]
    p1Score.innerHTML = score[0]
    event.target.blur()
}

function fastMode() {
    // change fps from 40 to 30 and vise versa
    const targetButton = event.target
    targetButton.blur()
    if (fps == 40) {
        targetButton.setAttribute("class", "btn btn-danger");
        return fps = 30
    }
    if (fps == 30) {
        targetButton.setAttribute("class", "btn btn-warning");
        return fps = 40
    }
}

function loadScore() {
    // runs on page load, load score from localStorage if exists, otherwise set score to [0, 0]
    if (JSON.parse(localStorage.getItem("score")) === null) {
        score = [0, 0]
    }
    else {
        score = JSON.parse(localStorage.getItem("score"));
    }
    p2Score.innerHTML = score[1]
    p1Score.innerHTML = score[0]
    controlls.classList.add('fadeinactive')
}

function pauseResume() {
    // initiates the game, goes fullscreen, and calls runGame() every fps
    //  pauses the game, exits fullscreen, and stops calling runGame()
    if (gameStarted == false) {
        document.documentElement.requestFullscreen();
        controlls.classList.replace('fadeinactive', 'fadeoutactive')
        run = setInterval(runGame, fps);
    } else {
        document.exitFullscreen();
        controlls.classList.replace('fadeoutactive', 'fadeinactive')
        clearInterval(run);
    }
    gameStarted == true ? gameStarted = false : gameStarted = true;
}

function runGame() {
    // the main driving factor of the game, loops constantly while game runs
    ballPosChange();
    prePlayerPosChange();
}

export { pauseResume, score };