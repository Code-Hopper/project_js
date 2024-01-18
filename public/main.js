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

let typingText = () => {

    if (index < type_string.length) {
        element.innerHTML = element.innerHTML + type_string.charAt(index)
        index++
    }

    setTimeout(typingText, speed);

}

typingText()

// text-change on image click

let grid_images = document.getElementsByClassName("grid-images")

console.log(grid_images)

for (let element of grid_images) {
    element.addEventListener("click", (event) => {

        // console.log(element.dataset.images)

        let the_img_element_has = element.children[0].src

        let c_d_m = element.children[0].dataset.images

        console.log(the_img_element_has)

        let selected_image = element.children[0].dataset.images

        console.log(selected_image)

        let where_to_write = document.getElementById("write-content")

        let the_src_of_1 = document.querySelector(".grid-images:nth-child(1) img").src

        let c_d_c = document.querySelector(".grid-images:nth-child(1) img").dataset.images


        switch (selected_image) {
            case "image1": where_to_write.innerHTML = "image 1 is selected !"
                document.querySelector(".grid-images:nth-child(1) img").src = the_img_element_has
                element.children[0].src = the_src_of_1

                document.querySelector(".grid-images:nth-child(1) img").dataset.images = c_d_m
                element.children[0].dataset.images = c_d_c

                break;
            case "image2": where_to_write.innerHTML = "image 2 is selected !"
                document.querySelector(".grid-images:nth-child(1) img").src = the_img_element_has
                element.children[0].src = the_src_of_1

                document.querySelector(".grid-images:nth-child(1) img").dataset.images = c_d_m
                element.children[0].dataset.images = c_d_c

                break;
            case "image3": where_to_write.innerHTML = "image 3 is selected !"
                document.querySelector(".grid-images:nth-child(1) img").src = the_img_element_has
                element.children[0].src = the_src_of_1

                document.querySelector(".grid-images:nth-child(1) img").dataset.images = c_d_m
                element.children[0].dataset.images = c_d_c

                break;
            case "image4": where_to_write.innerHTML = "image 4 is selected !"
                document.querySelector(".grid-images:nth-child(1) img").src = the_img_element_has
                element.children[0].src = the_src_of_1

                document.querySelector(".grid-images:nth-child(1) img").dataset.images = c_d_m
                element.children[0].dataset.images = c_d_c

                break;
            case "image5": where_to_write.innerHTML = "image 5 is selected !"
                document.querySelector(".grid-images:nth-child(1) img").src = the_img_element_has
                element.children[0].src = the_src_of_1

                document.querySelector(".grid-images:nth-child(1) img").dataset.images = c_d_m
                element.children[0].dataset.images = c_d_c

                break;
            case "image6": where_to_write.innerHTML = "image 6 is selected !"
                document.querySelector(".grid-images:nth-child(1) img").src = the_img_element_has
                element.children[0].src = the_src_of_1

                document.querySelector(".grid-images:nth-child(1) img").dataset.images = c_d_m
                element.children[0].dataset.images = c_d_c

                break;
        }
    })
}


// slider

let prevBtn = $("#prevBtn")
let nextBtn = $("#nextBtn")

// slide to the right 

let increaseLeft = () => {
    let curentLeft = $(".slider-content").css("left")
    $(".slider-content").css("left", () => {
        if (parseInt(curentLeft) == 0) {
            return 0
        } else {
            return parseInt(curentLeft) + 100
        }
    })
}

// slide to the left 

let decreaseLeft = () => {

    let finalWidth = $(".slider-content").css("width")

    console.log(parseInt(finalWidth))

    let curentLeft = $(".slider-content").css("left")

    console.log(Math.abs(parseInt(curentLeft)))


    $(".slider-content").css("left", () => {
        if(Math.abs(parseInt(curentLeft)) > parseInt(finalWidth)){
            console.log("wait")
            return finalWidth
        }else{
            return parseInt(curentLeft) - 100
        }
    })
}

// btn working

prevBtn.on("click", increaseLeft)
nextBtn.on("click", decreaseLeft)