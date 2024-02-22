//ex16] dynamic fields, object literals,template literals
const iamObj = {key:"andtheValue"};
console.log(iamObj.key);

// this is useful when key is comming from function or from somewhere

const Myname="Rahul";
const obj1= {[Myname]:"andtheValueIs"};
console.log(obj1.Rahul);

const keyComingFromSomewhere = somekey => ({[somekey]:"somekeyValue"})
console.log(keyComingFromSomewhere("pratap"));

//ex17] object literals/shorthand property value
const Name="Rahul";
const age=20;

const teacher= {Name: Name, age: age}
console.log(teacher);// now write this in short jene object literals/shorthand property kahevai

const teacher2 = {Name,age};  // key-valye same name to aa rite lakhi shakie
console.log("this is teacher 2", teacher2);

const Name1="joker";
const teacher3={ Name:Name1, age}; // age mate key and value name same j che name mate diffrent
console.log(teacher3);

//ex18 template literals
const greeting= "hello "+ Name1;
console.log(greeting); // now find better way 

const greet= `hello ${Name1} !`;
console.log(greet);

const geet1 = () => "Kiran";
console.log(`hello ${geet1()}`);// geet1 pachi () thi func call karvo pde

//7] nullish coalescing & optional chainning 

// nullish coalescing operator(??) check if value is null or defult and return defult 

const myVariable= null;
const mydefult= 4;

const myValue = myVariable ?? mydefult;//return defult value 

console.log(myValue);