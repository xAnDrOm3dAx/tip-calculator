const billInput = document.querySelector("#bill");
const tipButtons = document.querySelector(".button-container");
const customTip = document.querySelector("#custom-input");
const numOfPeople = document.querySelector("#num-of-people");
const tipAmount = document.querySelector("#outcome-a");
const totalAmount = document.querySelector("#outcome-b");
const resetButton = document.querySelector("#reset");













// Default Values
let billInputValue = 0.0; // default value
let numOfPeopleValue = 0; // default value

// Event Listeners
/*
billInput.addEventListener("keydown", (e) => {
  handleInputKeyDown(billInput, e);
});

numOfPeople.addEventListener("keydown", (e) => {
  handleInputKeyDown(numOfPeople, e);
});
*/

resetButton.addEventListener("click", () => {
  reset();
});

// Function to handle keydown events for input fields
const handleInputKeyDown = (inputField, e) => {
  const invalidChars = ["-", "+", "e"];

  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
};

// Other functions...
const reset = () => {
  billInput.value = "";
  numOfPeopleInput.value = "";
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
};


/* 
tip amount = bill amount * (tip percentage / 100)
tip amount per person = tip amount / number of people

total amount = bill amount + tip amount
total per person = total amount / number of people
*/

const

function calculateTip() {
  let tipAmount = billAmount * (tipPercentage / 100);
  let totalAmount = billAmount + tipAmount;
  let perPersonTip = tipAmount / numOfPeople;
  let perPersonAmount = totalAmount / numOfPeople;
}