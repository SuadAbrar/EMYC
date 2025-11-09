console.log("linked....");

// for loop
// for(init; condition; post/pre expression){
// line of code
//}

for (j = 1; j <= 10; j++) {
  console.log("Hello ", j);
}

//while loop
let x = 1;
while (x <= 10) {
  console.log("Hello");
  x++;
}

// do while loop
let y = 1;
do {
  console.log("hello");
  y++;
} while (y <= 5);

// let n = prompt("Enter any number");
// for(x=1; x<=n; x++){
//     console.log(x);
// }

// let n = prompt("Enter any number");
// for(x=1; x<=n; x++){
    //     if(x%2==0){
//         console.log("Even:" + x);
//     }else{
    //         console.log("Odd:" + x);
//     }
// }

// let n = prompt("Enter any number");
// let sumOfEven = 0;
// let sumOfOdd = 0;
// for(x=1; x<=n; x++){
//     if(x%2==0){
//         sumOfEven+=x;
//     }else{
//         sumOfOdd+=x;
//     }
// }
// console.log("sum of even: " + sumOfEven);
// console.log("sum of odd: " + sumOfOdd);

let n = prompt("Enter any number");
for(x=1; x<=n; x++){
    if(x%2==0 && x%3==0){
        console.log("FuzzyBuzzy");
    }else if(x%2==0){
        console.log("Fuzzy");
    }else if(x%3==0){
        console.log("Buzzy");
    }else{
        console.log(x);
    }
}
