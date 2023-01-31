import throttle  from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const formObj = {
    email: document.querySelector('input'),
    message: document.querySelector('textarea'),
    form: document.querySelector('.feedback-form'),
};

const params = {};

formObj.form.addEventListener('input', throttle(onFormInput,500));
formObj.form.addEventListener('submit', onFormSubmit)

function onFormInput(event) {
    const key = event.target.name;
    params[key] = event.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(params));
}

function onFormSubmit(event) {
    event.preventDefault();

    console.log(params);

    event.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);
};

function getStorageData() {
    const data = localStorage.getItem(STORAGE_KEY);
    const parseData = JSON.parse(data);

    if(data) {
        if(parseData.email) {
            formObj.input.value = parseData.email;
            params[formObj.input.name] = parseData.email;
        }
        if(parseData.message) {
            formObj.textarea.value = parseMessage.message;
            params[formObj.textarea.name] = parseData.message;
        }
    }
}

getStorageData();