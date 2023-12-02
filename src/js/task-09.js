function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeClrBtn = document.querySelector(".change-color");
const bodyElement = document.querySelector("body");
const nameColor = document.querySelector(".color");

const bgrClrBody = (() => {
  const newHexColor = getRandomHexColor(); 
  bodyElement.style.backgroundColor = newHexColor;
  nameColor.textContent = newHexColor;
});

changeClrBtn.addEventListener("click", bgrClrBody);
