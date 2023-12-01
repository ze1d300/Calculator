const displayInput = $("#display-input");
const buttonsContainer = $("#buttons-container");
let currentInput = "";

const buttonIds = [
  "1",
  "2",
  "3",
  "/",
  "4",
  "5",
  "6",
  "*",
  "7",
  "8",
  "9",
  "-",
  "0",
  ".",
  "+",
  "=",
  "CE",
];
$(document).ready(() => {
  buttonIds.forEach((id) => {
    const button = $("<button>", { id, class: "button", text: id }).on(
      "click",
      handleButtonClick
    );
    buttonsContainer.append(button);
  });
});
const handleButtonClick = function () {
  const buttonValue = $(this).text();
  if (buttonValue == "=") {
    calculateResult();
  } else if (buttonValue == "CE") {
    clearEntry();
  } else {
    appendToDisplay(buttonValue);
  }
};

const appendToDisplay = (value) => {
  currentInput += value;
  displayInput.val(currentInput);
};
const clearEntry = () => {};
currentInput = currentInput.slice(0, -1);
displayInput.val(currentInput);
const calculateResult = () => {
  let result;
  result = eval(currentInput);
  if (!isNaN(result)) {
    displayInput.val(result);
    currentInput = result.toString();
  } else {
    displayInput.val("Error");
  }
};
