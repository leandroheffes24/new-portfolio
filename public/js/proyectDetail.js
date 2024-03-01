const swProyectContainer = document.getElementById("swProyectContainer")
const swProyectDetail = document.getElementById("swProyectDetail")
const clothingEcommerceContainer = document.getElementById("clothingEcommerceContainer")
const clothingEcommerceProyectDetail = document.getElementById("clothingEcommerceProyectDetail")
const closeProyectDetailButton = document.querySelector(".closeProyectDetailButton")

swProyectContainer.addEventListener("click", (e) => {
    swProyectDetail.classList.toggle("display-block")
    closeProyectDetailButton.addEventListener("click", (e) => {
        swProyectDetail.classList.toggle("display-block")
    })
})

clothingEcommerceContainer.addEventListener("click", (e) => {
    clothingEcommerceProyectDetail.classList.toggle("display-block")
    closeProyectDetailButton.addEventListener("click", (e) => {
        clothingEcommerceProyectDetail.classList.toggle("display-block")
    })
})