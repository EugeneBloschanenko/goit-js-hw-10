import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".feedback-form");
const radioBtnGroup = form.querySelector(".radio-group");
const delayInput = form.querySelector('form input[name="delay"]');
let delay = null;
let state = "";

radioBtnGroup.addEventListener("click", getRadioState);
delayInput.addEventListener("input", getDelay);
form.addEventListener("submit", formSubmitHandler);

function getRadioState(e) { 
    if (e.target.type !== "radio") {
        return;
    }
    console.log(e.target.type); 
    console.log(e.target.value); 
    return state = e.target.value;
}

function getDelay(e) {
    console.log(e.target.value); 
    return delay = e.target.value;
}

function formSubmitHandler(e) {
    e.preventDefault();
    genNewPromis(delay, state);
}

function genNewPromis(delay, state) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);  
    });

    promise
        
        .then((message) => 
    iziToast.success({
    title: `Fulfilled promise in ${message}ms`,
    message: '',
    position: 'topCenter'
    }))

        .catch ((error) =>
    iziToast.error({
    title: `Rejected promise in ${error}ms`,
    message: '',
    position: 'topCenter'
    }));
} 


