// const { clear } = require('i/lib/inflections');
// const _ = require('lodash');

// // html tags
// const input = document.querySelector(`input[type="email"]`);
// const textarea = document.querySelector(`textarea[name="message"]`);
// const button = document.querySelector(`button[type="submit"]`);
// const form = document.querySelector('feedback-form');
// // html tags

// //object and local storage
// const obj = {
//   email: '',
//   textarea: '',
// };
// const load = localStorage.getItem('feedback-form-state');
// const parsedLoad = JSON.parse(load);
// //object and local storage

// //callbacks and listeners for email and  for message
// const callback1 = () => {
//   obj.email = input.value;
//   localStorage.setItem('feedback-form-state', JSON.stringify(obj));
// };

// const callback2 = () => {
//   obj.textarea = textarea.value;
//   localStorage.setItem('feedback-form-state', JSON.stringify(obj));
// };
// input.addEventListener('input', _.debounce(callback1, 500));
// textarea.addEventListener('input', _.debounce(callback2, 500));
// //callbacks and listeners for email and  for message

// //submit event
// const handleSubmit = evt => {
//   evt.preventDefault();
//   if (input.value === '' || textarea.value === '') {
//     return alert('please fill all the fields!');
//   } else if (localStorage.length === 0) {
//     return;
//   } else if (parsedLoad !== '') {
//     obj.email = input.value;
//     obj.textarea = textarea.value;
//     console.log(obj);
//     console.log(localStorage);
//     localStorage.clear();
//   }
// };
// button.addEventListener('click', handleSubmit);
// //submit event

// //reload page
// const check = () => {
//   if (localStorage === null) {
//     return;
//   } else if (localStorage.getItem('feedback-form-state') === null) {
//     return;
//   } else if (parsedLoad.email !== null || parsedLoad.textarea !== null) {
//     input.value = parsedLoad.email;
//     textarea.value = parsedLoad.textarea;
//   }
// };
// window.addEventListener('load', check);
// //reload page


//2 metoda
// const form = document.querySelector('.feedback-form');
// const email = document.querySelector('input[type=email]');
// const text = document.querySelector('textarea');
// const btn = document.querySelector('button[type=submit]');
// const obj = {
//   email: email.value,
//   textarea: text.value,
// };

// const saveData = () => {
//   obj.email = email.value;
//   obj.textarea = text.value;
//   const parsedObj = JSON.stringify(obj);
//   localStorage.setItem('feedback-form-state', parsedObj);
// };

// const setData = () => {
//   const returnObj = localStorage.getItem('feedback-form-state');
//   const returnStringObj = JSON.parse(returnObj);
//   if (returnStringObj === null) {
//     return;
//   }
//   if (localStorage.getItem('feedback-form-state') === '') {
//     email.value = '';
//     text.value = '';
//   } else {
//     console.log(returnStringObj);
//     email.value = returnStringObj.email;
//     text.value = returnStringObj.textarea;
//   }
// };

// const clearStorage = e => {
//   e.preventDefault();
//   console.log(obj);
//   localStorage.clear();
// };

// form.addEventListener('input', saveData);
// form.addEventListener('submit', clearStorage);
// window.addEventListener('load', setData);
