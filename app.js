/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll(".button");

const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");

const storedValues = [];
const storedOperators = [];
const tempArrays = [];

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

// Using event delegation
calculator.addEventListener("click", (event) => {
  if (event.target.classList.contains("number")) {
    display.innerText += event.target.innerText;
    tempArrays.push(event.target.innerText);
  }

  if (event.target.innerText === "*") {
    addToTemp();
  }

  if (event.target.innerText === "+") {
    addToTemp();
  }

  if (event.target.innerText === "-") {
    addToTemp();
  }

  if (event.target.innerText === "/") {
    addToTemp();
  }

  if (event.target.innerText === "=") {
    storedValues.push(tempArrays.join(""));

    while (tempArrays.length) {
      tempArrays.pop();
    }

    const o = storedOperators.pop();
    const x = Number(storedValues.shift());
    const y = Number(storedValues.shift());

    display.innerText += `${event.target.innerText}${answerNow(x, y, o)}`;

    storedValues.push(answerNow(x, y, o));
  }

  if (event.target.innerText === "C") {
    display.innerText = "";

    while (storedValues.length) {
      storedValues.pop();
    }
    while (storedOperators.length) {
      storedOperators.pop();
    }
    while (tempArrays.length) {
      tempArrays.pop();
    }
  }
});

/*-------------------------------- Functions --------------------------------*/

const answerNow = (x, y, o) => {
  switch (o) {
    case "*":
      return x * y;
      break;
    case "+":
      return x + y;
      break;
    case "-":
      return x - y;
      break;
    case "/":
      return x / y;
      break;
  }
};

//function to display and store values
const addToTemp = () => {
  display.innerText += event.target.innerText;
  if (tempArrays.length >= 1) {
    storedValues.push(tempArrays.join(""));
    while (tempArrays.length) {
      tempArrays.pop();
    }
  } else {
    display.innerText = "";
    display.innerText = `${storedValues}${event.target.innerText}`;
  }
  storedOperators.push(event.target.innerText);
};
