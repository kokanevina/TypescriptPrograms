

let annfun1=function(num1,num2){
    return num1+num2;
}
let res=annfun1(67,89);
console.log(res);


let arrfun1=(num1,num2)=>{
    console.log(num1/num2);
    return num1/num2;   
}
console.log(arrfun1);
let arrfun2=(num1,num2)=>console.log(num1/num2);
// if arrow fun have single stmt in body then curly braces {} are optional
console.log(arrfun2);
let arrfun3=(num1,num2)=>num1/num2;  
// if arrow fun have single return stmt in body then curly braces {} are optional and
//return keyword not allowed. fun implicitly returns the result
console.log(arrfun3);

let arrfun4=num1=>num1*num1*num1;  
// if arrow fun have single formal parameter then simple braces () are optional
console.log(arrfun3);