/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll(".button");

const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");

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
    display.innerText += event.target.innerText;
  }

  // Example
  if (event.target.innerText === "*") {
    // Do something with this operator
    display.innerText += event.target.innerText;
  }
});

/*-------------------------------- Functions --------------------------------*/
