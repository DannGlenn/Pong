import {setKey, clearKey} from './modules/keys.js';

// starting by listening for a keydown
addEventListener('keydown', setKey)
addEventListener('keyup', clearKey)

