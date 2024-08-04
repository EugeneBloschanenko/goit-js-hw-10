

const STORAGE_KEY = "feedback-form-state";

let formData = {
    email: "",
    message: "",
};

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");
const email = form.elements.email;

function formInputHandler(e) {
    formData.email = email.value;
    formData.message = textarea.value;
    const data = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, data); 
}

form.addEventListener('input', formInputHandler);

try {
    const jsnData = localStorage.getItem(STORAGE_KEY) ?? "";
    formData = JSON.parse(jsnData);
    email.value = formData.email;
    textarea.value = formData.message;  
} catch {
    console.log("No saved data.");
}

function formSubmitHandler(e) {
    e.preventDefault();
    if (email.value || textarea.value) {
        console.log(formData);
        localStorage.removeItem(STORAGE_KEY);
        form.reset();
        formData = { email: "", message: "" };
    } else {
        alert("Fill please all fields"); 
    }  
}

form.addEventListener('submit', formSubmitHandler);