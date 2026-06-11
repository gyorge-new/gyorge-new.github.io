document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPagina(-window.innerWidth/2,document.getElementById('Paginas'))
    }

    if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollPagina(window.innerWidth/2,document.getElementById('Paginas'))
    }
})

document.getElementById("left-arrow").addEventListener('click', () => {
    scrollPagina(-window.innerWidth/2,document.getElementById('Paginas'))
})

document.getElementById("right-arrow").addEventListener('click', () => {
    scrollPagina(window.innerWidth/2,document.getElementById('Paginas'))
})

document.getElementById('gygor').addEventListener('mouseenter', () => {
    const element = document.getElementById('gygor')
    element.classList.add("cursor")
    animSet = setTimeout( () => {
        animSet = null
        if (element.matches(':hover')) {
            if (element.innerText.includes("Gyorge")) {
                animarTrocaDeTexto(element, "do Gyorge", "de um Gorjão")
            } else if (element.innerText.includes("Gorjão")) {
                animarTrocaDeTexto(element, "de um Gorjão", "do Gyorge")
            }
        }
    }, 3000)
})

document.getElementById('gygor').addEventListener('mouseleave', () => {
    const element = document.getElementById('gygor')
    element.classList.remove("cursor")
    if (animSet) {
        clearTimeout(animSet)
        animSet = null
    }
})