const amountTransfer = document.getElementById("nominal");
const amountNotes = document.getElementById("notes");
const modal = document.querySelector(".modal");
const container = document.querySelector(".people-information");
const submitBtn = document.querySelector(".button-submit-transfer");
const pin = 123456;

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    modal.style.display = "block";
});

const inputs = document.querySelectorAll(".pin-input");
const modalBtn = document.getElementById("modal-btn");

console.log(inputs);
console.log(modalBtn);

modalBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const verificationPin = [];

    inputs.forEach((el) => {
        verificationPin.push(el.value);
    });

    console.log();
    

    if (verificationPin.join("") === localStorage.getItem("pin")) {
      window.location.href = "../modal/transfer-success.html"  
    } else {
        window.location.href = "../modal/transfer-success.html"  
    }

});
