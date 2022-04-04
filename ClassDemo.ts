class BankAccount{
    accountNumber:number;
    customerId:number;
    accountType:string;
    accountBalance:number;
    showBalance():number{
        return this.accountBalance;
    }
    deposit(amount:number):boolean{
        this.accountBalance=this.accountBalance+amount;
        return true;
    }
    showAccountDetails():string{
       // return "Account Details : Number: "+this.accountNumber+" cust id:"+this.customerId+" type: "+this.accountType+" balance: "+this.accountBalance;  
        return `Account Details : Number: ${this.accountNumber} cust id: ${this.customerId} type: ${this.accountType} Balance: ${this.accountBalance}` 
    }
}
let account1:BankAccount; account1=new BankAccount();  // call goes to default constructor
/* console.log(account1.accountType);
console.log(account1.customerId);
console.log(account1.accountNumber);
console.log(account1.accountBalance); */
let details1=account1.showAccountDetails();
console.log(details1);
account1.accountNumber=89897878;
account1.accountType="saving";
account1.customerId=999999;
account1.accountBalance=5000;
/* console.log(account1.accountType);
console.log(account1.customerId);
console.log(account1.accountNumber);
console.log(account1.accountBalance); */
console.log(account1.showAccountDetails());
let state=account1.deposit(10000);
if(state)
console.log("amount deposited successfully and your balance is:"+account1.showBalance());
console.log(account1.showBalance());


class Student{
    studId:number;
     studName:string;
     passState:boolean;
     /* constructor(){
        console.log("0-parameter constructor");
        this.studId=111;
        this.studName='AAA';
        this.passState=true;     
    }  */
    constructor(id:number,name:string, passState:boolean){
        this.studId=id;
        this.studName=name;
        this.passState=passState;
    }
    showDetails():string{
        return `Id : ${this.studId}  Name : ${this.studName} Pass? ${this.passState}`;
    }
} // end of class
/* let student1=new Student(); // call goes to default constructor defined in class
console.log(student1.showDetails()); */
let student1=new Student(123,'Hari',true); // call goes to default constructor defined in class
console.log(student1.showDetails());
let student2=new Student(124,'Pari',true); // call goes to default constructor defined in class
console.log(student2.showDetails());
let student3=new Student(125,'Kumar',false); // call goes to default constructor defined in class
console.log(student3.showDetails());
// change name of student1; access instance variable with . operator
student1.studName='Hariprasad';   // changing the state
// whether it will affect student2 :no
console.log(student1.showDetails());
console.log(student2.showDetails());
// display what is the pass state of student3.
console.log(student3.passState);   // gettting the state

