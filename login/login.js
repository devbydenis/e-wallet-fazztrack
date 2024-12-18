const form = document.getElementById('form-login')
const inputControl = document.getElementById("form-login-input");
const email = document.getElementById('email')
const password = document.getElementById('password')
const smallText = document.getElementById("fail");

console.log(smallText)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const dataRegist = JSON.parse(localStorage.getItem("user"));

    if (email.value === dataRegist.email && password.value === dataRegist.password) {
        window.location.href = './enter-pin.html'
        alert("login success")
        return
    } 
    
    if (email.value !== dataRegist.email || password.value !== dataRegist.password) {
        smallText.textContent = "Please Check Your Password or Email Correctly";
        smallText.style.color = "red";
        smallText.removeAttribute("hidden");
    }
    // console.log(JSON.parse(dataRegist))
})


const showPassword = document.getElementById("show-password")
const targetPassword = document.getElementById("password")

showPassword.addEventListener("click", (event) => {
    if (targetPassword.type === "password") {
        targetPassword.type = "text"
    } else {
        targetPassword.type = "password"
    }
})
