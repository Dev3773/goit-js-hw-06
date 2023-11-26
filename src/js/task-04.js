let counterValue = 0;
let step = 1;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterRef = document.querySelector("#value");

const ubdateValue = () => {
  counterRef.textContent = counterValue;
};

const handleDecrement = () => {
  counterValue -= step;
  ubdateValue();
};

const handleIncrement = () => {
  counterValue += step;
  ubdateValue();
};

decrementBtn.addEventListener("click", handleDecrement);
incrementBtn.addEventListener("click", handleIncrement);

