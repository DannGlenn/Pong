import {player1Pos, player2Pos} from './player.js'
import {reset} from './reset.js'
import {score} from './general.js'

let ballPosLeft = 50;
let ballPosTop = 10;
let ballDeltaLeft = 2;
let ballDeltaTop = 1;

function ballPosChange() {
    // gets called every fps from run(),
    // checks if ball is in the top-bottom boundaries, reverse its movement if not
    // move the ball by the set delta every iteration of run()
    ballPosLeft += ballDeltaLeft;
    ballPosTop += ballDeltaTop;
    // Makes Game over unattainable, for testing
    // ballDeltaLeft = ballPosLeft > 100 ? -ballDeltaLeft : ballDeltaLeft;
    // ballDeltaLeft = ballPosLeft < 0 ? -ballDeltaLeft : ballDeltaLeft;
    ballDeltaTop = ballPosTop > 95 || ballPosTop < 0 ? -ballDeltaTop : ballDeltaTop;
    ball.style.left = ballPosLeft + "%";
    ball.style.top = ballPosTop + "%";
    detectCollision();
}

function detectCollision() {
    // once the ball crossed the side threshold for either side,
    // rapidly fire checks to determine if it's height matches the relevent player
    // if the ball crossed the outer boundry, initiate gameover sequence
    if (ballPosLeft <= 5 && ballPosLeft >= 4) {
        if (ballPosTop >= player1Pos - 3 && ballPosTop <= player1Pos + 14) {
            ballDeltaLeft = -ballDeltaLeft
        }
    }
    if (ballPosLeft <= 97 && ballPosLeft >= 96) {
        if (ballPosTop >= player2Pos - 3 && ballPosTop <= player2Pos + 14) {
            ballDeltaLeft = -ballDeltaLeft
        }
    }
    if (ballPosLeft < -30) {
        score[1] += 1
        p2Score.innerHTML = score[1]
        ballDeltaLeft = 2
        reset()
    }
    if (ballPosLeft > 130) {
        score[0] += 1
        p1Score.innerHTML = score[0]
        ballDeltaLeft = -2
        reset()
    }
}

function resetBall(){
    ballDeltaTop = 1;
    ballPosLeft = 50;
    ballPosTop = 10;
}

export { ballPosChange, resetBall, ballPosTop, ballPosLeft };