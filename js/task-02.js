const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

console.log(listEl)

const markup = ingredients.map(item => {
  const itemEl = document.createElement('li')
  itemEl.textContent = item;
  itemEl.classList.add('item')

  return itemEl
})

const list = listEl.prepend(...markup)



console.log(list)