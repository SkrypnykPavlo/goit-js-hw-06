const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;
incrementButton.addEventListener('click', () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});
