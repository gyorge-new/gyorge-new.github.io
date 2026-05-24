document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        scrollPagina(-window.innerWidth,document.getElementById('Paginas'))
    }

    if (event.key === "ArrowRight") {
        scrollPagina(window.innerWidth,document.getElementById('Paginas'))
    }
})