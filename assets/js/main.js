const humbger = document.querySelector(".humbger");
const menu = document.querySelector(".humngermenu");
const load = document.querySelector(".back");
const pages = document.querySelector(".pagesweb");

// Menu Humbger
humbger.addEventListener("click", function() {
    humbger.classList.toggle("active");
    menu.classList.toggle("active");


})

var loadShow;

// Event loading 
function LoadTimes() {
    loadShow = setTimeout(ShowPagesWeb, 1);

}

function ShowPagesWeb() {
    document.querySelector(".back").style.display = "none"
    document.querySelector(".pagesweb").style.display = "block"

}

