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