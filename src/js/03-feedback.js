import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

form.addEventListener('input', throttle(onTextareaInput, 500));
form.addEventListener('submit', onFormSubmit);

let formData = {};
controlAutoFillingForm();

function onTextareaInput(e) {
  formData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback - form - state', JSON.stringify(formData));
  return formData;
}

function controlAutoFillingForm() {
  const saveData = localStorage.getItem('feedback - form - state');

  if (saveData) {
    const returnData = JSON.parse(saveData);
    email.value = returnData.email;
    message.value = returnData.message;
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem('feedback - form - state');
}
