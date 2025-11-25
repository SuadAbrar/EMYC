console.log("...");
let form = document.getElementById("expenseForm");
let list = document.getElementById("expenseList");
let exTotal = document.getElementById("total");

let expenses = [];
function addExpense(name, amount) {
  let expense = {
    name: name,
    amount: Number(amount),
  };

  expenses.push(expense);
  displayExpenses();
  updateTotal();
}

function displayExpenses() {
  list.innerHTML = "";
  expenses.forEach((ex) => {
    list.innerHTML += ` <div><span>${ex.name}</span><span>${ex.amount}</span>
        </div> `;
  });
}

function updateTotal() {
  let total = 0;
  expenses.forEach((ex) => {
    total += ex.amount;
  });
  exTotal.innerText = "Total: " + total;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("expenseName").value;
  let amount = document.getElementById("expenseAmount").value;
  addExpense(name, amount);

  form.reset();
});
