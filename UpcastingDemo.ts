class Animal{
    gettypes():void{
        console.log("There are several types like.. wild, carnivorous, herbivourous");      
    }
     eat():void{
        console.log("animals eat...");    
    }
}
class Tiger extends Animal{
    sleep():void{
        console.log("Tiger sleeps 4 hours stretch...");      
    }
    eat(){
        console.log("Tiger is carnivorous");      
    }
}
class Elephant extends Animal{
    getWeight():void{
        console.log("Baby elephant generally has weight 20kg at the time of birth");     
    }
    eat(){
        console.log("Elephant is herbivrous");       
    }
}
 let animal:Animal;
 animal=new Tiger(); // upcasting 
 animal.eat() ;    // Tiger  method
animal=new Elephant();
animal.eat(); // Elephant  method

let tiger=new Tiger();
tiger.eat();
let elephant=new Elephant();
elephant.eat();

// upcasting:
// when we want subclass must behave general we can cast it to super class
// all sublcass own properties will be invisible
// overriding properties are still visible 


//For overriding methods:
//1. Scope can be same or increased but we can not decrease
//2. if super class method void then overriding method : void/ any return type
//3. if super class method have return type  then overriding method : same return type 