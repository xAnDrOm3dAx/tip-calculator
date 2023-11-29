const billInput = document.querySelector("#bill");
const tipButtons = document.querySelector(".button-container");
const customTip = document.querySelector("#custom-input");
const numOfPeople = document.querySelector("#num-of-people");
const tipAmount = document.querySelector("#outcome-a");
const totalAmount = document.querySelector("#outcome-b");
const resetButton = document.querySelector("#reset");

// Array of input elements
const inputElements = [billInput, numOfPeople, customTip];

// Function to handle keydown events for input fields
const handleInput = (inputField, e) => {
  const invalidChars = ["-", "+", "e"];

  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
};

const addInputEventListener = (inputElement) => {
  inputElement.addEventListener("keydown", (e) => {
    handleInput(inputElement, e);
  });
};

// Adding event listeners using the function
inputElements.forEach(addInputEventListener);
resetButton.addEventListener("click", reset);

// Other functions
function reset() {
  billInput.value = "";
  numOfPeople.value = "";
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
}

function calculateTip() {
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
