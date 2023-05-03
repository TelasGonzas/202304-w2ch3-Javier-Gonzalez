export const counter = (displayNumber) => {
  const decrementButton = document.querySelector(".decrement-button");
  const incrementButton = document.querySelector(".increment-button");
  const restartButton = document.querySelector(".restart-button");
  let result = 0;

  decrementButton.addEventListener("click", () => {
    result = displayNumber.textContent - 1;
    if (result < 0) {
      result = 0;
    }

    displayNumber.textContent = result;
  });

  incrementButton.addEventListener("click", () => {
    result = Number(displayNumber.textContent) + 1;
    if (result > 25) {
      return;
    }

    displayNumber.textContent = result;
  });

  restartButton.addEventListener("click", () => {
    result = 0;
    displayNumber.textContent = result;
  });
};

const startCounter = () => {
  const displayNumber = document.querySelector(".number");
  counter(displayNumber);
};

startCounter();

export default counter;
