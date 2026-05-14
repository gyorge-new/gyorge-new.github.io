const iframe = document.getElementById('iframe')
const head = document.querySelector('head')
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function toSite(url) {
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
    if (iframe.src == "") {
        iframe.style.zIndex = -1
        document.getElementById("novocss").remove()
    } else {
        iframe.style.zIndex = 8
        head.innerHTML += `<link id="novocss" rel="stylesheet" href="${iframe.src}/style.css">`
    }
};