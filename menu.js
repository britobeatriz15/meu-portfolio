const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu-mobile");
const overlay = document.getElementById("overlay-menu");
const btnFechar = document.querySelector(".btn-fechar");

btnMenu.addEventListener("click", () => {
    menu.classList.add("abrir-menu");
});

btnFechar.addEventListener("click", () => {
    menu.classList.remove("abrir-menu");
});

overlay.addEventListener("click", () => {
    menu.classList.remove("abrir-menu");
});