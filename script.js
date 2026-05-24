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
async function scrollPagina(quantidade, objeto=window) {
    if (objeto.scrollLeft + objeto.clientWidth >= objeto.scrollWidth -1) {
        quantidade = -objeto.scrollWidth
    }
    objeto.scrollBy({
        left: quantidade,
        behavior: 'smooth'
    })
}