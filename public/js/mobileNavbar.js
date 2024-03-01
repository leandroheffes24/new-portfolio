const mobileNavbarButton = document.querySelector(".mobileNavbarButton")
const mobileNavbar = document.querySelector(".mobileNavbar")
const closeMobileNavbarButton = document.querySelector(".closeMobileNavbarButton")
const mobileNavbarLink1 = document.getElementById("mobileNavbarLink1")
const mobileNavbarLink2 = document.getElementById("mobileNavbarLink2")
const mobileNavbarLink3 = document.getElementById("mobileNavbarLink3")
const mobileNavbarLink4 = document.getElementById("mobileNavbarLink4")

mobileNavbarButton.addEventListener("click", (e) => {
    mobileNavbar.classList.toggle("display-block")
    mobileNavbarButton.classList.toggle("display-none")
})

closeMobileNavbarButton.addEventListener("click", (e) => {
    mobileNavbar.classList.toggle("display-block")
    mobileNavbarButton.classList.toggle("display-none")
})

mobileNavbarLink1.addEventListener("click", (e) => {
    mobileNavbar.classList.toggle("display-block")
    mobileNavbarButton.classList.toggle("display-none")
})

mobileNavbarLink2.addEventListener("click", (e) => {
    mobileNavbar.classList.toggle("display-block")
    mobileNavbarButton.classList.toggle("display-none")
})

mobileNavbarLink3.addEventListener("click", (e) => {
    mobileNavbar.classList.toggle("display-block")
    mobileNavbarButton.classList.toggle("display-none")
})

mobileNavbarLink4.addEventListener("click", (e) => {
    mobileNavbar.classList.toggle("display-block")
    mobileNavbarButton.classList.toggle("display-none")
})