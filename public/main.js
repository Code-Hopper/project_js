// Starting AOS
AOS.init()
// AOS

// navbar

let navbar = document.getElementById("navbar-content")

let historyClasses = navbar.classList

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navbar.classList.add("size-down")
    } else {
        navbar.classList.remove("size-down")
    }
})

let serviceDropdownButton = document.getElementById("service-button")

serviceDropdownButton.addEventListener("mouseover", () => {
    document.getElementById("services-dropdown").classList.remove("d-none")
})

serviceDropdownButton.addEventListener("click", () => {
    document.getElementById("services-dropdown").classList.add("d-none")
})