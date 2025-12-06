// console.log("...");
// //
// function greeting(name) {
//   return "Aww " + name;
// }
// console.log(greeting("sumeya"));

// // function expression
// const mabazat = function (num1, num2) {
//   return num1 * num2;
// };
// console.log(mabazat(60, 78));

// // arrow function
// const cubic = (num) => num * num * num;
// console.log(cubic(2));

// // IIFE
// (function () {
//   console.log("Aww");
// })();

// (() => {
//   console.log("aa");
// })();

// // Grade calculator
// const gradeCalculator = function (score) {
//   if (score > 0 && score < 100) {
//     if (score >= 90) {
//       return "A- Excellent";
//     } else if (score >= 80) {
//       return "B- Very Good";
//     } else if (score >= 70) {
//       return "C- Good";
//     } else if (score >= 60) {
//       return "D- Pass";
//     } else {
//       return "Fail";
//     }
//   } else {
//     return "enter a score between 0 and 100";
//   }
// };

// console.log(gradeCalculator(90));

// const gradeCalculatorSwitch = function (score) {
//   switch (score) {
//     case 100:
//       return "enter score less than 100";
//       break;
//     case 90:
//       return "A- Excellent";
//       break;
//     case 80:
//       return "B- Very Good";
//       break;
//     case 70:
//       return "C- Good";
//       break;
//     case 60:
//       return "D- Pass";
//       break;
//     case 0:
//       return "enter score greater than 0";
//       break;
//     default:
//       return "Fail";
//       break;
//   }
// };

// console.log(gradeCalculatorSwitch(100));

// DOM
// const h1 = document.getElementById("emyc");
// h1.innerHTML = `<strong>aselamualeykum</strong>`;
// console.log(h1);

// const sample = document.getElementsByClassName("Aww");
// sample.innerHTML = `<strong>aselamualeykum</strong>`;
// console.log(sample);

// const sample2 = document.getElementsByTagName("h1");
// sample2.innerHTML = `<strong>aselamualeykum</strong>`;
// console.log(sample2);

// const sample2 = document.querySelector('.Aww')
// sample2.innerHTML = `<strong>aselamualeykum</strong>`;
// console.log(sample2);

// const sample2 = document.querySelectorAll('.Aww')
// sample2.innerHTML = `<strong>aselamualeykum</strong>`;
// console.log(sample2);

// let abebe = document.querySelector('#emyc')
// abebe.textContent = 'aaa'
// abebe.style.color = 'red'
// abebe.style.backgroundColor = 'black'
// console.log(abebe);
// let abebe = document.getElementsByTagName("img");
// abebe.getAttribute = "src";
// // abebe.getAttribute = "src", "ke";
// console.log(abebe);
