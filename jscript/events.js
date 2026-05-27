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