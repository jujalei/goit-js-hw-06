function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputContainet = document.getElementById("controls");
const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxContainer = document.getElementById("boxes");

btnDestroy.addEventListener("click", () => {
  boxContainer.innerHTML = '';
  input.value = "";
});

function createBoxes() {
  const amount = input.value;

  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.style.width = `${30 + i * 10}px`;
    newDiv.style.height = `${30 + i * 10}px`;
    newDiv.style.backgroundColor = getRandomHexColor();

    boxContainer.appendChild(newDiv);
  }
}

btnCreate.addEventListener("click", createBoxes);
