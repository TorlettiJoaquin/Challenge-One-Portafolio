let menuBox = document.getElementById("menuBox");
let menuIcon = document.getElementById("menuIcon");

menuIcon.onclick = function () {
    menuBox.classList.toggle("open-menu");

    if (menuBox.classList.contains("open-menu")) {
        menuIcon.className = "fa-sharp fa-solid fa-xmark";
        console.log("menu abierto");
    } else {
        menuIcon.className = "fa-solid fa-bars";
        console.log("menu cerrado");
    }
};
