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

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");

    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos / calcHeight) * 100);
    if (pos > 300) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#b9a0d0 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
