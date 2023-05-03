const counter = (displayNumber) => {
  const decrement = (document.querySelector(".decrement-button").onclick =
    () => {
      result = Number(displayNumber.textContent) - 1;
      if (result < 0) {
        result = 0;
      }
      displayNumber.textContent = result;
    });

  const increment = (document.querySelector(".increment-button").onclick =
    () => {
      result = Number(displayNumber.textContent) + 1;
      if (result > 25) {
        return;
      }
      displayNumber.textContent = result;
    });

  const restart = (document.querySelector(".restart-button").onclick = () => {
    result = 0;
    displayNumber.textContent = result;
  });
};

const startCounter = () => {
  let displayNumber = document.querySelector(".number");
  let result = "";
  counter(displayNumber);
};
startCounter();
