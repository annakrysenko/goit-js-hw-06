const inputEmail = document.querySelector('[type="email"]');
const inputPassword = document.querySelector('[type="password"]');
const buttonSubmit = document.querySelector('[type="submit"]');
const formEl = document.querySelector('.login-form')

const onSubmit = event => {
  event.preventDefault()

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;


  if (email === "" || password === "") {
    alert('Всі поля повинні бути заповнені')
  }
  else {
    const formData = {
      email,  //Звідки бере значення? чому за межами об*єкту немає назви властивості
      password 
    }
    console.log(formData)
    event.currentTarget.reset();
  }
}

formEl.addEventListener('submit', onSubmit)
