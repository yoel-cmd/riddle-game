import { readFile, writeFile } from "node:fs/promises";
import readlineSync from '../node_modules/readline-sync/lib/readline-sync.js';

const pathRiddle='../DB/RiddlesDB.txt';
const pathPlayer='../DB/PlayersDB.txt';


async function creatRiddle() {
    let nameRiddle=readlineSync.question('enter your name riddle')
    let Description=readlineSync.question('enter your riddl')
    let Answer=readlineSync.question('enter answer')
    let riddle={
        name:nameRiddle,
        taskDescription:Description,
        corectAnswer:Answer
    }
    return riddle;
}

async function creatPlayer() {
    try{
    let playerName=readlineSync.question('enter your name player')
    let player={
        name:playerName
    }
    return player;
    }catch(err){
        console.error('err',err.message)
    }
}


async function Update(path){
    try{
    const data=await readFile(path,'utf8')
    console.log(data);
    const arr=JSON.parse(data)
    const id=readlineSync.question("enrer id riddle")
    const type=readlineSync.question("enrer line to Change")
    const Change=readlineSync.question('enter Change')
    for (let index = 0; index < arr.length; index++) {
        if(arr[index].id==id){
            arr[index][type]=Change;   
            await writeFile(path,JSON.stringify(arr,null,2))        
            return 'Update'
        }  
    }
    console.log("id not found");
    
    } catch(err){
        console.error('err',err.message)
    }
}

async function Delete(path){
    try{
    const data=await readFile(path,'utf8')
    const arr=JSON.parse(data)
    const id=readlineSync.question("enrer id riddle")
    for (let index = 0; index < arr.length; index++) {
        if(arr[index].id==id){
            arr.splice(index,1)
            break
        }  
    }
    await writeFile(path,JSON.stringify(arr,null,2))
        return 'delete'
    }catch(err){
        console.error('err',err.message)
    }
}

async function readRiddle(path){
    try{
    const data=await readFile(path,'utf8');
    console.log( data);

    }
    catch(err){
        console.log('err',err.message);
    }
}


async function creatAll(path,fn) {
    try{
    const res=await fn()
    const data=await readFile(path,'utf8')
    const jsData=JSON.parse(data)
    let currentId;
    jsData.length === 0 ? currentId = 1 : currentId = jsData[jsData.length-1].id + 1;
    res.id = currentId;
    jsData.push(res)

    await writeFile(path,JSON.stringify(jsData,null,2))
    return'create'
    
    }catch(err){
        console.log("error",err.message); 
    }
}

const val=await creatAll(pathPlayer,creatPlayer)
console.log(val);


// await Delete(path)

// await Update(path)

// await readRiddle(path);























// function creatRiddel(riddel,path) {
//     return readRiddle(path).then(data=> {
//         const arr = JSON.parse(data);
//         const js=JSON.parse(riddel)
//         if (arr.length === 0) {
//             js.id = 1
//         } else {
//            let maxId=arr.length + 1

//         }
//         arr.push(js); 
//         return arr;
//     })
//     .then(arr,path=>writeRiddle(arr,path))






// }
// function writeRiddle(arr,path) {
//     return writeFile(path, JSON.stringify(arr,null,2))      
// };

// function readRiddle(path) {
//    return readFile(path, 'utf8',)
// }


// creatRiddel('{"name":"yoel","score":98}')
  








































// async function updateRiddle(params) {
//     return readFile('db.txt', 'utf8').then(data => {
//         const arr = JSON.parse(data);
//         let found = false;

//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i].id === params.id) {
//                 arr[i].score = params.score;
//                 found = true;
//                 break;
//             }
//         }
//         if (!found) {
//             throw new Error('ID not found');
//         }
//         return writeFileFunc(arr)      
//     })
// }

    
    
        // writeFile('db.txt', JSON.stringify(arr, null, 2), (err) => {
        //     if (err) console.log(err);
        // });
        // console.log("created");
    


















// function creatFIleFunc(answer) {
//     readFile('db.txt', 'utf8', (err, data) => {
//         if (err) return console.log(err);

//         const arr = JSON.parse(data);
//         if (arr.length === 0) {
//             answer.id = 1
//         } else {
//             maxId = 0
//             for (let i = 0; i < arr.length; i++) {
//                 if (arr[i].id > maxId) {
//                     maxId = arr[i].id
//                 }
//             }
//             answer.id = maxId + 1
//         }
//         arr.push(answer);

//         writeFile('db.txt', JSON.stringify(arr, null, 2), (err) => {
//             if (err) console.log(err);
//         });
//         console.log("created");
//     });
// }







