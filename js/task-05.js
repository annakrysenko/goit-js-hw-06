const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');


const onNameInput = event => {
  console.log(event.currentTarget.value)
  if (event.currentTarget.value.length !== 0) {
    outputEl.textContent = event.currentTarget.value
  }
  else {
    outputEl.textContent ='Anonymous'
  }
}
  


inputEl.addEventListener('input', onNameInput)