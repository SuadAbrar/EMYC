console.log("linked.....");

console.log("Arthimetic Operators");
//#############################
let num1 = 20;
let num2 = 10;
let sum, diff, prod, quot, rem;

sum = num1 + num2;
diff = num1 - num2;
prod = num1 * num2;
quot = num1 / num2;
rem = num1 % num2;

//using template literal
console.log(
  `sum: ${sum} \ndifference: ${diff} \nproduct: ${prod} \nremainder: ${rem}`
);

let expo = num1 ** 2;
console.log(expo);

let n1 = 3;
let n2 = 5;
console.log(++n1); //pre increment
console.log(n2++); //post increment

n2++;
++n1;
n1--;
let s1 = n1 + n2--;
console.log(s1);

let x = 15;
let y = 10;
let a = 2;
let b = "2";
x += y;
x -= y;
x /= y;
x *= y;
x %= y;
console.log(x);
console.log("Hello" + 30); // concatenation

//comparison operators (==, ===, !=, !===)
console.log(x == y);
console.log(a == b);
console.log(a === b); // also check their data type

//logical operators (&&, ||, !)
console.log(!(a === b));
console.log(!(a === b) || x == y);

//Array
let myArr = [12, 5, "Abebe", true, 90];
console.log(myArr);

//accessing value by index
let Value1 = myArr[0];
let Value3 = myArr[2];

//accessing value by destructuring
let [v1, v2, v3, v4, v5] = myArr;

console.log(Value1);
console.log(Value3);
console.log(`value1: ${Value1} \nvalue3: ${Value3}`);

let myArr1 = [20, "Mizan", [1, "Abdu", [67, 90], 8], 0, false];
console.log(myArr1[1]);
console.log(myArr1[2][1]);
console.log(myArr1[2][2][0]);

//function declaration syntax
function funName(x) {
  // lines of code
  console.log("eat breakfast");
  console.log("go to school");
  console.log("eat mekses");
  console.log(x);
}

//invoking or calling the function by its name
funName("Abebe");
funName("Kebede");

// function expression syntax
let myFun = function () {
  // lines of code
};

//Arrow function syntax
let myFun1 = () => {
  //lines of code
};

//
function adder(num1, num2) {
  let sum = num1 + num2;
  console.log(sum);
  return sum;
}
adder(200, 500);

function avg(x, y) {
  let avg = adder(x, y) / 2;
  console.log(avg);
}
avg(10, 20);