import {player1KeyPressed, player2KeyPressed} from './keys.js'

let player1Pos = 0;
const player1DeltaPos = 2;
let player2Pos = 0;
const player2DeltaPos = 2;

function prePlayerPosChange() {
    // gets called every fps from run(), checks which keys have been recorded
    // calls a function to track player position and move it theoretically
    // then calls a function to move the player practically
    if (player1KeyPressed == "a") {
        player1Pos = playerPosChange(player1Pos, player1DeltaPos, 'up');
        movePlayer(player1, player1Pos);
    }
    else if (player1KeyPressed == "q") {
        player1Pos = playerPosChange(player1Pos, -player1DeltaPos, 'down');
        movePlayer(player1, player1Pos);
    }
    if (player2KeyPressed == "6") {
        player2Pos = playerPosChange(player2Pos, player2DeltaPos, 'up');
        movePlayer(player2, player2Pos);
    }
    else if (player2KeyPressed == "9") {
        player2Pos = playerPosChange(player2Pos, -player2DeltaPos, 'down');
        movePlayer(player2, player2Pos);
    }
}

function playerPosChange(playerxPos, playerxDeltaPos, direction) {
    // if the player is within screen boundaries, change tracked player position
    if (direction == 'up' && playerxPos <= 82 || direction == 'down' && playerxPos >= 0) {
        playerxPos += playerxDeltaPos;
    }
    return playerxPos;
}

function movePlayer(playerx, playerxPos) {
    // based on the tracked player position, practically move the player using css
    playerx.style.top = `${playerxPos}%`;
}

export{ prePlayerPosChange, player1Pos, player2Pos }