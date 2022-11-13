const titles = document.querySelectorAll('h2')

console.log('Number of categories:', titles.length)

for (let i = 0; i < titles.length; i += 1) {
  const category = titles[i].textContent
  const elements = titles[i].parentNode.querySelectorAll('ul>li').length

  console.log('')
  console.log('Category:', category);
  console.log('Elements:', elements)

}