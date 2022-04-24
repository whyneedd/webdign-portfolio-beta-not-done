const humbger = document.querySelector(".humbger");
const menu = document.querySelector(".humbgerMenu");
const load = document.querySelector(".back");
const pages = document.querySelector(".pagesweb");
const btn_scroll = document.querySelector(".btn-scroll")

// Menu Humbger
humbger.addEventListener("click", function() {
    humbger.classList.toggle("active");
    menu.classList.toggle("active");


})

window.onscroll = function() {
    var scrollY = window.scrollY;

    if (scrollY >= 100) {
        btn_scroll.classList.add("active")
    } else {
        btn_scroll.classList.remove("active")   
    }
}

btn_scroll.onclick = function() {
    document.documentElement.scrollTop="0";

}

var loadShow;

// Event loading 
function LoadTimes() {
    loadShow = setTimeout(ShowPagesWeb, 5);

}

function ShowPagesWeb() {
    document.querySelector(".back").style.display = "none"
    document.querySelector(".pagesweb").style.display = "block"

}
