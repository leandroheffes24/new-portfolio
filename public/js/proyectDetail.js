fetch('https://leandroheffes-portfolio.vercel.app/api/proyects')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const proyects = data.proyects

            const proyectDetail = document.querySelector(".proyectDetail")
            const proyectImageDetail = document.querySelector(".proyectImageDetail")
            const proyectTitleDetail = document.querySelector(".proyectTitleDetail")
            const proyectLinks = document.querySelector(".proyectLinks")
            const closeProyectDetailButton = document.querySelector(".closeProyectDetailButton")
            const proyectEditForm = document.querySelector(".proyectEditForm")
            const proyectDeleteForm = document.querySelector(".proyectDeleteForm")

            const openDetail = (id) => {
                const proyect = proyects.find(proyect => proyect.id === id);

                proyectImageDetail.src = `/img/proyects/${proyect.image}`;
                proyectImageDetail.alt = proyect.name;
                proyectTitleDetail.textContent = proyect.name;
                proyectEditForm.action = `/proyect-edit/${proyect.id}`;
                proyectDeleteForm.action = `/proyect-edit/${proyect.id}?_method=delete`;

                proyectLinks.innerHTML = "";
                if (proyect.github_link) {
                    const githubLink = document.createElement("a");
                    githubLink.href = proyect.github_link;
                    githubLink.classList.add("proyectLink");
                    githubLink.innerHTML = '<i class="fa-brands fa-github"></i>';
                    proyectLinks.appendChild(githubLink);
                }

                if (proyect.proyect_link) {
                    const proyectLink = document.createElement("a");
                    proyectLink.href = proyect.proyect_link;
                    proyectLink.classList.add("proyectLink");
                    proyectLink.innerHTML = '<i class="fa-solid fa-arrow-up-right-from-square"></i>';
                    proyectLinks.appendChild(proyectLink);
                }

                proyectDetail.style.display = "block";
            }

            // Close proyect detail
            closeProyectDetailButton.addEventListener("click", () => {
                proyectDetail.style.display = "none";
            })

            // Click event on every proyect
            const proyectContainers = document.querySelectorAll(".proyectContainer");
            proyectContainers.forEach(container => {
                container.addEventListener("click", function() {
                    const proyectId = container.getAttribute("id");
                    openDetail(proyectId);
                });
            });
        })