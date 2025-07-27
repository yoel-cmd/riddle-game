import { response } from "express";
import { readFile, writeFile } from "node:fs/promises";
import { json } from "node:stream/consumers";
import readlineSync from 'readline-sync';

const pathRiddle = '../DB/RiddlesDB.txt';
const pathPlayer = '../DB/PlayersDB.txt';

//-----------------------------------------------------------------riddle--------------------------------------------------

export function creatRiddle() {
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

//-----------------delete to server-----------------------------

export async function deleteRiddleServer(path) {
    const id = readlineSync.question('enter id to delete: ')
    try {
        const response = await fetch(path + id, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        console.log('frome fn delete server>>>> delete !!');
    } catch (error) {
        console.error('err', err.message)
    }
}
//-----------------update riddle-----------------------------

export async function updateRiddleServer(path) {

    const id = readlineSync.question('enter id to update : ')
    const obj = creatRiddle('enter id to update')
    try {
        const response = await fetch(path + id, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        return 'frome fn delete server>>>> update !!';
    } catch (error) {
        console.error('err', error.message)
    }
}

//----------------read riddle server----------------------------------

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
//-----------------create all to server-----------------------------
export async function createAllserves(path, obj) {
    const response = await fetch(path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
    console.log("body frome send>>", obj);

    const result = await response.json();
    console.log("res>>", result);
}
//-----------------------------------------------------------------player--------------------------------------------------
//-----------------create player -----------------------------
export async function creatPlayer(obj) {
    const response = await fetch('http://localhost:3000/siging', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj
        )
    });

    const result = await response.json();
    console.log("res>>", result);
}

//----------------check if exsist----------------------------------
export async function checkIfExsist(name) {
    try {
        const response = await fetch(`http://localhost:3000/check-player/${name}`)
        const data = await response.json();
        return data.length > 0;
    } catch (error) {
        console.error('err', error.message)
    }
}
//----------------check if record----------------------------------
export async function checkRecord(name, record) {
    try {
        const response = await fetch(`http://localhost:3000/check-player/${name}`)
        const data = await response.json();
        if (data[0].record <= record)
            return true
        else
            return false
    } catch (error) {
        console.error('err', error.message)
    }
}
//------------------update record for player----------------------------------
export async function updateRecord(name, property, value) {
    try {
        console.log('name:', name, 'property:', property, 'value:', value);

        const val = await fetch('http://localhost:3000/update-record', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                property: property,
                value: value
            })
        });
        const res = await val.text()
        console.log(res);
    } catch (error) {
        console.log('error', error.message);
    }
}

//----------------------------lider bord------------------------------------------
export async function lidderBord() {
    try {

        const val = await fetch('http://localhost:3000/players-by-record')
        const data = await val.json();
        return data
    } catch (error) {
        console.error('err', error.message)

    }

}
//----------------------------Login----post-----------------------------------
export async function Login(name,password) {
    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                password: password
            })
        });
        const val = await response.json()
        console.log(val);


    } catch (error) {
        console.log("error: ", error);
    }
}
//----------------------------Singing---post------------------------------------
export async function Singing(name,password) {
    
    try {
        const response = await fetch('http://localhost:3000/siging', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                password: password
            })
        });
        const val = await response.json()
        console.log(val);

    } catch (error) {
        console.error("err: ", error);
    }
}
