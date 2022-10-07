const input = document.querySelector(`input[type="email"]`);
const textarea = document.querySelector(`textarea[name="message"]`);
const button = document.querySelector(`button[type="submit"]`);
const form = document.querySelector('feedback-form');
const obj = {
  email: '',
  textarea: '',
};

const callback1 = () => {
  obj.email = input.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
};

const callback2 = () => {
  obj.textarea = textarea.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
};

input.addEventListener('input', callback1);
textarea.addEventListener('input', callback2);

const check = () => {
  const load = localStorage.getItem('feedback-form-state');
  const parsedLoad = JSON.parse(load);
  if (localStorage.getItem('feedback-form-state') !== null) {
    input.value = parsedLoad.email;
    textarea.value = parsedLoad.textarea;
  }
  // if (){}
};
window.addEventListener('load', check);

console.log(localStorage.getItem('feedback-form-state'));
console.log(localStorage);
console.log(obj);
