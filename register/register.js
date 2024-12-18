const form = document.getElementById("form-register");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const smallText = document.querySelector(".regist-fail");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const dataRegister = checkInputs();
    if (dataRegister !== null && Object.keys(dataRegister).length > 1) {
        localStorage.setItem("user", JSON.stringify(dataRegister));
        location.href = "../login/login.html";
    } else {
        smallText.textContent = "Please Check Your Password or Email Correctly";
        smallText.style.color = "red";
        smallText.removeAttribute("hidden");
    }

});

function checkInputs() {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();
    const data = {};

    if (emailValue === "") {
        setErrorFor(email, "Email cannot be blank");
    } else {
        setSuccessFor(email);
        data.email = emailValue;
    }

    if (passwordValue === "") {
        setErrorFor(password, "Password cannot be blank");
    } else {
        setSuccessFor(password, "");
    }

    if (confirmPasswordValue === "") {
        setErrorFor(confirmPassword, "Password cannot be blank");
    } else if (passwordValue !== confirmPasswordValue) {
        setErrorFor(confirmPassword, "Password doesn't match");
    } else {
        setSuccessFor(confirmPassword);
        data.password = passwordValue;
    }

    return data.email && data.password ? data : null;
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const smallText = formControl.querySelector("small");
    formControl.className = "input-control error";
    smallText.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "input-control success";
}

function showPassword() {
    const x = document.querySelector("#password");
    const y = document.querySelector("#confirm-password");
    if (x.type === "password" && y.type === "password") {
        x.type = "text";
        y.type = "text";
    } else {
        x.type = "password";
        y.type = "password";
    }
}

// function validateEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

// function validatePassword(password) {
//     // Password harus minimal 8 karakter
//     // Mengandung minimal 1 huruf besar, 1 huruf kecil, 1 angka, dan 1 karakter khusus
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     return passwordRegex.test(password);
// }