console.log("I am here");

var display = document.getElementById("display");
var buttons = Array.from(document.getElementsByClassName("button"));

console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "0";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Err";
        }
        break;
      case "←":
        display.innerText = display.innerText.slice(0, -1);
        break;
      default:
        if (display.innerText == "0") {
          display.innerText = e.target.innerText;
        } else {
          display.innerText += e.target.innerText;
        }
    }
  });
});

function printDigits(val) {
  let input = document.getElementById("input-view").value;
  if (input == 0) {
  }
}

function equalsTo() {
  let input = document.getElementById("input-view").value;
  let output = eval(input);
  document.getElementById("display").innerHTML = output;
}
