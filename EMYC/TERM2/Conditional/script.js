console.log("linked");

//syntax

// if statement
// if(cond){stmt1 stmt2 ....stmtn}

//if else statement
// if(trueCondition){stmt1
// ...stmtn}else{
//    false stmt1
//  }

//if elseif statement
// if(condition1 true){stmt1 ...} elseif(condition2 true){stmt2 ...} elseif(condition3 true){stmt3} else{false stmt}

//examples
let x = 10;
//  let x = parseInt(prompt("Enter your number"));
if (x < 20) {
  console.log("Hello Class");
}

let y = 10;
// if (y == 20) {
//   console.log("true stmt");
// } else {
//   console.log("false stmt");
// }

// using ternary operator
y == 20 ? console.log("true stmt") : console.log("false stmt");

let z = 10;
if (z < 20) {
  console.log("true stmt1");
} else if ((z = 5)) {
  console.log("true stmt2");
} else {
  console.log("false stmt");
}

//switch statement

// let a = parseInt(prompt("enter date: ")) ;
// switch (a) {
//   case 0:
//     console.log("Sun");
//     break;
//   case 1:
//     console.log("Mon");
//     break;

//   default:
//     console.log("Invalid");
// }

// let age = parseInt(prompt("enter age: "));
// if (age < 18) {
//   console.log("you are child");
// } else if (age >= 18 && age < 30) {
//   console.log("you are adult");
// } else {
//   console.log("you are old");
// }

// let grade = parseInt(prompt("enter grade: "));
// if (grade >= 0 && grade <= 100) {
//  if (grade <= 100 && grade >= 90) {
//     console.log("Grade A");
//   } else if (grade < 90 && grade >= 80) {
//     console.log("Grade B");
//   } else if (grade < 80 && grade >= 70) {
//     console.log("Grade C");
//   } else if (grade < 70 && grade >= 60) {
//     console.log("Grade D");
//   } else {
//     console.log("Grade F");
//   }
// } else {
//   console.log("enter number between 0 and 100");
// }

let num1 = parseInt(prompt("enter num1: "));
let num2 = parseInt(prompt("enter num2: "));
let op = prompt("choose :  \n 1. +\n 2. -\n 3. *\n 4. /");

if(op = "1"){
    console.log(num1 + num2); 
}else if(op = "2"){
    console.log(num1 - num2); 
}else if(op = "3"){
    console.log(num1 * num2); 
}else if(op = "4"){
    console.log(num1 * num2); 
}
else{
    console.log("Invalid operator"); 
}