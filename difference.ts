var company="neosoft";
var company="neosoft technologies"; 
// variable with var can be redeclared
let company1="neo";
//let company1="tech";
// variable with let can not be redeclared
company1="tech";
// var variables though declared anywhere in function, always have functional scope
//let variables have block scope, in which block they are declared
function executeFor(){
    for(var i=1;i<=5;i++ ){
        console.log("i="+i);
    }// for ended
    console.log("outside of for i="+i);

    for(let j=1;j<=5;j++ ){
        console.log("j="+j);
    }// for ended
   // console.log("outside of for j="+j);
   console.log(company);
   console.log(company1);
}
executeFor();
function fun2(){
    console.log(company);
    console.log(company1); 
}
fun2();