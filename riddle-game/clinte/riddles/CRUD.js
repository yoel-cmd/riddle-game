import { readFile, writeFile } from "node:fs/promises";
import readlineSync from 'readline-sync';

const pathRiddle = '../DB/RiddlesDB.txt';
const pathPlayer = '../DB/PlayersDB.txt';


export async function creatRiddle() {
    const nameRiddle = readlineSync.question('enter your name riddle: ')
    const Description = readlineSync.question('enter your riddle: ')
    const Answer = readlineSync.question('enter answer: ')
    const riddle = {
        name: nameRiddle,
        taskDescription: Description,
        corectAnswer: Answer
    }
    return riddle;
}


export async function creatPlayer(player) {
    return player;
}


export async function updateRiddle(path) {
    try {
        const data = await readFile(path, 'utf8')

        const arr = JSON.parse(data)
        const id = readlineSync.question("enrer id riddle: ")
        const type = readlineSync.question("enrer line to Change: ")
        const Change = readlineSync.question('enter Change: ')
        for (let index = 0; index < arr.length; index++) {
            if (arr[index].id == id) {
                arr[index][type] = Change;
                await writeFile(path, JSON.stringify(arr, null, 2))
                return 'Update'
            }
        }
        console.log("id not found");

    } catch (err) {
        console.error('err', err.message)
    }
}

export async function deleteRiddle(path) {
    try {
        const data = await readFile(path, 'utf8')
        const arr = JSON.parse(data)
        const id = readlineSync.question("enrer id riddle: ")
        for (let index = 0; index < arr.length; index++) {
            if (arr[index].id == id) {
                arr.splice(index, 1)
                break
            }
        }
        await writeFile(path, JSON.stringify(arr, null, 2))
        return 'delete'
    } catch (err) {
        console.error('err', err.message)
    }
}

// export async function readRiddle(path) {
//     try {
//         const data = await readFile(path, 'utf8');
//         return data
//     }
//     catch (err) {
//         console.log('err', err.message);
//     }
// }


export async function createAll(path, fn) {
    try {
        const res = await fn()
        const data = await readFile(path, 'utf8')
        const jsData = JSON.parse(data)

        res.id = jsData.length === 0 ? 1 : jsData[jsData.length - 1].id + 1;
        jsData.push(res)

        await writeFile(path, JSON.stringify(jsData, null, 2))
        return 'create'

    } catch (err) {
        console.log("error", err.message);
    }
}

//--------------------------------------------------------
export async function createAllserves(fatch, obj) {
    // const data = await fn();
    const response = await fetch(fatch, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(obj)
    });

    const result = await response.json();
    console.log(result);
}










//---------------------------------------------------------------------

export async function readRiddleServer() {
    try {
        const res = await fetch('http://localhost:3000/readRiddle')
        const data = await res.json();
        return data
    }
    catch (err) {
        console.log('err', err.message);
    }
}






//--------------------------no server---------------------------------------

// export async function readRiddle(path) {
//     try {
//         const data = await readFile(path, 'utf8');
//         return data
//     }
//     catch (err) {
//         console.log('err', err.message);
//     }
// }