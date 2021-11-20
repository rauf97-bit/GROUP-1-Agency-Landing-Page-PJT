const hamburger = document.querySelector("#burger");
const navbar = document.querySelector("#navbar");

hamburger.addEventListener('click', ()=>{
    if (navbar.classList.contains("hidden")) {
        navbar.classList.remove("hidden")
    } else {
        navbar.classList.add("hidden")
    }
})