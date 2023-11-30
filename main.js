const billInput = document.querySelector("#bill");
const tipButtons = document.querySelectorAll("[data-number]");
const customTip = document.querySelector("#custom-input");
const numOfPeople = document.querySelector("#num-of-people");
const numOfPeopleAlert = document.querySelector("#cant-be-zero");
const tipAmount = document.querySelector("#outcome-a");
const totalAmount = document.querySelector("#outcome-b");
const resetButton = document.querySelector("#reset");

// Default values
let tipPercentage = ""; // Variable to store the clicked button's and custom text content
let billValue = 0.0;
let numOfPeopleValue = 1;

//Event Listeners
billInput.addEventListener("keyup", (e) => {
  billValue = Number(e.target.value);
  console.log(billValue);
});

numOfPeople.addEventListener("keyup", (e) => {
  // numOfPeopleValue = 1;
  numOfPeopleValue = Number(e.target.value);
  console.log(numOfPeopleValue);
});

customTip.addEventListener("keyup", (e) => {
  tipPercentage = "";
  tipPercentage = Number(e.target.value);
  console.log(tipPercentage);
  calculate();
});

tipButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    tipPercentage = "";
    tipPercentage = e.target.textContent.slice(0, -1); // Remove the last character (%)
    console.log(tipPercentage);
    calculate();
  });
});

// Handle keydown events for input fields
const inputElements = [billInput, numOfPeople, customTip];

inputElements.forEach((inputElement) => {
  inputElement.addEventListener("keydown", validateInput);
}); // Add keydown event listener to all input elements

function validateInput(e) {
  const invalidChars = ["-", "+", "e"];

  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
}

function cantBeZeroAlert() {
  const numOfPeopleValue = parseInt(numOfPeople.value);

  if (numOfPeopleValue === 0) {
    numOfPeopleAlert.style.visibility = "visible";
  } else {
    numOfPeopleAlert.style.visibility = "hidden";
  }
}
numOfPeople.addEventListener("input", cantBeZeroAlert);

function reset() {
  billInput.value = "";
  numOfPeople.value = "";
  customTip.value = "";
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
  numOfPeopleAlert.style.visibility = "hidden";
}
resetButton.addEventListener("click", reset);

function calculate() {
  let totalPerPerson = billValue / numOfPeopleValue;
  console.log(totalPerPerson);

  // if numOfPeopleValue = 0 - return

  // if (billValue >= 1) {
  //   totalAmount.textContent = (billValue * tipPercentage) / numOfPeople;
  //   let total = (billValue * (tipValue + 1)) / peopleValue;
  //   results[0].innerHTML = "$" + tipAmount.toFixed(2);
  //   results[1].innerHTML = "$" + total.toFixed(2);
  // }
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

// customTip.addEventListener("keyup", () => {
//     tipPercent = custom.value;
//     const tipAmount = bill.value * (tipPercent /100)
// });

console.log(tipPercentage);
