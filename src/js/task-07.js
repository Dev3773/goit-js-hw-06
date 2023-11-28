const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

const rangeSize = ((event) => {
  textRef.style.fontSize = event.currentTarget.value + 'px';
});

inputRef.addEventListener("input", rangeSize);

