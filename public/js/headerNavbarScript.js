const headerOpenMenuIcon = document.querySelector(".headerOpenMenuIcon")
const headerNavbar = document.querySelector(".headerNavbar")
const headerNavbarCloseMenuIcon = document.querySelector(".headerNavbarCloseMenuIcon")

headerOpenMenuIcon.addEventListener("click", () => {
    headerNavbar.style.display = "block"
})

headerNavbarCloseMenuIcon.addEventListener("click", () => {
    headerNavbar.style.display = "none"
})