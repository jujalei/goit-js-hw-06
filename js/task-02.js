const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById('ingredients');

for (const ingredient of ingredients) {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add('list');
  list.appendChild(listItem)
};


