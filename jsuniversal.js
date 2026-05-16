function voltar() {
    if (window.self !== window.top) {
        window.parent.deSite()
    } else {
        window.location.href = "https://gyorge-new.github.io/";
    }
}