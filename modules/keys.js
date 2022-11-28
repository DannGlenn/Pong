import {pauseResume } from './general.js'

const keys1 = ['a', 'q']
const keys2 = ['9', '6']
let player1KeyPressed;
let player2KeyPressed;
let simultaniousKeys1 = []
let simultaniousKeys2 = []

function setKey() {
    // if keydown is ''(spacebar) calls pauseResume() to initiate the game
    event.key == ' ' && pauseResume();
    // other relevent keys(player controlls - a, q, 6, 9), get recorded
    if (keys1.includes(event.key) && player1KeyPressed != event.key) {
        player1KeyPressed = event.key;
        simultaniousKeys1.push(event.key)
    }
    if (keys2.includes(event.key) && player2KeyPressed != event.key) {
        player2KeyPressed = event.key;
        simultaniousKeys2.push(event.key)
    }
}

function clearKey() {
    // when keyup on control keys, sets the active key as the 'before last key' if still held, or '' if not
    if (keys1.includes(event.key)) {
        if (event.key == simultaniousKeys1[1]) {
            simultaniousKeys1.pop()
        }
        else simultaniousKeys1.shift()
        player1KeyPressed = simultaniousKeys1[simultaniousKeys1.length - 1];
    }
    if (keys2.includes(event.key)) {
        if (event.key == simultaniousKeys2[1]) {
            simultaniousKeys2.pop()
        }
        else simultaniousKeys2.shift()
        player2KeyPressed = simultaniousKeys2[simultaniousKeys2.length - 1];
    }
}

// gets called from reset, to reset after gameover
function resetKeys(){
    player1KeyPressed = '';
    player2KeyPressed = '';
    simultaniousKeys1 = []
    simultaniousKeys2 = []
}

export { setKey, clearKey, player1KeyPressed, player2KeyPressed, resetKeys };