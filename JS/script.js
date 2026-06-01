//SEÇÃO PROJETOS
const filterLinks = document.querySelectorAll(".filtro-nav-link")

filterLinks.forEach((filterLink) => {
    filterLink.addEventListener("click", (e) => {
        e.preventDefault()

        document.querySelector(".filtro-nav-link.active").classList.remove("active")
        filterLink.classList.add("active")

        const projetos = document.querySelectorAll(".projeto")
        projetos.forEach((projeto) => {
            projeto.classList.add("hide")

            if(filterLink.getAttribute("data-type") === projeto.getAttribute("data-type") || filterLink.getAttribute("data-type") === "todos"){
                projeto.classList.remove("hide")
            }
        })
    })
})
//FIM SEÇÃO PROJETOS