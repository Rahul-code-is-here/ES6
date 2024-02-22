// let obj1 ={a:1, b:2};
// let obj2 ={a:1, b:2};

// console.log(obj1===obj2); //false

// const arr=[1,2,3,4];
// arr.push(5);  // memory refrence ma push thai jashe eror nai aave  console.log(arr);

// const getNum = () => 2;

// function getNumEs5(){
//     return 2;
// }

// console.log(getNum);
// console.log(getNumEs5);

//write es6 function in es5
const isOne= num => num == 1

function isOne1(num){
    return num ==1;
}

//Q3
const isBigger = (a,b) => a>b;
console.log("is 2 bogger than 3", isBigger(2,3));

function isBigger1(a,b){
    return a>b;
}
console.log("is 2 bogger than 3", isBigger1(2,3));

//Q4 es5 to es6
function moreThan22(num){
    return num>22;
}
console.log(moreThan22(21));

const morethan23 = num => num>23;
console.log(morethan23(24));

//ex10] short arrow function ehilr returning an object/object literals syntax
const giveMeAnObject= a => ({value: a});
console.log(giveMeAnObject(33))

function giveMeAnObject1(a){
    return ({value:a});// compiler ne keva ke aa object che func body nthi ({}) no use karie
}
console.log(giveMeAnObject1(33));

//defult parameter
const defultExample= (a,b) => a+b;
console.log(defultExample(2)); // Nan output
// so we can pass defult parameter 

const array= [1,2,3,4,5,6,7,8,9,10];
const spreadExample2 = ([first,second, ...rest]) => {
    console.log(first,second,rest);
}
//spread takeout values from array
// pachal ... to pela ne alag kare
console.log(spreadExample2(array)); // first,second value separate thashe and bakini badhi value seperate array ma

// output: 1 2 [
//     3, 4,  5,  6,  7,
//     8, 9, 10, 11, 12,
//    13
//  ]

// rest with spread
//rest puts all value in one array
// aagal ... then te array ma add kare 
console.log(spreadExample2([...array,11,12,13])) // array copy thai gyo and last ma 11,12,13 add thai jashe

const anArray=[1,2,3,5,76];
const anotherArray = [22,44,45, ...anArray];
console.log(anotherArray); 
// concat of array 
// output:[
//     22, 44, 45,  1,
//      2,  3,  5, 76
//   ]


// ex14] destructuring
function itTakesAnObj(hereIsObj){
    console.log(hereIsObj.a);
    console.log(hereIsObj.b);
}

const anObj= {a:22, b:44};
itTakesAnObj(anObj); 

// now destructe it
const itTakesAnObj1 = ({a,b}) =>{
    console.log(a,b);
}

// for array restructure
const Anarray= [23,33];  //array ma key nathi only value etle index ma je name che em nam jatu re
const [first1,second2]=Anarray;
console.log(first1,second2); // destruct array value in individual obj first1=23 second2=33

// for obj restructure
const obj3={alia:33,hemanshi:34}
const{alia,hemanshi}=obj3;
// obj pase key che etle same key rakhvani, array jem only value nathi

console.log(alia);
console.log(hemanshi);

// restructuring rename prameter

const{alia:kiara, hemanshi:pooja}=obj3;

console.log(kiara);
console.log(pooja);