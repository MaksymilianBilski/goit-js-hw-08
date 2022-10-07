const input = document.querySelector(`input[type="email"]`);
const textarea = document.querySelector(`textarea[name="message"]`);
const button = document.querySelector(`button[type="submit"]`);

const callback1 = () => {
  localStorage.setItem('feedback-form-state', { input: input.value });
};

const callback2 = () => {
  localStorage.setItem('feedback-form-state', { textarea: textarea.value });
};
input.addEventListener('input', callback1);
textarea.addEventListener('input', callback2);

console.log(localStorage.getItem('textarea'));
console.log(localStorage.getItem('input'));
