import { readFile, writeFile } from "node:fs/promises";
import readlineSync from '../node_modules/readline-sync/lib/readline-sync.js';

const pathRiddle='../DB/RiddlesDB.txt';
const pathPlayer='../DB/PlayersDB.txt';


export async function creatRiddle() {
    let nameRiddle=readlineSync.question('enter your name riddle: ')
    let Description=readlineSync.question('enter your riddl: ')
    let Answer=readlineSync.question('enter answer: ')
    let riddle={
        name:nameRiddle,
        taskDescription:Description,
        corectAnswer:Answer
    }
    return riddle;
}

export async function creatPlayer(player) {
  
    return player;
    
}


export async function updateRiddle(path){
    try{
    const data=await readFile(path,'utf8')

    const arr=JSON.parse(data)
    const id=readlineSync.question("enrer id riddle: ")
    const type=readlineSync.question("enrer line to Change: ")
    const Change=readlineSync.question('enter Change: ')
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

export async function deleteRiddle (path){
    try{
    const data=await readFile(path,'utf8')
    const arr=JSON.parse(data)
    const id=readlineSync.question("enrer id riddle: ")
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

export async function readRiddle(path){
    try{
    const data=await readFile(path,'utf8');
        return data
    }
    catch(err){
        console.log('err',err.message);
    }
}


export async function createAll(path,fn) {
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



// await Delete(path)

// await Update(path)

// await readRiddle(path);
