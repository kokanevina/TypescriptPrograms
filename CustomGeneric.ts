class NonGeneric{
    private ele : any;
    setElement(ele:any){
        this.ele=ele;
    }
    getElement():any{
        return this.ele;
    }
}
let obj1=new NonGeneric();
obj1.setElement('Poonam');
let e=obj1.getElement();
// length of string
if(typeof e==='string')
    (<string>e).length;

class Generic<a>{
        private ele : a;  
        setElement(ele:a){
            this.ele=ele;
        }
        getElement():a{
            return this.ele;
        }
}
let obj2=new Generic<String>();
obj2.setElement('Hi');
//obj2.setElement(678);
let e1=obj2.getElement();

let obj3=new Generic<Number>();
//obj3.setElement('Hi');
obj3.setElement(678);
let e2=obj3.getElement();
// T, E, K ,V



interface StudentIntf<T,E>{
    studId:T;
    subject:E;
}
class NeoStudent implements StudentIntf<number,string>{
    studId: number;  // number 123, 456  234, 678
    subject:string
}
class SquadStudent implements StudentIntf<string,number>{
    studId: string;  // string  sq12, sq34,sq56
    subject:number;
}


