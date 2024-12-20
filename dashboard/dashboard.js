const sidebar = document.querySelector(".sidebar");
const body = document.querySelector("body");

function toggleMenu() {
    sidebar.classList.toggle("active");
    body.style.overflowY = "hidden";
}

sidebar.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    body.style.overflowY = "visible";
});
