const openDetail = (proyectDetail) => {
    proyectDetail.style.display = "block";
}

// Function to close proyect detail
const closeDetail = (proyectDetail) => {
    proyectDetail.style.display = "none";
}

// Click event on every proyect
const proyectContainers = document.querySelectorAll(".proyectContainer");
proyectContainers.forEach(container => {
    container.addEventListener("click", function() {
        const proyectId = container.getAttribute("id");
        const detailId = "detail-" + proyectId
        const proyectDetail = document.getElementById(detailId)
        openDetail(proyectDetail);

        // Close proyect detail on button click
        const closeProyectDetailButton = proyectDetail.querySelector(".closeProyectDetailButton");
        closeProyectDetailButton.addEventListener("click", () => {
            closeDetail(proyectDetail);
        });
    });
});