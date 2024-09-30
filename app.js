/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll(".button");

const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");

const storedValues = [];
const storedOperators = [];

// const o = storedOperators.pop();
// const x = Number(storedValues.shift());
// const y = Number(storedValues.shift());

// console.log(x);
// console.log(o);
// console.log(y);
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

// Using forEach to assign event listeners
// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     // This log is for testing purposes to verify we're getting the correct value
//     console.log(event.target.innerText);
//     // Future logic to capture the button's value would go here...
//   });
// });

// Using event delegation
calculator.addEventListener("click", (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log
  console.log(event.target.innerText);

  // Example
  if (event.target.classList.contains("number")) {
    // Do something with a number
    /* 
    USER STORY
    ok -  i need to display the number
    - i need to store the value so I can use it
    */
    display.innerText += event.target.innerText;
    storedValues.push(event.target.innerText);
    // issue here is because if 2 value number, then the array is 2 separate objects
    console.log(storedValues);
  }

  if (event.target.innerText === "*") {
    // Do something with this operator
    // can i store this?
    display.innerText += event.target.innerText;
    storedOperators.push(event.target.innerText);
    console.log(storedOperators);
  }

  if (event.target.innerText === "+") {
    display.innerText += event.target.innerText;
    storedOperators.push(event.target.innerText);
    console.log(storedOperators);
  }

  if (event.target.innerText === "-") {
    display.innerText += event.target.innerText;
    storedOperators.push(event.target.innerText);
    console.log(storedOperators);
  }

  if (event.target.innerText === "/") {
    display.innerText += event.target.innerText;
    storedOperators.push(event.target.innerText);
    console.log(storedOperators);
  }

  if (event.target.innerText === "=") {
    const o = storedOperators.pop();
    const x = Number(storedValues.shift());
    const y = Number(storedValues.shift());

    // console.log(x);
    // console.log(o);
    // console.log(y);

 
    display.innerText += `${event.target.innerText} ${answerNow(x, y, o)}`;

    storedValues.push(answerNow(x, y, o));
    // run a function
    // display the final answer.
    // storedValues = ['6', '3'];
    // storedOperators = ['*'];
    // the above are stored as strings. so need to convert?
  }

  if (event.target.innerText === "C") {
    display.innerText = "";

    while (storedValues.length) {
      storedValues.pop();
    }
    while (storedOperators.length) {
      storedOperators.pop();
    }

    // to check if values are cleared
    console.log(storedValues);
    console.log(storedOperators);
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

/*
[REF]
const basicCalculator = (x, y, operator) => {
    const o = operator.toLowerCase();
    switch (o) {
      case "add":
        return x + y;
        break;
      case "subtract":
        return x - y;
        break;
      case "multiply":
        return x * y;
        break;
      case "divide":
        return x / y;
        break;
      default:
        return "Please key in values";
    }
  };
  
  console.log("Exercise 9 Result:", basicCalculator(10, 5, "subtract"));
*/
