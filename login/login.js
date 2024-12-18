// const inputControl = document.getElementById("form-login-input");
const form = document.querySelector("#form-login");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const checkboxPassword = document.querySelector("#checkbox");

const criteriaEmail = (email) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
};
const criteriaPassword = (password) => {
    return password.length >= 8;
};

const setError = (element, message) => {
    const inputControl = element.parentElement.parentElement;
    const errorDisplay = inputControl.querySelector("small");

    errorDisplay.textContent = message;
    errorDisplay.style.color = "red";
    element.parentElement.style.borderColor = "red";
    // inputControl.classList.add("error");
    // inputControl.classList.remove("success");
};
const setSuccess = (element) => {
    const inputControl = element.parentElement.parentElement;
    const errorDisplay = inputControl.querySelector("small");

    errorDisplay.textContent = "";
    element.parentElement.style.borderColor = "green";
    // inputControl.classList.add("success");
    // inputControl.classList.remove("error");
};

const validateEmailField = () => {
    const emailValue = email.value.trim();

    if (emailValue === "") {
        setError(email, "Email tidak boleh kosong");
        return false;
    } else if (!criteriaEmail(emailValue)) {
        setError(email, "Masukkan email yang valid");
        return false;
    } else {
        setSuccess(email);
        return true;
    }
};
email.addEventListener("input", validateEmailField);

const validatePasswordField = () => {
    const passwordValue = password.value.trim();

    if (passwordValue === "") {
        setError(password, "Email tidak boleh kosong!");
        return false;
    } else if (!criteriaPassword(passwordValue)) {
        setError(password, "Password minimal 8 karakter!");
        return false;
    } else {
        setSuccess(password);
    }
};
password.addEventListener("input", validatePasswordField);
function showPassword() {
    if (checkboxPassword.checked) {
        password.type = "text";
        confirmPasswordInput.type = "text";
    } else {
        password.type = "password";
        confirmPasswordInput.type = "password";
    }
}
function showModal() {
    const modal = document.getElementById("myModal");
    const cancel = document.querySelector(".cancel")

    modal.style.display = "block";

    cancel.onclick = function() {
        modal.style.display = "none"
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const dataRegister = JSON.parse(localStorage.getItem("user"));
    const { email, password } = dataRegister;
    const registedEmail = email;
    const registedPassword = password;
    const isEmailValid = validateEmailField();
    const isPasswordValid = validatePasswordField();

    if (isEmailValid === registedEmail && isPasswordValid === registedPassword) {
        localStorage.setItem("statusUser", true);
        location.href = "../enter-pin/enter-pin.html";
        return;
    } else {
        console.log("Login Gagal");
        showModal();
        throw new Error("Login failed! Make sure data is correct!");
    }
});
