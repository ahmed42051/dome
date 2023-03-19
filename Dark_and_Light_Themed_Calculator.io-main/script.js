const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
let hasOperator = false;

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
      hasOperator = false;
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
      if (string.charAt(string.length - 1) == '+' || string.charAt(string.length - 1) == '-' || string.charAt(string.length - 1) == '*' || string.charAt(string.length - 1) == '/') {
        hasOperator = true;
      } else {
        hasOperator = false;
      }
    } else if (item.id == "equal") {
      if (display.innerText == "") {
        display.innerText = "Empty!";
        setTimeout(() => (display.innerText = ""), 2000);
      } else if (hasOperator) {
        display.innerText = "Invalid!";
        setTimeout(() => (display.innerText = ""), 2000);
        hasOperator = false;
      } else {
        display.innerText = eval(display.innerText);
        hasOperator = false;
      }
    } else if (item.id == '+' || item.id == '-' || item.id == '*' || item.id == '/') {
      if (hasOperator) {
        display.innerText = "Invalid!";
        setTimeout(() => (display.innerText = ""), 2000);
      } else {
        display.innerText += item.id;
        hasOperator = true;
      }
    } else {
      display.innerText += item.id;
      hasOperator = false;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;

themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};

