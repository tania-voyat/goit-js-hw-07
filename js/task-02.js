const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const listRef = document.querySelector('#ingredients');
console.log(listRef);

const items = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;

  return li;
});

listRef.append(...items);
