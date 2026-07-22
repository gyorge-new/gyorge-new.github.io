/*
---------------- SCRIPT DE FUNÇÕES ----------------
*/

/*
---------------- Relacionadas as animações extras ----------------
*/

// Animação de maquina de escrever
function animarTrocaDeTexto(elemento, termoParaApagar, novoTermo) {
    let textoAtual = elemento.innerHTML;
    const indiceInicio = textoAtual.indexOf(termoParaApagar);
    if (indiceInicio === -1) {
        return;
    }
    const velocidadeApagar = 50; 
    const velocidadeEscrever = 80;
    const delayEntreAcoes = 500; // Pausa rápida entre apagar e começar a escrever
    function escreverLetra(indiceLetra) {
        if (indiceLetra < novoTermo.length) {
            elemento.innerHTML += novoTermo[indiceLetra];
            setTimeout(escreverLetra, velocidadeEscrever, indiceLetra + 1);
        }
    }
    function apagarLetra() {
        if (elemento.innerHTML.length > indiceInicio) {
            elemento.innerHTML = elemento.innerHTML.slice(0, -1);
            setTimeout(apagarLetra, velocidadeApagar);
        } else {
            setTimeout(escreverLetra, delayEntreAcoes, 0);
        }
    }
    apagarLetra();
}

/*
---------------- Renderização ----------------
*/

// renderização do "Descubra mais sobre mim"
function renderDiscover(parentDiv, discoverARRAY) {
    for (let index = 0; index < discoverARRAY.length; index++) {
        const element = discoverARRAY[index];
        const title = element["title"]
        const desc = element["desc"]
        const link = element["link"]
        const color = element["color"]
        const id = element["id"]
        parentDiv.innerHTML += `
            <div class="pag" id="${id}">
                <div class="clickDiscover">
                    <h4 style="text-decoration: underline ${color} 3px;"> ${title} </h4>
                    <p>${desc}</p>
                    <iframe src="${link}" inert frameborder="0" id="pagframe"></iframe>
                </div>
            </div>
        `
    }
}

/*
---------------- Músicas ----------------
*/

// Muda o estado da barra de controles
function esconderBarra(esconder, ocultBtn) {
    estadoDosControles = esconder || !estadoDosControles
    const altura = divMusic.querySelector("#controles-play").getBoundingClientRect().height
    if (estadoDosControles) {
        divMusic.style.bottom = "0px"
        ocultBtn.innerHTML = ICON_BAIXO
    } else {
        divMusic.style.bottom = -altura + "px"
        ocultBtn.innerHTML = ICON_CIMA
    }
}

// Da Play / Pause na música
function togglePlay(source,playBtn) {
    if (source.paused) {
        source.play();
        playBtn.innerHTML = ICON_PAUSE;
    } else {
        source.pause();
        playBtn.innerHTML = ICON_PLAY;
    }
}

// Muta ou desmuta a musica
function toggleMute(source, muteBtn) {
    source.muted = !source.muted;
    muteBtn.innerHTML = source.muted ? ICON_MUTE : ICON_SOUND;
}

// Mudar para uma musica especifica
function mudarMusica(source, playBtn, ocultBtn, descElement, descText, caminhodamusica) {
    source.src = caminhodamusica;
    source.load();
    source.play();
    descElement.innerHTML = descText
    playBtn.innerHTML = ICON_PAUSE;
    esconderBarra(true,ocultBtn);
}


/*
---------------- Carregamento de iframes ----------------
*/

function carregarIframe() {
    document.body.style.pointerEvents = "none"
    const locationHash = location.hash
    const item = document.querySelector(locationHash)
    const iframeSubpag = item.querySelector("iframe")
    const rect = iframeSubpag.getBoundingClientRect()
    rectDoIframe = iframeSubpag
    const iframeLink = item.querySelector("iframe").src
    if (iframeLink!=iframeGeral.src){
        iframeGeral.src = iframeLink
    }
    
    Object.assign(iframeGeral.style, {
        transition: "none",
        position: "fixed",
        top: rect.top + "px",
        left: rect.left + "px",
        width: rect.width + "px",
        height: rect.height + "px",
        transform: "scale(1)",
        opacity: "1",
        zIndex: 100,
    })
    iframeGeral.offsetWidth
    requestAnimationFrame(() => {
        iframeGeral.style.transition = "all 0.6s ease-in-out"
        iframeGeral.style.top = "0"
        iframeGeral.style.left = "0"
        iframeGeral.style.width = "100vw"
        iframeGeral.style.height = "100vh"
    })
    iframeGeral.addEventListener("transitionend", () => {
        document.body.style.pointerEvents = "auto"
    }, { once: true });
}

function descarregarIframe() {
    const rect = rectDoIframe.getBoundingClientRect()
    document.body.style.pointerEvents = "none"
    Object.assign(iframeGeral.style, {
        transition: "all 0.6s ease-in-out",
        position: "fixed",
        top: rect.top + "px",
        left: rect.left + "px",
        width: rect.width + "px",
        height: rect.height + "px",
        zIndex: 100,
    })
    iframeGeral.addEventListener("transitionend", () => {
        iframeGeral.style.transition = "none"
        iframeGeral.style.opacity = "0"
        iframeGeral.style.zIndex = 0
        iframeGeral.addEventListener("transitionend", () => {
            document.body.style.pointerEvents = "auto"
            iframeGeral.src = "about:blank"
        }, { once: true });
    }, { once: true });
}