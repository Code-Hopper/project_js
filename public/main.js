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

document.addEventListener("click", () => {
    document.getElementById("services-dropdown").classList.add("d-none")
})

// typed text animation

let element = document.getElementById("typed-text")

let index = 0;

let type_string = "< Code Hopper /> !" 

let speed = 150;

let typingText = () =>{
    
    if(index < type_string.length){
        element.innerHTML = element.innerHTML + type_string.charAt(index) 
        index++
    }

    setTimeout(typingText, speed);

}

typingText()