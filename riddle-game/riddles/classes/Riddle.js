import readlineSync from 'readline-sync';



class Riddle{
    constructor({id,name,taskDescription,corectAnswer}){
        this.id=id;
        this.name=name;
        this.taskDescription=taskDescription;
        this.corectAnswer=corectAnswer;
    }
    ask(){
        console.log(this.taskDescription); 
        while(true){
            const res=readlineSync.question('enter your answer')
            
        }
    }
}

