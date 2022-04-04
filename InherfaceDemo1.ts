interface StackIntf{
    push(ele):void;
    pop():number;
}
interface QueueIntf{
    insert(ele):void;
    delete():number;
}
// interfaces also can be extended to add extra variables method signatures in future 
interface DequeIntf extends QueueIntf{
    insertFront(ele):void;
    deleteLast():number;
    // 2 own properties + 2 inherited properties
    // 4 properties
}
class NumberList implements StackIntf,QueueIntf{
    push(ele: any): void {
        
    }
    pop(): number {
        return 0
    }
    insert(ele: any): void {
        
    }
    delete(): number {
        return 0
    }
}

// if class is implementing sub interface then it has to override and declare variables of sub 
//as well as super interface
class NumberList1 implements DequeIntf{
  insertFront(ele: any): void {
      
  }
  deleteLast(): number {
      return 0;
  }
  insert(ele: any): void {
      
  }
  delete(): number {
      return 0;
  }
}

class Father{
    dream(){
        return "Doctor"
    }
}
class Mother{
    dream(){
        return "Engineer"
    }
}
class Child extends Father,Mother{
    callDream(){
        let dr=this.dream(); // which dream to call // ambigous call
    }
}
class Child1 extends Father{
    callDream(){
        let dr=this.dream(); // which dream to call // ambigous call
    }
}
class Child2 extends Mother{
    callDream(){
        let dr=this.dream(); // which dream to call // ambigous call
    }
}
interface A{
    test1();
    test4();
}
interface B{
    test2();
    test4();
}
interface C extends A,B{
    test3();
    // from we are not going to call any method from A and B
    // no issue of ambiguity
    //1+2+2 = 5 
}
class TestClass implements C{
  test3() {
      
  }
  test1() {
      
  }
  test2() {
      
  }
  // typscript doesnot support overloading
  test4() {
      
  }

}