// // class House {
// //     constructor(price, location, noRoom, date) {
// //         this.price = price
// //         this.location = location
// //         this.noRoom = noRoom
// //         this.date = date
// //     }

// //     getPrice(){
// //         return this.price
// //     }
// //     setPrice(price){
// //         this.price = price
// //         return this.price
// //     }
// // }

// // const House1 = new House(2000, 'alembank', 10, '12/12/2025')
// // const House2 = new House(3000, 'bole', 40, '12/12/2025')
// // const price = House1.getPrice()
// // const newPrice = House1.setPrice('3500')
// // console.log(House1);
// // console.log(price);
// // console.log(newPrice);
// // console.log(House2);
// const name = document.getElementById("regName");
// const email = document.getElementById("regEmail");
// const password = document.getElementById("regPassword");
// const registerForm = document.getElementById("registerForm");
// const error = document.getElementById("error");
// registerForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   //
//   const nameValue = name.value;
//   const emailValue = name.value;
//   const passValue = name.value;
//   if (nameValue == "" || emailValue == "" || passValue == "") {
//     error.textContent = "all fields are required";
//     error.style.color = "red";
//   } else {
//     console.log("registered successfully");
//     error.textContent = "";
//     const person = {
//       name: nameValue,
//       email: emailValue,
//       password: passValue,
//     };
//     // const storedUser = localStorage.setItem('user', userString)
//     const oldUser = localStorage.getItem(`${emailValue}`);
//     if (oldUser == null) {
//       const userString = JSON.stringify(person);
//       const storedUser = localStorage.setItem(`${emailValue}`, userString);
//     } else error.textContent = "user already registered";
//     // console.log(person);
//     // console.log(userString);
//   }
//   registerForm.reset();
// });
// // function register(){
// //     console.log('submitted');
// // }
