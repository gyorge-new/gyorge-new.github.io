const iframe = document.getElementById('iframe')
const head = document.querySelector('head')
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function toSite(url) {
    iframe.style.zIndex = 8
    iframe.src = url
    head.innerHTML += `<link id="novocss" rel="stylesheet" href="${url}/style.css">`
}

function deSite() {
    iframe.style.zIndex = -1
    iframe.src = ""
    document.getElementById("novocss").remove()
}

document.addEventListener("DOMContentLoaded", () => {
    deSite()
});


iframe.onload = function() {
    try {
        // Isso só funciona se for o MESMO domínio
        const urlAtual = meuIframe.contentWindow.location.href;
        console.log("Iframe carregou a URL: " + urlAtual);
    } catch (e) {
        // Se cair aqui, é porque o site é de outro domínio (segurança)
        console.log("O iframe navegou, mas não posso ler a URL por segurança.");
    }
};