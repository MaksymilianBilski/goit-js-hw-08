!function(){var e=document.querySelector('input[type="email"]'),t=document.querySelector('textarea[name="message"]'),a=(document.querySelector('button[type="submit"]'),document.querySelector("feedback-form"),{email:"",textarea:""});e.addEventListener("input",(function(){a.email=e.value,localStorage.setItem("feedback-form-state",JSON.stringify(a))})),t.addEventListener("input",(function(){a.textarea=t.value,localStorage.setItem("feedback-form-state",JSON.stringify(a))}));window.addEventListener("load",(function(){var a=localStorage.getItem("feedback-form-state"),o=JSON.parse(a);null!==localStorage.getItem("feedback-form-state")&&(e.value=o.email,t.value=o.textarea)})),console.log(localStorage.getItem("feedback-form-state")),console.log(localStorage),console.log(a)}();
//# sourceMappingURL=03-feedback.897ac7cb.js.map
