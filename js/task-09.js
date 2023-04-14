function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// console.log(getRandomHexColor)

const bodyStyle = document.querySelector("body");
const colorName = document.querySelector(".color");
const buttonRandom = document.querySelector(".change-color");

buttonRandom.addEventListener("click", () => {
  bodyStyle.style.backgroundColor = getRandomHexColor();

  colorName.textContent = color;
});
