function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsDiv = document.getElementById('controls');
const createButton = controlsDiv.querySelector('[data-create]');
const destroyButton = controlsDiv.querySelector('[data-destroy]');
const boxesDiv = document.getElementById('boxes');

createButton.addEventListener('click', () => {
  const amount = parseInt(document.querySelector('input').value);

  if (!amount || amount < 1 || amount > 100) {
    alert('Joacă-te cu numere între 1 și 100.');
    return;
  }

  createBoxes(amount);
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const boxDimension = boxSize + i * 10;
    box.style.width = `${boxDimension}px`;
    box.style.height = `${boxDimension}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(box);
  }
}

function destroyBoxes() {
  while (boxesDiv.firstChild) {
    boxesDiv.removeChild(boxesDiv.firstChild);
  }
}