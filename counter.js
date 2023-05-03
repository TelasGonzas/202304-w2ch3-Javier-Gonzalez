export const counter = (displayNumber) => {
  document.querySelector(".decrement-button").onclick = () => {
    result = Number(displayNumber.textContent) - 1;
    if (result < 0) {
      result = 0;
    }
    displayNumber.textContent = result;
  };

  document.querySelector(".increment-button").onclick = () => {
    result = Number(displayNumber.textContent) + 1;
    if (result > 25) {
      return;
    }
    displayNumber.textContent = result;
  };

  document.querySelector(".restart-button").onclick = () => {
    result = 0;
    displayNumber.textContent = result;
  };
};

const startCounter = () => {
  let displayNumber = document.querySelector(".number");
  let result = "";
  counter(displayNumber);
};
startCounter();
