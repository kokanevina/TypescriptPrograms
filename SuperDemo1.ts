class NeoEmployee{
    empId:number;
    empName:string;
    empSalary:number;
    protected departmentName:string;
    constructor(id:number,name:string,salary:number){
        console.log("in super class constructor"); 
        this.empId=id;
        this.empName=name;
        this.empSalary=salary;
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
    constructor(id:number,name:string,salary:number,vPay:number,tech:string[]){
        super(id,name,salary); // constructor chaining
        this.technologies=tech;
        this.variablePay=vPay;
       //Note: instance variable of the class must be initialized in same class for better use
    }
    showTrainerDetails():string{
       return `technolgies of teaching : ${this.technologies}  variable Pay : ${this.variablePay}`;
   }
   testProtected(){
       console.log(this.departmentName);   
   }
}
let tech=['java','web','angular','react']
let trainer1=new NeoTrainer(456,'Poonam Patil', 89000, 6000,tech); // subclass object, super class object automatically created
// super class constructor, sub class constr
console.log(trainer1.showEmpDetails());
console.log(trainer1.showTrainerDetails());
tech=['python','web basics','angular','php']
let trainer2=new NeoTrainer(234, 'Kruti Patil', 98000, 7000,tech); // subclass object, super class object automatically created
// super class constructor, sub class constr
console.log(trainer2.showEmpDetails());
console.log(trainer2.showTrainerDetails());

//let employee=new NeoEmployee(789,'Krupa',78000); // no inheritance