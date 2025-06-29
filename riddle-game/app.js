import  readlineSync from './riddles/classes/node_modules/readline-sync/lib/readline-sync.js';
import  player from './riddles/classes/Player.js';
import  riddle from './riddles/classes/Riddle.js';
import _import from './riddles/import.js';



let namePlayer=readlineSync.question("enter your name")
const person=new player(namePlayer)

for(let i =0;i<_import.length;i++){
    let starst=Date.now()
    let riddles=new riddle(_import[i])
    riddles.ask()
    person.recordTime(starst)
}
console.log(person);

console.log(person.showStatus());
 


















// const res= new riddle(_import[0])
// console.log(res);
// res.ask()


// console.log(_import);

// let val=new riddle(_import[0]);
// val.ask();


// const start=Date.now();

// console.log(start);

// const res=readlineSync.question('enter your name')

// const person=new player(res);



// person.recordTime(start)

// console.log(person);
// person.showStatus();
// console.log(person);