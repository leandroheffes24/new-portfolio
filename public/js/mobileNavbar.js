const mobileNavbarButton = document.querySelector(".mobileNavbarButton")
const mobileNavbar = document.querySelector(".mobileNavbar")
const closeMobileNavbarButton = document.querySelector(".closeMobileNavbarButton")
const mobileNavbarLink = document.querySelectorAll(".mobileNavbarLink")

mobileNavbarButton.addEventListener("click", (e) => {
    mobileNavbar.classList.toggle("showMobileNavbar")
    mobileNavbarButton.classList.toggle("display-none")
})

closeMobileNavbarButton.addEventListener("click", (e) => {
    mobileNavbar.classList.toggle("showMobileNavbar")
    mobileNavbarButton.classList.toggle("display-none")
})

mobileNavbarLink.addEventListener("click", (e) => {
    mobileNavbar.classList.toggle("display-block")
    mobileNavbarButton.classList.toggle("display-none")
})