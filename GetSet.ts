// in typescript instance vars and methods are bydefault public
class Student{
     private studId:number;
     private studName:string;
     private passState:boolean;
    constructor(id:number,name:string, passState:boolean){
        this.studId=id;
        this.studName=name;
        this.passState=passState;
    }
   showDetails():string{
        return `Id : ${this.studId}  Name : ${this.studName} Pass? ${this.passState}`;
    }
  // to change the value  : set property
   set stId(studId:number){
       this.studId=studId;
   }
  // to access the value : get property
    get stId():number{
       return this.studId;
   }
   set stName(studName:string){
    this.studName=studName;
    }
    get stName():string{
        return this.studName;
    }
    set pass(passState:boolean){
        this.passState=passState;
        }
    get pass():boolean{
            return this.passState;
        }
} // end of class
let student1=new Student(123,'Hari',true);
console.log(student1.showDetails());
let student2=new Student(124,'Pari',true); 
console.log(student2.showDetails());
let student3=new Student(125,'Kumar',false); 
console.log(student3.showDetails());
student1.stName='Hariprasad';   // set property
// display name of 1st student
console.log(student1.stName);
student2.stId=789;
console.log(student1.showDetails());
console.log(student2.showDetails());
console.log(student3.pass);   

