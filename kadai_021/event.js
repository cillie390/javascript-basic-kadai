const textElement = document.getElementById("text");
const buttonElement = document.getElementById("btn");

btn.addEventListener("click", () => {
  setTimeout(() => {
    text.textContent = "ボタンをクリックしました";
  }, 2000);
});
