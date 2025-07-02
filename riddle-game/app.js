/**
 * Main script that runs the riddle game.
 * - Asks the user for their name.
 * - Loads riddles from an external source.
 * - Times each riddle solving attempt.
 * - Records results and shows the player's average time.
 */

import readlineSync from './node_modules/readline-sync/lib/readline-sync.js';
import player from './classes/Player.js';
import riddle from './classes/Riddle.js';
import _import from './riddles/import.js';

let namePlayer = readlineSync.question("enter your name");
const person = new player(namePlayer);

for (let i = 0; i < _import.length; i++) {
    let starst = Date.now();
    let riddles = new riddle(_import[i]);
    riddles.ask();
    person.recordTime(starst);
}

console.log(person);
console.log(person.showStatus());
