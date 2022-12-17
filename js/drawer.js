// * global variables
let isOpen = false

// ? selector
const drawer_icon = document.querySelector(".nav_menu__icon");
const drawer = document.querySelector(".drawer");

// ? event listeners
drawer_icon.addEventListener("click", () => {
    slideDrawer()
})

document.addEventListener("scroll", () => {
    isOpen = false;
    drawer.classList.add("close-drawer")
})
// ? functions
const slideDrawer = () => {

    if (isOpen) {
        isOpen = false;
        drawer.classList.add("close-drawer");
        drawer.classList.remove("open-drawer")

    }
    else {
        isOpen = true;
        drawer.classList.add("open-drawer");
        drawer.classList.remove("close-drawer");
    }

}