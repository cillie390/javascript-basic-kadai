const textElement = document.getElementById("text");
const buttonElement = document.getElementById("btn");

function changeText() {
  textElement.textContent = "ボタンをクリックしました";
}

buttonElement.addEventListener("click", changeText);
