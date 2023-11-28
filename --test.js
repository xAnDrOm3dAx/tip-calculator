const form = document.querySelector("form");

// form inputs for bill and number of people
const billInput = document.querySelector(".bill");
const persons = document.querySelector(".count");

const tipButtons = document.querySelectorAll(".btn-container button");

// output display for the tip amount per person
const tipAmountOutput = document.querySelector(".tip-amount");
// output display for the total amount per person
const totalAmountOutput = document.querySelector(".tip-total");

// reset button
const resetBtn = document.querySelector(".resetbtn");

form.onsubmit = (e) => {
  e.preventDefault();
  tipButtons.forEach((button) => {
    button.onclick = () => {
      // the total bill
      let totalBill = billInput.value;
      // number of people
      let numPeople = persons.value;

      // total per person
      let totalPerPerson = totalBill / numPeople;
      // tip amount
      let tipAmount = totalBill * button.value;
      // tip amount per person
      let PersonTip = tipAmount / numPeople;

      // outputing the values
      tipAmountOutput.innerText = PersonTip;
      totalAmountOutput.innerText = totalPerPerson;
    };
  });
};

resetBtn.onclick = () => {
  billInput.value = "";
  persons.value = "";
  tipAmountOutput.innerText = "0";
  totalAmountOutput.innerText = "0";
};

// test 2

const people = document.getElementById("people");
const bill = document.getElementById("bill");
const tipPerPerson = document.getElementById("tip-figure");
const totalPerPerson = document.getElementById("total-figure");
const tips = document.getElementById("tips");
const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", () => {
  bill.value = "";
  people.value = "";
  tipPerPerson.textContent = `$0.00`;
  totalPerPerson.textContent = `$0.00`;
});

bill.addEventListener("keyup", () => {
  tips.addEventListener("click", (e) => {
    let tipPercent = " ";
    const targetClass = e.target.className;
    if (targetClass === "custom") {
      const custom = document.getElementById("custom");
      custom.addEventListener("keyup", () => {
        tipPercent = custom.value;
        const tipAmount = bill.value * (tipPercent / 100);
        people.addEventListener("keyup", () => {
          const valuePerPerson = bill.value / people.value;
          const tipPerPersonCal = tipAmount / people.value;
          tipPerPerson.textContent = `$${tipPerPersonCal.toFixed(2)}`;
          totalPerPerson.textContent = `$${valuePerPerson.toFixed(2)}`;
        });
      });
    }

    if (targetClass !== "custom") {
      tipPercent = targetClass.slice(0, -1);
      const tipAmount = bill.value * (tipPercent / 100);
      people.addEventListener("keyup", () => {
        const valuePerPerson = bill.value / people.value;
        const tipPerPersonCal = tipAmount / people.value;
        tipPerPerson.textContent = `$${tipPerPersonCal.toFixed(2)}`;
        totalPerPerson.textContent = `$${valuePerPerson.toFixed(2)}`;
      });
    }
  });
});
