import readlineSync from 'readline-sync';
export default class Riddle{
    constructor({id,name,taskDescription,corectAnswer}){
        this.id=id;
        this.name=name;
        this.taskDescription=taskDescription;
        this.corectAnswer=corectAnswer;
    }
    ask(){
        console.log(this.taskDescription); 
        let res=readlineSync.question('enter your answer')
        while(this.corectAnswer!=res){
            console.log(" Wrong answer"); 
            console.log(this.taskDescription); 
            res=readlineSync.question('enter your answer') 
        }
        console.log("corect answer");
        
    }
}

