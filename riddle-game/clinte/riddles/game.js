/**
 * Main script that runs the riddle game.
 * - Asks the user for their name.
 * - Loads riddles from an external source.
 * - Times each riddle solving attempt.
 * - Records results and shows the player's average time.
 */
// const pathRiddle = '../DB/RiddlesDB.txt';
// const pathPlayer = '../DB/PlayersDB.txt';
const pathcreateRiddle = 'http://localhost:3000/create-ridlle'
const fetchPlayer = 'http://localhost:3000/creat-palyer'
const pathDeleteRiddle='http://localhost:3000/delete-riddle/'
const pathUpdateRiddle='http://localhost:3000/update-riddle/'
import readlineSync from 'readline-sync';
import player from '../classes/Player.js';
import riddle from '../classes/Riddle.js';
import { createAllserves, updateRiddleServer, deleteRiddleServer, creatPlayer, readRiddleServer, creatRiddle } from './CRUD.js'




let person
let riddles
export async function startGame() {
  let namePlayer = readlineSync.question("enter your name: ");
  person = new player(namePlayer);
  const data = await readRiddleServer()
  for (let i = 0; i < data.length; i++) {
    let starst = Date.now();
    riddles = new riddle(data[i]);
    riddles.ask();
    person.recordTime(starst);
    person.updatAvg()
  }
  console.log(person)
  await createAllserves(fetchPlayer, person);
  // console.log(person);
  // console.log(person.showStatus());
}


async function crudMenu() {
  console.log("\n--- CRUD Menu ---");
  console.log("1. Read Riddles");
  console.log("2. Create Riddle");
  console.log("3. Delete Riddle");
  console.log("4. Update Riddle");
  console.log("5. Back to Main Menu");

  const choice = readlineSync.question("Enter option number: ");

  switch (choice) {
    case '1':
      console.log(await readRiddleServer());//read riddel server
      break;
    case '2':
      const obj =  creatRiddle();
      await createAllserves(pathcreateRiddle, obj);
      break;
    case '3':
      await deleteRiddleServer(pathDeleteRiddle);
      break;
    case '4':
      await updateRiddleServer(pathUpdateRiddle);
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
  console.log("Choose an option: ");
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