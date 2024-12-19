const checkboxPin = document.querySelector("#checkbox-pin");
const submitBtn = document.querySelector("#submit-btn");
const pinInputs = document.querySelectorAll(".pin-input");

// Show Pin
function showPin() {
    pinInputs.forEach((element) => {
        if (checkboxPin.checked) {
            element.type = "password";
        } else {
            element.type = "number";
        }
    });
}

// Auto tab function
pinInputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        if (input.value.length === 1 && index < pinInputs.length - 1) {
            pinInputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && input.value.length === 0 && index > 0) {
            pinInputs[index - 1].focus();
        }
    });
});

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const pin = [];

    pinInputs.forEach((el) => {
        const pinInput = Number(el.value);

        if (pinInput) {
            pin.push(pinInput);

            const pinContainer = el.parentElement.parentElement;
            const loader = pinContainer.querySelector(".loader")
            const pinInputContainer = pinContainer.querySelector(".pin-input-container")
            pinContainer.style.justifyContent = "center"
            pinInputContainer.style.display = "none"
            loader.removeAttribute("hidden")
        } else {
            const pinContainer = el.parentElement.parentElement.parentElement;
            const smallText = pinContainer.querySelector("small");
            smallText.textContent = "Pin should be number!";
            smallText.style.color = "red";
            throw new Error("Pin should be number!");
        }
    });

    localStorage.setItem("pin", pin.join(""));
    console.log(localStorage.getItem("pin"));

    setTimeout(() => {
        window.location.href = "../landing-page/landing-page.html";
    }, 2000);
});
