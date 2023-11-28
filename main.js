const billInput = document.querySelector("#bill");
const tipButtons = document.querySelector(".button-container");
const customTip = document.querySelector("#custom-input");
const numOfPeople = document.querySelector("#num-of-people");
const tipAmount = document.querySelector("#outcome-a");
const totalAmount = document.querySelector("#outcome-b");
const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", () => {
  reset();
});

// functions
const reset = () => {
  billInput.value = "";
  customTip.value = "";
  numOfPeople.value = "";
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
};
