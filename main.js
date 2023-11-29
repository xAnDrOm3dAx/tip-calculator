const billInput = document.querySelector("#bill");
const tipButtons = document.querySelectorAll("[data-number]");
const customTip = document.querySelector("#custom-input");
const numOfPeople = document.querySelector("#num-of-people");
const tipAmount = document.querySelector("#outcome-a");
const totalAmount = document.querySelector("#outcome-b");
const resetButton = document.querySelector("#reset");

// Global Variables
let tipPercentage = ""; // Variable to store the clicked button's text content

//Event Listeners
resetButton.addEventListener("click", reset);

tipButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    tipPercentage = e.target.textContent.slice(0, -1); // Remove the last character (which is '%');
    console.log(tipPercentage);
  });
});

// Array of input elements
const inputElements = [billInput, numOfPeople, customTip];

// Function to handle keydown events for input fields
function handleInput(inputField, e) {
  const invalidChars = ["-", "+", "e"];

  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
}

function addInputEventListener(inputElement) {
  inputElement.addEventListener("keydown", (e) => {
    handleInput(inputElement, e);
  });
}

inputElements.forEach(addInputEventListener); // Adding event listeners using the function

function reset() {
  billInput.value = "";
  numOfPeople.value = "";
  customTip.value = "";
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
}

function calculate() {
  /* 
tip amount = bill amount * (tip percentage / 100)
tip amount per person = tip amount / number of people

total amount = bill amount + tip amount
total per person = total amount / number of people
*/
  // let tipAmount = billAmount * (tipPercentage / 100);
  // let totalAmount = billAmount + tipAmount;
  // let perPersonTip = tipAmount / numOfPeople;
  // let perPersonAmount = totalAmount / numOfPeople;
}
