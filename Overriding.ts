class NeoEmployee{
    empId:number;
    empName:string;
    empSalary:number;
    constructor(id:number,name:string,salary:number){
        console.log("in super class constructor"); 
        this.empId=id;
        this.empName=name;
        this.empSalary=salary;
    }
   showDetails():string{
       console.log("super class method");
       return `Id : ${this.empId}  Name : ${this.empName} Salary : ${this.empSalary}`;
   }
   getGross():number{
    console.log("super class gross method");
    return this.empSalary+1000+4000+3000;  //89000+8000=97000
  }
}
class NeoTrainer extends NeoEmployee{
    technologies:string[]
    variablePay:number;
    constructor(id:number,name:string,salary:number,vPay:number,tech:string[]){
        super(id,name,salary); // constructor chaining
        this.technologies=tech;
        this.variablePay=vPay;
       //Note: instance variable of the class must be initialized in same class for better use
    }
    showDetails():string{
        console.log("sub class method");     
       return  super.showDetails()+` technolgies of teaching : ${this.technologies}  variable Pay : ${this.variablePay}`;
   }
    getGross():number{
            console.log("sub class gross method");
            return this.empSalary+1000+4000+3000+this.variablePay 
   }
}
let tech=['java','web','angular','react']
let trainer1=new NeoTrainer(456,'Poonam Patil', 89000, 6000,tech); 

console.log(trainer1.showDetails()); // overriding method
console.log("Gross salary:"+trainer1.getGross());

tech=['python','web basics','angular','php']
let trainer2=new NeoTrainer(234, 'Kruti Patil', 98000, 7000,tech); 

console.log(trainer2.showDetails());  // overriding method
console.log("Gross salary:"+trainer2.getGross());

//For overriding methods:
//1. Scope can be same or increased but we can not decrease
//2. if super class method void then overriding method : void/ any return type
//3. if super class method have return type  then overriding method : same return type 