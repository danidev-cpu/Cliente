let email = document.getElementById("email");
let password = document.getElementById("password");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let btnSubmit = document.getElementById("btnSubmit");
let form = document.getElementById("loginForm");

let isEmailValid = false;
let isPasswordValid = false;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^.{8,10}$/;

function checkForm() {
    if (isEmailValid && isPasswordValid) {
        btnSubmit.disabled = false;
    } else {
        btnSubmit.disabled = true;
    }
}

email.addEventListener("blur", () => {
    if (!emailRegex.test(email.value)) {
        emailError.textContent =
            "Tiene que tener el formato xxxx@yyyy.zzzz";
        isEmailValid = false;
    } else {
        emailError.textContent = "";
        isEmailValid = true;
    }
    checkForm();
});

email.addEventListener("focus", () => {
    emailError.textContent = "";
});

password.addEventListener("blur", () => {
    if (!passwordRegex.test(password.value)) {
        passwordError.textContent =
            "La contraseña tiene que tener entre 8 y 10 caracteres";
        isPasswordValid = false;
    } else {
        passwordError.textContent = "";
        isPasswordValid = true;
    }
    checkForm();
});

password.addEventListener("focus", () => {
    passwordError.textContent = "";
});

form.addEventListener("submit", (event) => {
    if (!isEmailValid || !isPasswordValid) {
        event.preventDefault();
    }
});