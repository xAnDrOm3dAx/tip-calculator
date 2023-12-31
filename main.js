const billInput = document.querySelector("#bill");
const tipButtons = document.querySelectorAll("[data-number]");
const customTip = document.querySelector("#custom-input");
const numOfPeople = document.querySelector("#num-of-people");
const numOfPeopleAlert = document.querySelector("#cant-be-zero");
let tipAmount = document.querySelector("#outcome-a");
let totalAmount = document.querySelector("#outcome-b");
const resetButton = document.querySelector("#reset");

// Default values
let billValue = 0.0;
let numOfPeopleValue = 1;
let tipPercentage = ""; // Variable to store the clicked button's and custom text content

//Event Listeners
numOfPeople.addEventListener("input", cantBeZeroAlert);

resetButton.addEventListener("click", reset);

billInput.addEventListener("keyup", (e) => {
  billValue = Number(e.target.value);
  calculate();
});

numOfPeople.addEventListener("keyup", (e) => {
  numOfPeopleValue = Number(e.target.value);
  calculate();
});

tipButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    tipPercentage = "";
    tipPercentage = e.target.textContent.slice(0, -1); // Remove the last character (%)
    calculate();
  });
});

customTip.addEventListener("keyup", (e) => {
  tipPercentage = "";
  tipPercentage = Number(e.target.value);
  calculate();
});

// Handle input events for input fields
const inputElements = [billInput, numOfPeople, customTip];

inputElements.forEach((inputElement) => {
  inputElement.addEventListener("input", validateInput);
});

// Functions
function validateInput(e) {
  // Get the current value of the input
  const inputValue = e.target.value;

  // Use a regular expression to remove any characters that are not numbers or dots
  const cleanedValue = inputValue.replace(/[^0-9.]/g, "");

  // Update the input value with the cleaned value
  e.target.value = cleanedValue;
}

function cantBeZeroAlert() {
  const numOfPeopleValue = parseInt(numOfPeople.value);

  if (numOfPeopleValue === 0) {
    numOfPeopleAlert.style.visibility = "visible";
  } else {
    numOfPeopleAlert.style.visibility = "hidden";
  }
}

function reset() {
  billInput.value = "";
  numOfPeople.value = "";
  customTip.value = "";
  tipPercentage = "";
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
  numOfPeopleAlert.style.visibility = "hidden";
}

function calculate() {
  let totalTipAmount = billValue * (tipPercentage / 100);
  let totalAmountPerPerson = billValue / numOfPeopleValue;
  let totalTipPerPerson = totalTipAmount / numOfPeopleValue;
  let perPersonAmount = totalAmountPerPerson + totalTipPerPerson;

  if (numOfPeopleValue >= 1) {
    tipAmount.textContent = `$${totalTipPerPerson.toFixed(2)}`;
    totalAmount.textContent = `$${perPersonAmount.toFixed(2)}`;
  } else {
    return;
  }
}
