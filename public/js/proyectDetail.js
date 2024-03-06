const swProyectContainer = document.getElementById("swProyectContainer")
const swProyectDetail = document.getElementById("swProyectDetail")
const clothingEcommerceContainer = document.getElementById("clothingEcommerceContainer")
const clothingEcommerceProyectDetail = document.getElementById("clothingEcommerceProyectDetail")
const theWeekndPortalContainer = document.getElementById("theWeekndPortalContainer")
const theWeekndPortalDetail = document.getElementById("theWeekndPortalDetail")
const closeProyectDetailButton = document.querySelector(".closeProyectDetailButton")

swProyectContainer.addEventListener("click", (e) => {
    swProyectDetail.classList.toggle("showProyectDetail")
    closeProyectDetailButton.addEventListener("click", (e) => {
        swProyectDetail.classList.toggle("display-block")
    })
})

clothingEcommerceContainer.addEventListener("click", (e) => {
    clothingEcommerceProyectDetail.classList.toggle("showProyectDetail")
    closeProyectDetailButton.addEventListener("click", (e) => {
        clothingEcommerceProyectDetail.classList.toggle("display-block")
    })
})

theWeekndPortalContainer.addEventListener("click", (e) => {
    theWeekndPortalDetail.classList.toggle("showProyectDetail")
    closeProyectDetailButton.addEventListener("click", (e) => {
        theWeekndPortalDetail.classList.toggle("display-block")
    })
})