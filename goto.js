const iframe = document.getElementById('iframe')
const head = document.querySelector('head')
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function toSite(url) {
    iframe.style.zIndex = 8
    iframe.src = url
    await sleep(100)
    head.innerHTML += `<link id="novocss" rel="stylesheet" href="${url}/style.css">`
    framehead.innerHTML += "<base target='_top'>"
}

function deSite() {
    iframe.style.zIndex = -1
    iframe.src = ""
}

document.addEventListener("DOMContentLoaded", () => {
    deSite()
});