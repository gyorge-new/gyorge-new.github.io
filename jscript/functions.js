/*
---------------- SCRIPT DE FUNÇÕES ----------------
*/



/*
---------------- Relacionadas a gbar ----------------
*/
// Exibe ou oculta a gbar
function exibirControles(mostrar) {
    const displayStyle = mostrar ? 'grid' : 'none';
    const flexStyle = mostrar ? 'flex' : 'none';
    
    controles.style.display = displayStyle;
    progressContainer.style.display = flexStyle;
    ocultBtn.innerHTML = mostrar ? ICON_BAIXO : ICON_CIMA;
}

// Alterna entre os estados visíveis/invisíveis da barra
function esconderBarra() {
    const estaEscondido = controles.style.display == 'none';
    exibirControles(estaEscondido);
}



/*
---------------- Relacionadas as músicas ----------------
*/

// Limpa o caminho do arquivo para exibir um nome amigável
function formatarNomeMusica(caminho) {
    return caminho
        .replace("musicas/", "")
        .replace(".mp3", "")
        .replace(/_/g, " ")
        .replace(/ - /g, " ")
        .replace(/-/g, " ");
}

// Da Play / Pause na música
function togglePlay() {
    if (music.paused) {
        music.play();
        playBtn.innerHTML = ICON_PAUSE;
    } else {
        music.pause();
        playBtn.innerHTML = ICON_PLAY;
    }
}

// Da Mute / Unmute na música
function toggleMute() {
    music.muted = !music.muted;
    muteBtn.innerHTML = music.muted ? ICON_MUTE : ICON_SOUND;
}

// Toca uma música específica da lista
function tocarSelecionada(botao, caminhodamusica, origem) {
    if (botao == tocandoAgora && !music.paused) {
        botao.innerHTML = ICON_PLAY;
        playBtn.innerHTML = ICON_PLAY;
        musicname.innerHTML = "--"
        music.src = "";
        music.load();
        progressBar.style.width = "0%";
        return;
    }

    if (tocandoAgora && tocandoAgora !== botao) {
        tocandoAgora.innerHTML = ICON_PLAY;
    }

    botao.innerHTML = ICON_STOP;
    tocandoAgora = botao;
    playlistAtual = botao.parentElement.parentElement.querySelector('h3').innerHTML;
    musicaAtual = caminhodamusica;

    music.src = caminhodamusica;
    music.load();
    music.play();

    musicname.innerHTML = `${formatarNomeMusica(caminhodamusica)} - <i>${origem}</i>`;
    playBtn.innerHTML = ICON_PAUSE;
    exibirControles(true);
}

// Apesar do nome só troca pra próxima música da playlist
function tocarAleatorio() {
    const musicas = Object.entries(playlists[`${playlistAtual}`]);
    const indice = musicas.findIndex(item => item[0] === musicaAtual);
    if (indice !== -1 && indice + 1 < musicas.length) {
        const [proximaChave, proximoValor] = musicas[indice + 1];
        const botao = document.getElementById(proximaChave)
        tocarSelecionada(botao,proximaChave,proximoValor)
    } else {
        console.log("Fim da playlist ou música não encontrada.");
    }
}