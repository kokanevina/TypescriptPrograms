class NeoEmployee{
    empId:number;
    empName:string;
    basicSalary:number;
    static companyName:string;
    static count:number=0;
    constructor(empId:number,empName:string,basicSalary:number){
        this.empId=empId;
        this.empName=empName;
        this.basicSalary=basicSalary;
        NeoEmployee.count++;
    }
    showNeoEmpDetails(){
        // static members can be easily access in non static method
        // cant use 'this' to access static variable
        console.log(NeoEmployee.companyName);   
        return `Id : ${this.empId}  Name : ${this.empName} Basic Salary: ${this.basicSalary}`;
    }
    static getCompany():string{
      //  console.log(this.empId); cant access      
        return NeoEmployee.companyName;
        // static data must be accessed in static way
    }
}
class Details{
    static showEmpDetails(emp:NeoEmployee ){
        // to access non static data in static method, we must use object of that class whose data to access
        console.log(emp.empId);
        console.log(emp.empName);
        console.log(emp.basicSalary);       
    }
}
// scope bydefault: public
//1. static variable should be accessed via class name
//2. static variables get loaded in memory b4 instance variables
//3. single copy of static variables
console.log(NeoEmployee.count);
NeoEmployee.companyName="Neosoft Technologies Pvt. Ltd.";
let emp1=new NeoEmployee(123,'hari',45000); //1
console.log(emp1.showNeoEmpDetails());
console.log(NeoEmployee.companyName);
let c=NeoEmployee.getCompany();
console.log("Company name given by method:"+c);
Details.showEmpDetails(emp1);
let emp2=new NeoEmployee(567,'pooja',34000);  //2
Details.showEmpDetails(emp2);
console.log(NeoEmployee.count);