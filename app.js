/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll(".button");

const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");

const storedValues = [];
const storedOperators = [];
const tempArrays = [];

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
    display.innerText += event.target.innerText;
    storedValues.push(event.target.innerText);

    // if (event.target.classList.contains("number")) {
    //   tempArrays.push(event.target.innerText);
    //   console.log(`This are values in tempArrays: ${tempArrays}`);
    // } else {
    //   const newValue = tempArrays.join("");
    //   console.log(`This is the newValue: ${newValue}`);
    // }

    // issue here is because if 2 value number, then the array is 2 separate objects
    console.log(storedValues);
  }

  // switch (event.target.innerText) {
  //   case event.target.innerText === "*":
  //     display.innerText += event.target.innerText;
  //     storedOperators.push(event.target.innerText);
  //     console.log(storedOperators);
  //   }

  if (event.target.innerText === "*") {
    display.innerText += event.target.innerText;
    storedValues.push(storedValues.join(""));
    if (storedValues.length > 1) {
      storedValues.splice(0, storedValues.length - 1);
    } else {
    }

    console.log(storedValues); // check
    storedOperators.push(event.target.innerText);
    console.log(storedOperators); // check
  }

  // if (event.target.innerText === "*") {
  //   // Do something with this operator
  //   // can i store this?
  //   if (storedValues.length > 1) {
  //     display.innerText = "";
  //     display.innerText = storedValues[0] + event.target.innerText;
  //   } else {
  //     display.innerText += event.target.innerText;
  //     storedOperators.push(event.target.innerText);
  //     console.log(storedOperators);
  //   }
  // }

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
    console.log(`the storedValues is: ${storedValues}`); // check
    console.log(`the no. of storedValues object is: ${storedValues.length}`); // check
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
