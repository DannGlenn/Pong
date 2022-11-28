import {pauseResume, score} from './general.js'
import {resetKeys} from './keys.js'
import {resetBall, ballPosLeft, ballPosTop} from './ball.js'

// resets all parameters and records score in localStorage after gameover
function reset() {
    pauseResume()
    resetBall()
    resetKeys()
    ball.style.left = ballPosLeft + "%";
    ball.style.top = ballPosTop + "%";
    localStorage.setItem('score', JSON.stringify(score));
}

export {reset}