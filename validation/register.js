const form = document.getElementById('form-register')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')

form.addEventListener(('submit'), (e) => {
    e.preventDefault()

    const result = checkInputs()

    if (Object.keys(result).length > 1) {
        console.log(result)
    } else {
        console.log(null)
    }
    

})

function checkInputs() {
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const confirmPasswordValue = confirmPassword.value.trim()
    const data = {}

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank')
    } else {
        setSuccessFor(email)
        data.email = emailValue
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank')
    } else {
        setSuccessFor(password, '')
    }

    if (confirmPasswordValue === '') {
        setErrorFor(confirmPassword, 'Password cannot be blank')
    } else if (passwordValue !== confirmPasswordValue) {
        setErrorFor(confirmPassword, "Password doesn't match")
    } else {
        setSuccessFor(confirmPassword)
        data.password = passwordValue;
    }

    return data
}

function setErrorFor(input, message) {
    const formControl = input.parentElement
    const smallText = formControl.querySelector('small')
    formControl.className = 'input-control error'
    smallText.innerText = message
}

function setSuccessFor(input) {
    const formControl = input.parentElement
    formControl.className = 'input-control success'
}