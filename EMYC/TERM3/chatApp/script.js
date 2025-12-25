const container = document.getElementById("container");
const inputOne = document.getElementById("inputOne");
const inputTwo = document.getElementById("inputTwo");
const iconBtnOne = document.getElementById("iconBtnOne");
const iconBtnTwo = document.getElementById("iconBtnTwo");
const sendBtnOne = document.getElementById("sendBtnOne");
const sendBtnTwo = document.getElementById("sendBtnTwo");

let messages = JSON.parse(localStorage.getItem("messages")) || [];
messageDisplay();

// let senderOne = "user2";
function buttonToggle(inputEl, sendBtn, iconBtn) {
  if (inputEl.value.trim().length > 0) {
    sendBtn.classList.remove("hidden");
    iconBtn.classList.add("hidden");
  } else {
    sendBtn.classList.add("hidden");
    iconBtn.classList.remove("hidden");
  }
}

function messageSend(sender, input, sendBtn, iconBtn) {
  const text = input.value.trim();
  if (!text) return;

  const message = {
    sender,
    text,
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString(),
  };

  messages.push(message);
  localStorage.setItem("messages", JSON.stringify(messages));
  messageDisplay();

  input.value = "";
  buttonToggle(input, sendBtn, iconBtn);
}
sendBtnOne.addEventListener("click", () => {
  messageSend("user1", inputOne, sendBtnOne, iconBtnOne);
});
sendBtnTwo.addEventListener("click", () => {
  messageSend("user2", inputTwo, sendBtnTwo, iconBtnTwo);
});

inputOne.addEventListener("input", () => {
  buttonToggle(inputOne, sendBtnOne, iconBtnOne);
});
inputTwo.addEventListener("input", () => {
  buttonToggle(inputTwo, sendBtnTwo, iconBtnTwo);
});

function messageDisplay() {
  container.innerHTML = "";
  let lastDate = null;
  messages.forEach((message) => {
    if (message.date !== lastDate) {
      const date = document.createElement("div");
      date.className = "text-sm text-gray-500 my-2 text-center";
      date.textContent = message.date;

      container.append(date);
      lastDate = message.date;
    }

    const insideDiv = document.createElement("div");
    insideDiv.className =
      message.sender === "user1"
        ? "flex justify-start mb-2"
        : "flex justify-end mb-2";

    const messageDiv = document.createElement("div");
    messageDiv.className =
      message.sender === "user1"
        ? "bg-gray-200 text-black p-3 rounded-lg"
        : "bg-orange-500 text-white p-3 rounded-lg";

    messageDiv.innerHTML = `
        <p>${message.text}</p>
        <span class='text-xs text-right opacity-70'>${message.time}</span>
        `;
    insideDiv.append(messageDiv);
    container.append(insideDiv);
  });
}

inputOne.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    messageSend("user1", inputOne, sendBtnOne, iconBtnOne);
  }
});
inputTwo.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    messageSend("user2", inputTwo, sendBtnTwo, iconBtnTwo);
  }
});
