/*
---------------- SCRIP COM TODOS OS EVENTOS DO SITE ----------------
*/



/*
---------------- Eventos das animações ----------------
*/

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPagina(-window.innerWidth/2,document.getElementById('Paginas'))
    }

    if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollPagina(window.innerWidth/2,document.getElementById('Paginas'))
    }
})

leftArrow.addEventListener('click', () => {
    scrollPagina(-window.innerWidth/2,document.getElementById('Paginas'))
})

rightArrow.addEventListener('click', () => {
    scrollPagina(window.innerWidth/2,document.getElementById('Paginas'))
})

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
---------------- Eventos das músicas ----------------
*/

// Quando a música atual termina
music.addEventListener("ended", () => {
    tocarAleatorio();
});

// Atualiza a barra de progresso conforme a música toca
music.addEventListener("timeupdate", () => {
    if (music.duration) {
        const percent = (music.currentTime / music.duration) * 100;
        progressBar.style.width = `${percent}%`;
    }
});

// Avança/retrocede a música ao clicar na barra de progresso
progressContainer.addEventListener("click", (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = music.duration;
    
    if (duration) {
        music.currentTime = (clickX / width) * duration;
    }
});



/*
---------------- Eventos da troca de site ----------------
*/

document.addEventListener("DOMContentLoaded", () => {
    deSite()
});


iframe.addEventListener("load", function() {
    const urlAtual = iframe.contentWindow.location.href
    console.log("A URL do iframe mudou para: " + urlAtual)
    if (urlAtual == "about:blank") {
        iframe.style.zIndex = -1
        const novocss = document.getElementById("novocss")
        if (novocss) {
            novocss.remove()
        }
        console.log("limpando pagina")
        scrollHorizontal.style.display = "flex"
    } else {
        iframe.style.zIndex = 8
        head.innerHTML += `<link id="novocss" rel="stylesheet" href="${urlAtual}/style.css">`
        console.log("prenchendo pagina")
        scrollHorizontal.style.display = "none"
    }
});