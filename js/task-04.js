const buttonDecrement = document.querySelector('[data-action="decrement"]')
const buttonIncrement = document.querySelector('[data-action="increment"]')
const value = document.querySelector('#value')

let counterValue = 0;
const onButtonClick = (event) => {

  if (event.currentTarget.dataset.action === buttonDecrement.dataset.action) {
    counterValue -= 1
    console.log(counterValue)
  }
  else if (event.currentTarget.dataset.action === buttonIncrement.dataset.action) {
    counterValue += 1
    console.log(counterValue)
  }
  value.textContent = counterValue
}


buttonDecrement.addEventListener('click', onButtonClick)
buttonIncrement.addEventListener('click', onButtonClick)




