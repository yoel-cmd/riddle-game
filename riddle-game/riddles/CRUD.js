import { readFile, writeFile } from "node:fs/promises";

const path='../DB/RiddlesDB.txt';

//adding try,and async - Because every function is related to the other.
async function creatRiddel(riddle) {
    try{
    const data=await readFile(path,'utf-8');
    const arr=JSON.parse(data)
    const riddleJson=JSON.parse(riddle)

    let currentId = 0
    arr.length === 0 ? currentId = 1 : currentId = arr[arr.length].id + 1
    riddleJson.id = currentId;
    arr.push(riddleJson);
    

    await writeFile(path,JSON.stringify(arr,null,2))
    return 'update'
    }
    catch(err){
        console.log("error",err.message); 
    }
}

creatRiddel('{"name":"yoel","score":98}')
  .then(result => console.log (result))
  .catch(err => console.error(err));






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







