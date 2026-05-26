/*
---------------- SCRIPT GERAL E COMPARTILHADO (SOMENTE FUNÇÕES!) ----------------
*/

// Volta no site principal apartir do iframe
function voltar() {
    if (window.self !== window.top) {
        window.parent.deSite()
    } else {
        window.location.href = "https://gyorge-new.github.io/";
    }
}

// Move o scroll do body horizontalmente de forma suave (smooth)
function scrollPagina(quantidade, objeto=window) {
    console.log(objeto.scrollWidth, objeto.scrollLeft,quantidade)
    if (objeto.scrollLeft + objeto.clientWidth >= objeto.scrollWidth -1 && quantidade > 0) {
        quantidade = -objeto.scrollWidth
        console.log("VOLTAR",quantidade)
    }
    if (objeto.scrollLeft <= 0 && quantidade < 0) {
        quantidade = objeto.scrollWidth
        console.log("IR",quantidade)
    }
    objeto.scrollBy({
        left: quantidade,
        behavior: 'smooth'
    })
}