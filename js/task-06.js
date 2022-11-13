const inputEl = document.querySelector('#validation-input');

const onInputCorrect = event => {
  console.log(inputEl.value.length, Number(event.currentTarget.dataset.length))
  if (inputEl.value.length === Number(event.currentTarget.dataset.length)) {
    inputEl.classList.remove('invalid')
    inputEl.classList.add('valid')
  }
  else {
    inputEl.classList.add('invalid')
    inputEl.classList.remove('valid')

  } 
}
  
  


inputEl.addEventListener('blur', onInputCorrect)