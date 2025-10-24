console.log("Linked");
// var  In var redeclaration and reassignation is possible which cause unexpected semantic error
var myNum; //declaration
myNum = 10; //value assign
console.log(myNum);
var myNum;
myNum = 20;

// let Redeclaration is impossible while can re assign
let myString;
myString = "Hello";
myString = "Class";

//const both redeclaration and assignation is impossible
const myId = 1234;
// myId = 12344; // reassignation for const cause an error
console.log(myId);

let x = true;
console.log("x"); // output =  x
console.log(x); // output = true
console.log(typeof x); // output = datatype of x => boolean

let y = 120;
console.log(typeof y); // output = datatype of y => number

let z = "Hello";
console.log(typeof y); // output = datatype of z => string

let myArray = ["Abebe", 3766, true]; // help us to assign all datatypes at once
console.log(myArray);

let myObj = {
  name: "Mizan",
  id: 123,
  address: "AA",
};
console.log(myObj);

let myJson = { name: "Abebe", id: "123", status: "true" };
