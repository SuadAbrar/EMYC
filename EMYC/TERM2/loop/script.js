console.log("linked");
let fruit = ["apple", "banana", "mango", "avocado"];
// forof Loop
// for (let element of fruit) {
//     console.log(element);
// }
// for (let element of fruit) {
// console.log(element.length);
// console.log(element.toUpperCase());
// console.log(element.toLowerCase());
// }
// String Function
// let name = "sumeya";
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.includes("a"));
// console.log(name.slice(2,3));
// let firName = "Sumeya";
// let lastName ="Bahiru";
// let fullName =${firName} Bahiru;
// console.log(fullName)
// let name2 = name.slice(0,1);
// console.log(${name2.toUpperCase()}${name.slice(1,6)})
let fName = "suadabrar";
let name3 = fName.slice(0, 1);
let name4 = fName.slice(4, 5);
function upper() {
  console.log(
    `${name3.toUpperCase()}${fName.slice(
      1,
      4
    )} ${name4.toUpperCase()}${fName.slice(5, 9)}`
  );
}
upper();

function Ucase(fruit) {
  for (const element of fruit) {
    console.log(element.slice(0, 1).toUpperCase() + element.slice(1, 7));
  }
}
Ucase(fruit);

// round, floor, ceil
let number = 4.6;
console.log(Math.round(number));
console.log(Math.floor(number));
console.log(Math.ceil(number));

//generate numbers randomly 1 to 10
let num = Math.random() * 10;
console.log(Math.ceil(num));

//
let arrowFun = (a = 8, b = 9) => {
  console.log(a + b);
};

arrowFun();

//
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.map((array2) => {
  console.log(array2 * 2);
});

//

function operation(a, b) {
  function add() {
    console.log("sum: " + (a + b));
  }
  add();
  function sub() {
    console.log("sub: " + (a - b));
  }
  sub();
  function prod() {
    console.log("prod: " + a * b);
  }
  prod();
  function div() {
    console.log("div: " + a / b);
  }
  div();
}
operation(4, 2);

// OBJECT

// using object literal
const person = {
  name: "Abebe",
  age: 29,
  grade: 12,
  greetPerson() {
    console.log("Hello, " + this.name);
  },
  programmingSkill: {
    back: "python",
    frontend: "react",
  },
};

// Using object constructor
const student = new Object();
student.name = "Ayele";
student.age = "60";
student.grade = 11;

console.log(person.name);
console.log(person["name"]);
console.log(student);

student.section = "A";
student.age = 22;
delete student.grade;
console.log(student);
person.greetPerson();
console.log(person);
console.log(person.programmingSkill.back);

// object destructuring
const { name, age } = person;
console.log("name: ", name, "\n", "age: ", age);

const dateTimeNow = new Date();
console.log("Today: " + dateTimeNow);
console.log(dateTimeNow.getFullYear());
console.log(dateTimeNow.toDateString());

const newDate = new Date("2025-11-23")
console.log("Tomorrow: " + newDate);

// 
const myObject = {
  fullName: "Suad Abrar",
  age: 21,
  gender: "F",
  institution: "Mit",
  course: "Full stack dev't"
}

function myFun(myObjectProperty){
  const value = myObject[myObjectProperty]
  console.log(value);
  return;
}

myFun("fullName")

const fruitNames = ["Mango", "Apple", "Orange", "Banana"];
console.log(fruitNames);
console.log(fruitNames.push("Avocado"));
console.log(fruitNames.pop("Orange"));
console.log(fruitNames);
console.log(fruitNames.shift());
// console.log(fruitNames);
console.log(fruitNames.unshift("Orange"));
// console.log(fruitNames);