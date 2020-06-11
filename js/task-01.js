const listRef = document.querySelector('#categories').children;
console.log(`В списке ${listRef.length} категории`);

Array.from(listRef).forEach(element => {
  const heading = element.querySelector('h2').textContent;
  const items = element.querySelectorAll('li');

  console.log(`Категория: ${heading}
Количество элементов: ${items.length}`);
});
