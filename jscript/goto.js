/*
---------------- GERENCIADOR DOS BLOCOS E IFRAMES ----------------
*/

const iframe = document.getElementById('iframe')
const head = document.querySelector('head')
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function toSite(url) {
    iframe.src = url
}

function deSite() {
    iframe.src = "about:blank"
}

document.addEventListener("DOMContentLoaded", () => {
    deSite()
});


iframe.addEventListener("load", function() {
    const urlAtual = iframe.contentWindow.location.href
    console.log("A URL do iframe mudou para: " + urlAtual)
    if (urlAtual == "about:blank") {
        iframe.style.zIndex = -1
        document.getElementById("novocss").remove()
        console.log("limpando pagina")
    } else {
        iframe.style.zIndex = 8
        head.innerHTML += `<link id="novocss" rel="stylesheet" href="${urlAtual}/style.css">`
        console.log("prenchendo pagina")
    }
});