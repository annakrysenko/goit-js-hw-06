const inputRangeEl = document.querySelector('#font-size-control')
const outputTextEl = document.querySelector('#text')

const onChangeOutputValue = event => {
  outputTextEl.setAttribute('style', `font-size: ${event.currentTarget.value}px`)
} 
  

inputRangeEl.addEventListener('input', onChangeOutputValue)

console.log(inputRangeEl.value)