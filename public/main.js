// Starting AOS
AOS.init()
// AOS

// navbar

let navbar = document.getElementById("navbar-content")

let historyClasses = navbar.classList

window.addEventListener("scroll",()=>{
    if(window.scrollY > 0){
        navbar.classList.add("size-down")
    }else{
        navbar.classList.remove("size-down")
    }
})