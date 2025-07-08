/**
 * Main script that runs the riddle game.
 * - Asks the user for their name.
 * - Loads riddles from an external source.
 * - Times each riddle solving attempt.
 * - Records results and shows the player's average time.
 */
const pathRiddle='../DB/RiddlesDB.txt';
const pathPlayer='../DB/PlayersDB.txt';
import readlineSync from '../node_modules/readline-sync/lib/readline-sync.js';
import player from '../classes/Player.js';
import riddle from '../classes/Riddle.js';
import _import from '../riddles/import.js';
import {creatRiddle,creatPlayer,updateRiddle,deleteRiddle ,readRiddle,createAll} from './CRUD.js'


 let person
 let riddles
export async function startGame() {
    let namePlayer = readlineSync.question("enter your name");
    person = new player(namePlayer);
    const data= await readRiddle(pathRiddle)
    const arr=JSON.parse(data)
    for (let i = 0; i < arr.length; i++) {
        let starst = Date.now();
        riddles = new riddle(arr[i]);
        riddles.ask();
        person.recordTime(starst);
    }
    await createAll(pathPlayer,()=> creatPlayer(person));
    // console.log(person);
    // console.log(person.showStatus());
}


async function crudMenu() {
  console.log("\n--- CRUD Menu ---");
  console.log("1. Create Player");
  console.log("2. Create Riddle");
  console.log("3. Delete Riddle");
  console.log("4. Update Riddle");
  console.log("5. Back to Main Menu");

  const choice = readlineSync.question("Enter option number: ");

  switch (choice) {
    case '1':
    await createAll(pathPlayer,()=> creatPlayer(pl));
      break;
    case '2':
      await createAll(pathRiddle,creatRiddle);
      break;
    case '3':
     await deleteRiddle(pathRiddle);
      break;
    case '4':
     await updateRiddle(pathRiddle);
      break;
    case '5':
      mainMenu();
      return;
    default:
      console.log("Invalid choice!");
  }

  crudMenu(); 
}

function exit() {
  console.log("👋 Goodbye!");
  process.exit(0);
}


function mainMenu() {
  console.log("Choose an option:");
  console.log("1. Game");
  console.log("2. CRUD");
  console.log("3. Exit");

  const choice = readlineSync.question("Enter option number: ");

  switch (choice) {
    case '1':
      startGame();
      break;
    case '2':
      crudMenu();
      break;
    case '3':
      exit();
      break;
    default:
      console.log("Invalid choice!");
      mainMenu(); // Go back to menu
  }
}

mainMenu();