const inputValidation = document.querySelector('#validation-input');
const lengthValue = document.querySelector('input[data-length="6"]');

const noFocus = ((event) => {
  const expectedLength = Number.parseInt(lengthValue.dataset.length);
  const imputCurentValue = inputValidation.value.length;

  if (imputCurentValue === expectedLength) {
    inputValidation.classList.remove("invalid");
    inputValidation.classList.add("valid");
  } else {
    inputValidation.classList.remove("valid");
    inputValidation.classList.add("invalid");
  }
});

inputValidation.addEventListener("blur", noFocus);


