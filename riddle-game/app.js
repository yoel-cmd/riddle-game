import  readlineSync from './riddles/classes/node_modules/readline-sync/lib/readline-sync.js';
import  player from './riddles/classes/Player.js';
import  riddle from './riddles/classes/Riddle.js';
import _import from './riddles/import.js';


// console.log(_import);

let val=new riddle(_import[0]);
val.ask();


