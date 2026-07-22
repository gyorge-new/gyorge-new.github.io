/*
---------------- SCRIP COM TODOS OS EVENTOS DO SITE ----------------
*/



/*
---------------- Eventos das animações ----------------
*/

titulogygor.addEventListener('mouseenter', () => {
    const element = titulogygor
    element.classList.add("cursor")
    animSet = setTimeout( () => {
        animSet = null
        if (element.matches(':hover')) {
            if (element.innerText.includes("Gyorge")) {
                animarTrocaDeTexto(element, "do Gyorge", "de um Gorjão")
                element.classList.add('gorjao')
            } else if (element.innerText.includes("Gorjão")) {
                element.classList.remove('gorjao')
                animarTrocaDeTexto(element, "de um Gorjão", "do Gyorge")
            }
        }
    }, 3000)
})

titulogygor.addEventListener('mouseleave', () => {
    const element = titulogygor
    element.classList.remove("cursor")
    if (animSet) {
        clearTimeout(animSet)
        animSet = null
    }
})

/*
---------------- Funcionamento do "Descubra mais" ----------------
*/

gridDiscover.addEventListener("mouseover", (event) => {
    const item = event.target.closest(".pag")
    if (!item || !gridDiscover.contains(item)) return
    const iframeLink = item.querySelector("iframe").src
    iframeGeral.src = iframeLink
})

gridDiscover.addEventListener("click", (event) => {
    const item = event.target.closest(".pag")
    if (!item || !gridDiscover.contains(item)) return
    const iframeLink = item.querySelector("iframe").src
    iframeGeral.src = iframeLink
    window.location.hash = item.id+".pag"
})

window.addEventListener("hashchange", () => {
    const locationHash = location.hash
    if (locationHash.includes(".pag")) {
        carregarIframe()
    } else {
        descarregarIframe()
    }
})

document.addEventListener("DOMContentLoaded", () => {
    const locationHash = location.hash
    if (locationHash.includes(".pag")) {
        carregarIframe()
    }
})

/*
---------------- Músicas ----------------
*/

// Atualiza a barra de progresso conforme a música toca
music.addEventListener("timeupdate", () => {
    if (music.duration) {
        const percent = (music.currentTime / music.duration) * 100
        progressBar.style.width = `${percent}%`
    }
})

// Avança/retrocede a música ao clicar na barra de progresso
progressContainer.addEventListener("click", (e) => {
    const width = progressContainer.clientWidth
    const clickX = e.offsetX
    const duration = music.duration
    
    if (duration) {
        music.currentTime = (clickX / width) * duration;
    }
})
