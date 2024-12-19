const form = document.querySelector("#form-register");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
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
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
};
const setSuccess = (element) => {
    const inputControl = element.parentElement.parentElement;
    const errorDisplay = inputControl.querySelector("small");

    errorDisplay.textContent = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
};

const validateEmailField = () => {
    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
        setError(emailInput, "Email tidak boleh kosong!");
        return false;
    } else if (!criteriaEmail(emailValue)) {
        setError(emailInput, "Masukkan email yang valid!");
        return false;
    } else {
        setSuccess(emailInput);
        return true;
    }
};
const validatePasswordField = () => {
    const passwordValue = passwordInput.value.trim();

    if (passwordValue === "") {
        setError(passwordInput, "Password tidak boleh kosong!");
        return false;
    } else if (!criteriaPassword(passwordValue)) {
        setError(passwordInput, "Password minimal 8 karakter!");
        return false;
    } else {
        setSuccess(passwordInput);
        return true;
    }
};
const validateConfirmPasswordField = () => {
    const passwordValue = passwordInput.value.trim();
    const confirmPasswordValue = confirmPasswordInput.value.trim();

    if (confirmPasswordValue === "") {
        setError(confirmPasswordInput, "Konfirmasi password tidak boleh kosong");
        return false;
    } else if (confirmPasswordValue !== passwordValue) {
        setError(confirmPasswordInput, "Konfirmasi password tidak sesuai");
        return false;
    } else {
        setSuccess(confirmPasswordInput);
        return true;
    }
};

emailInput.addEventListener("input", validateEmailField);

passwordInput.addEventListener("input", () => {
    validatePasswordField();
    validateConfirmPasswordField();
});

confirmPasswordInput.addEventListener("input", validateConfirmPasswordField);

function showPassword() {
    if (checkboxPassword.checked) {
        passwordInput.type = "text";
        confirmPasswordInput.type = "text";
    } else {
        passwordInput.type = "password";
        confirmPasswordInput.type = "password";
    }
}
function showModal() {
    const modal = document.getElementById("myModal");
    const cancel = document.querySelector(".cancel");

    modal.style.display = "block";

    cancel.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isEmailValid = validateEmailField();
    const isPasswordValid = validatePasswordField();
    const isConfirmPasswordValid = validateConfirmPasswordField();
    const dataRegister = {
        email: emailInput.value,
        password: passwordInput.value,
    };

    // console.log(emailInput.value);
    // console.log(passwordInput.value);

    if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        // Jika validasi berhasil
        localStorage.setItem("user", JSON.stringify(dataRegister));
        location.href = "../login/login.html";
    } else {
        // Jika validasi gagal
        console.log("Validasi Gagal");
        showModal();
        throw new Error("Register failed! Make sure data is correct!");
    }
});
