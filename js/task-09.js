function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color')
const colorTextEl = document.querySelector('.color')
const bodyEl = document.querySelector('body')



const onChangeColor = event => {
  const randomColor = getRandomHexColor()
  bodyEl.setAttribute('style', `background-color:${randomColor}`)
  colorTextEl.textContent = randomColor
}

buttonEl.addEventListener('click', onChangeColor)