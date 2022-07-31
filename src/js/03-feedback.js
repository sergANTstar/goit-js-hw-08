import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const STOREG_KEY = 'feedback-form-state';


form.addEventListener('input', throttle(onTextareaData, 500));
form.addEventListener('submit', onFormSubmit);

const formData = {};

function onTextareaData(e) {
    
    formData[e.target.name] = e.target.value;
    console.log(formData);
    localStorage.setItem(STOREG_KEY, JSON.stringify(formData));

}

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STOREG_KEY)

}

const textarea = document.querySelector('textarea');
const email = document.querySelector('input');

populateTextarea()

function populateTextarea() {
    const saveMessage = JSON.parse(localStorage.getItem(STOREG_KEY));
    if (saveMessage) {
        textarea.value = saveMessage.message;
        email.value = saveMessage.email;
    } else { saveMessage = ""

    }
   
}