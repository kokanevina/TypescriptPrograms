let myArray=new Array();
myArray.push(56);
myArray.push(123);
myArray.push('hari');
myArray.push(56);
myArray.push('Kishor');
myArray.push(true);
myArray.push('hari');
myArray.push('Poonam');
console.log(myArray);

let safeArray=new Array<Number>();
// objects inside array object
safeArray.push(56);
safeArray.push(123);
//safeArray.push('hari');
safeArray.push(56);
safeArray.push(null);
safeArray.push(null);
safeArray.push(null);
console.log(safeArray);

let safeArray1=new Array<number>();
// primitive values inside array object
let safeArray2=new Array<String>();
safeArray2.push('Pooja');
// duplicates allowed, null allowed

let mySet=new Set<String>();
mySet.add('java');
mySet.add('html');
mySet.add('css');
mySet.add('c#');
mySet.add('c#');
mySet.add(null);
mySet.add(null);
console.log(mySet);
// duplicates not allowed, null single allowed