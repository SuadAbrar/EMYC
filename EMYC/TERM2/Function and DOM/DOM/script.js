// let abe = document.querySelector('.nav-list .nav-item:last-child')
// console.log(abe);

let kebe = document.getElementById("text-input");
console.log(kebe.value);

setTimeout(() => {
  kebe.value = "new value";
  console.log(kebe.value);
}, 3000);

//
let zeyd = document.querySelector(".demo-text");
console.log(zeyd.innerText);
console.log(zeyd.textContent);

let ahmed = document.getElementById("style-demo");
setTimeout(() => {
  ahmed.style.backgroundColor = "green";
  ahmed.style.padding = "40px";
}, 3000);

//
let a1 = document.getElementById("class-btn-1");
let a2 = document.getElementById("class-btn-2");
let a3 = document.getElementById("class-btn-3");

// 
a1.addEventListener("click", () => {
  ahmed.classList.add("highlighted");
});

// 
a2.addEventListener("click", () => {
  ahmed.classList.remove("highlighted");
});

// 
a3.addEventListener("click", () => {
  ahmed.classList.toggle("dark-mode");
});

let ali = document.getElementById('demo-image')
console.log(ali.getAttribute('src')); 

// ali.setAttribute('src', 'http://.....' )
ali.setAttribute('alt', 'sth')