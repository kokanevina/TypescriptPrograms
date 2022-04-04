interface EmployeeIntf{
    employeeId:number;
    variablePay?:number;
    getGrossSalary(basicSalary:number):number; // method declaration without body
    calculateVariablePay?(hrs:number):void;
}
class HREmployee implements EmployeeIntf{
    employeeId: number;
    //variablePay is optional so not declared here
    getGrossSalary(basicSalary: number): number {
        return basicSalary+ (0.1*basicSalary)+(0.3*basicSalary)+(0.2*basicSalary);
    }
}
class InhouseTrainer implements EmployeeIntf{
    employeeId: number;
    variablePay: number;
    constructor(empId:number){
        this.employeeId=empId;
    }
    getGrossSalary(basicSalary: number): number {
        return basicSalary+ (0.1*basicSalary)+(0.3*basicSalary)+(0.2*basicSalary)+this.variablePay;
    }
    calculateVariablePay(hrs: number): void {
        this.variablePay=hrs*500;
    }
}
let trainer=new InhouseTrainer(123);
trainer.calculateVariablePay(20);
let gs=trainer.getGrossSalary(25000);
console.log("gross salary for trainer with id "+trainer.employeeId +" is "+gs);
