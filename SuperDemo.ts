class NeoEmployee{
    empId:number;
    empName:string;
    empSalary:number;
    protected departmentName:string;
    constructor(){
        console.log("in super class constructor"); 
    }
   showEmpDetails():string{
       return `Id : ${this.empId}  Name : ${this.empName} Salary : ${this.empSalary}`;
   }
   assignmentDepartment(departmentName:string){
       this.departmentName=departmentName;
   }
}
class NeoTrainer extends NeoEmployee{
    technologies:string[]
    variablePay:number;
    constructor(){
        super(); // constructor chaining
        console.log("in sub class constructor"); 
    }
    showTrainerDetails():string{
       return `technolgies of teaching : ${this.technologies}  variable Pay : ${this.variablePay}`;
   }
   testProtected(){
       console.log(this.departmentName);   
   }
}
let trainer1=new NeoTrainer(); // subclass object, super class object automatically created
// super class constructor, sub class constr
trainer1.empId=456;
trainer1.empName='Poonam Patil';
trainer1.empSalary=89000;
trainer1.technologies=['java','web','angular','react'];
trainer1.variablePay=6000;
console.log(trainer1.showEmpDetails());
console.log(trainer1.showTrainerDetails());