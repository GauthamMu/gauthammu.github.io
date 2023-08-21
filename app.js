const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
navToggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
});
const ScrollToTop = document.querySelector("#ScrollToTop");
ScrollToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})
