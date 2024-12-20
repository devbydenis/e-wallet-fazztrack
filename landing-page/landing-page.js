const sidebar = document.querySelector(".sidebar");
const body = document.querySelector("body");
const brandsLogo = document.querySelector(".brands-logo").cloneNode(true);
const brandsLogoContainer = document.querySelector(".brands-logo-container");
brandsLogoContainer.appendChild(brandsLogo);

function toggleMenu() {
    sidebar.classList.toggle("active");
    body.style.overflowY = "hidden";
}

sidebar.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    body.style.overflowY = "visible";
});
