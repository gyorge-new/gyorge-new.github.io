// --- SELETORES DO DOM ---
const music = document.getElementById("bgMusic");
const playBtn = document.getElementById("playBtn");
const muteBtn = document.getElementById("muteBtn");
const progressBar = document.getElementById("progress-bar");
const progressContainer = document.getElementById("progress-container");
const musicname = document.getElementById("musicName");
const controles = document.getElementById("controls-wrapper");
const botaoocultar = document.getElementById("ocultar-audio");
const jukebox = document.getElementById("jukebox");

// --- ICONES (EMOJIS) ---
const ICON_PLAY = `<svg fill="none" height="36" viewBox="0 0 36 36" width="36"><path d="M 17 8.6 L 10.89 4.99 C 9.39 4.11 7.5 5.19 7.5 6.93 C 7.5 6.93 7.5 6.93 7.5 6.93 L 7.5 29.06 C 7.5 30.8 9.39 31.88 10.89 31 C 10.89 31 10.89 31 10.89 31 L 17 27.4 C 17 27.4 17 27.4 17 27.4 C 17 27.4 17 27.4 17 27.4 L 17 8.6 C 17 8.6 17 8.6 17 8.6 C 17 8.6 17 8.6 17 8.6 Z M 17 8.6 L 17 8.6 C 17 8.6 17 8.6 17 8.6 C 17 8.6 17 8.6 17 8.6 V 27.4 C 17 27.4 17 27.4 17 27.4 C 17 27.4 17 27.4 17 27.4 L 33 18 C 33 18 33 18 33 18 C 33 18 33 18 33 18 V 18 L 17 8.6 C 17 8.6 17 8.6 17 8.6 C 17 8.6 17 8.6 17 8.6 Z" fill="white"></path></svg>`
const ICON_PAUSE = `<svg fill="none" height="36" viewBox="0 0 36 36" width="36"><path d="M 12.75 4.5 L 9.75 4.5 C 9.15 4.5 8.58 4.73 8.15 5.15 C 7.73 5.58 7.5 6.15 7.5 6.75 L 7.5 29.25 C 7.5 29.84 7.73 30.41 8.15 30.84 C 8.58 31.26 9.15 31.5 9.75 31.5 L 12.75 31.5 C 13.34 31.5 13.91 31.26 14.34 30.84 C 14.76 30.41 15 29.84 15 29.25 L 15 6.75 C 15 6.15 14.76 5.58 14.34 5.15 C 13.91 4.73 13.34 4.5 12.75 4.5 Z M 26.25 4.5 L 23.25 4.5 C 22.65 4.5 22.08 4.73 21.65 5.15 C 21.23 5.58 21 6.15 21 6.75 V 29.25 C 21 29.84 21.23 30.41 21.65 30.84 C 22.08 31.26 22.65 31.5 23.25 31.5 L 26.25 31.5 C 26.84 31.5 27.41 31.26 27.84 30.84 C 28.26 30.41 28.5 29.84 28.5 29.25 V 6.75 L 28.5 6.75 C 28.5 6.15 28.26 5.58 27.84 5.15 C 27.41 4.73 26.84 4.5 26.25 4.5 Z" fill="white"></path></svg>`
const ICON_STOP = `<svg fill="none" height="36" viewBox="0 0 36 36" width="36"><rect rx='5' ry="5" width="24" height="24" x='6' y='6' style="fill:white;" /></svg>`
const ICON_SOUND = `<svg class="sombutton" height="24" viewBox="0 0 24 24" width="24"><path class="ytp-svg-fill ytp-svg-volume-animation-speaker" d="M 11.60 2.08 L 11.48 2.14 L 3.91 6.68 C 3.02 7.21 2.28 7.97 1.77 8.87 C 1.26 9.77 1.00 10.79 1 11.83 V 12.16 L 1.01 12.56 C 1.07 13.52 1.37 14.46 1.87 15.29 C 2.38 16.12 3.08 16.81 3.91 17.31 L 11.48 21.85 C 11.63 21.94 11.80 21.99 11.98 21.99 C 12.16 22.00 12.33 21.95 12.49 21.87 C 12.64 21.78 12.77 21.65 12.86 21.50 C 12.95 21.35 13 21.17 13 21 V 3 C 12.99 2.83 12.95 2.67 12.87 2.52 C 12.80 2.37 12.68 2.25 12.54 2.16 C 12.41 2.07 12.25 2.01 12.08 2.00 C 11.92 1.98 11.75 2.01 11.60 2.08 Z" fill="#fff"></path><path class="ytp-svg-volume-animation-small-ripple" d=" M 15.53 7.05 C 15.35 7.22 15.25 7.45 15.24 7.70 C 15.23 7.95 15.31 8.19 15.46 8.38 L 15.53 8.46 L 15.70 8.64 C 16.09 9.06 16.39 9.55 16.61 10.08 L 16.70 10.31 C 16.90 10.85 17 11.42 17 12 L 16.99 12.24 C 16.96 12.73 16.87 13.22 16.70 13.68 L 16.61 13.91 C 16.36 14.51 15.99 15.07 15.53 15.53 C 15.35 15.72 15.25 15.97 15.26 16.23 C 15.26 16.49 15.37 16.74 15.55 16.92 C 15.73 17.11 15.98 17.21 16.24 17.22 C 16.50 17.22 16.76 17.12 16.95 16.95 C 17.6 16.29 18.11 15.52 18.46 14.67 L 18.59 14.35 C 18.82 13.71 18.95 13.03 18.99 12.34 L 19 12 C 18.99 11.19 18.86 10.39 18.59 9.64 L 18.46 9.32 C 18.15 8.57 17.72 7.89 17.18 7.3 L 16.95 7.05 L 16.87 6.98 C 16.68 6.82 16.43 6.74 16.19 6.75 C 15.94 6.77 15.71 6.87 15.53 7.05" fill="#fff" transform="translate(18, 12) scale(1) translate(-18,-12)"></path><path class="ytp-svg-volume-animation-big-ripple" d="M18.36 4.22C18.18 4.39 18.08 4.62 18.07 4.87C18.05 5.12 18.13 5.36 18.29 5.56L18.36 5.63L18.66 5.95C19.36 6.72 19.91 7.60 20.31 8.55L20.47 8.96C20.82 9.94 21 10.96 21 11.99L20.98 12.44C20.94 13.32 20.77 14.19 20.47 15.03L20.31 15.44C19.86 16.53 19.19 17.52 18.36 18.36C18.17 18.55 18.07 18.80 18.07 19.07C18.07 19.33 18.17 19.59 18.36 19.77C18.55 19.96 18.80 20.07 19.07 20.07C19.33 20.07 19.59 19.96 19.77 19.77C20.79 18.75 21.61 17.54 22.16 16.20L22.35 15.70C22.72 14.68 22.93 13.62 22.98 12.54L23 12C22.99 10.73 22.78 9.48 22.35 8.29L22.16 7.79C21.67 6.62 20.99 5.54 20.15 4.61L19.77 4.22L19.70 4.15C19.51 3.99 19.26 3.91 19.02 3.93C18.77 3.94 18.53 4.04 18.36 4.22 Z" fill="#fff" transform="translate(22, 12) scale(1) translate(-22, -12)"></path></svg>`
const ICON_MUTE = `<svg class="sombutton" height="24" viewBox="0 0 24 24" width="24"><path d="M11.60 2.08L11.48 2.14L3.91 6.68C3.02 7.21 2.28 7.97 1.77 8.87C1.26 9.77 1.00 10.79 1 11.83V12.16L1.01 12.56C1.07 13.52 1.37 14.46 1.87 15.29C2.38 16.12 3.08 16.81 3.91 17.31L11.48 21.85C11.63 21.94 11.80 21.99 11.98 21.99C12.16 22.00 12.33 21.95 12.49 21.87C12.64 21.78 12.77 21.65 12.86 21.50C12.95 21.35 13 21.17 13 21V3C12.99 2.83 12.95 2.67 12.87 2.52C12.80 2.37 12.68 2.25 12.54 2.16C12.41 2.07 12.25 2.01 12.08 2.00C11.92 1.98 11.75 2.01 11.60 2.08ZM4.94 8.4V8.40L11 4.76V19.23L4.94 15.6C4.38 15.26 3.92 14.80 3.58 14.25C3.24 13.70 3.05 13.07 3.00 12.43L3 12.17V11.83C2.99 11.14 3.17 10.46 3.51 9.86C3.85 9.25 4.34 8.75 4.94 8.4ZM21.29 8.29L19 10.58L16.70 8.29L16.63 8.22C16.43 8.07 16.19 7.99 15.95 8.00C15.70 8.01 15.47 8.12 15.29 8.29C15.12 8.47 15.01 8.70 15.00 8.95C14.99 9.19 15.07 9.43 15.22 9.63L15.29 9.70L17.58 12L15.29 14.29C15.19 14.38 15.12 14.49 15.06 14.61C15.01 14.73 14.98 14.87 14.98 15.00C14.98 15.13 15.01 15.26 15.06 15.39C15.11 15.51 15.18 15.62 15.28 15.71C15.37 15.81 15.48 15.88 15.60 15.93C15.73 15.98 15.86 16.01 15.99 16.01C16.12 16.01 16.26 15.98 16.38 15.93C16.50 15.87 16.61 15.80 16.70 15.70L19 13.41L21.29 15.70L21.36 15.77C21.56 15.93 21.80 16.01 22.05 15.99C22.29 15.98 22.53 15.88 22.70 15.70C22.88 15.53 22.98 15.29 22.99 15.05C23.00 14.80 22.93 14.56 22.77 14.36L22.70 14.29L20.41 12L22.70 9.70C22.80 9.61 22.87 9.50 22.93 9.38C22.98 9.26 23.01 9.12 23.01 8.99C23.01 8.86 22.98 8.73 22.93 8.60C22.88 8.48 22.81 8.37 22.71 8.28C22.62 8.18 22.51 8.11 22.39 8.06C22.26 8.01 22.13 7.98 22.00 7.98C21.87 7.98 21.73 8.01 21.61 8.06C21.49 8.12 21.38 8.19 21.29 8.29Z" fill="white"></path></svg>`

// --- VARIÁVEIS DE ESTADO ---
let tocandoAgora = null;
let playlistAtual = null;
let musicaAtual = null;

// --- BANCO DE DADOS (PLAYLISTS) ---
const playlists = {
    "Céu Roxo": {
        "musicas/Ethereal Night.mp3": "The NoexistenceN of you AND me",
        "musicas/May This Moment Last Forever.mp3": "The NoexistenceN of you AND me",
        "musicas/Hyperwave.mp3": "Magnific.com",
        "musicas/Nightfade_Notes.mp3": "Magnific.com: Kike Gutz",
    },
    "Nostalgia": {
        "musicas/Stranger Things Remix And Aria Math.mp3": "Youtube: ALTEFIED",
        "musicas/Hollow Knight - Crystal Peaks.mp3": "Youtube: Terraban",
        "musicas/Modular.mp3": "Youtube: liltommyj",
        "musicas/Sweden.mp3": "Youtube: MrSuicideSheep",
    },
    "Games": {
        "musicas/SMW-Koopa Castle.mp3": "Youtube: Magnus619666",
        "musicas/SMW-Overworld.mp3": "Youtube: DJMykah",
        "musicas/SMW-Underground.mp3": "Youtube: DJMykah"
    },
    "Happy": {
        "musicas/Voyager X.mp3": "Magnific.com",
        "musicas/Retrograde Dreams.mp3": "Magnific.com",
        "musicas/Fighters_Game.mp3": "Magnific.com",
        "musicas/joyful-rhythm-walk-funk.mp3": "pixabay.com: lightbeatsmusic",
    }
};

// --- FUNÇÕES AUXILIARES ---
// Limpa o caminho do arquivo para exibir um nome amigável
function formatarNomeMusica(caminho) {
    return caminho
        .replace("musicas/", "")
        .replace(".mp3", "")
        .replace(/_/g, " ")
        .replace(/ - /g, " ")
        .replace(/-/g, " ");
}

// Exibe ou oculta a barra de controle inferior
function exibirControles(mostrar) {
    const displayStyle = mostrar ? 'grid' : 'none';
    const flexStyle = mostrar ? 'flex' : 'none';
    
    controles.style.display = displayStyle;
    progressContainer.style.display = flexStyle;
    botaoocultar.innerText = mostrar ? "⤵" : "⤴";
}

// --- RENDERIZAÇÃO DA INTERFACE ---
function renderizarJukebox() {
    let htmlGeral = "";

    for (const [playlistNome, musicas] of Object.entries(playlists)) {
        let musicasHtml = "";

        for (const [caminho, origem] of Object.entries(musicas)) {
            const nomeFormatado = formatarNomeMusica(caminho);
            musicasHtml += `
                <div class="cadamusica">
                    <button id="${caminho}" class="playmusic" onclick="tocarSelecionada(this, '${caminho}', '${origem}')">${ICON_PLAY}</button>
                    <p>${nomeFormatado} - <i>${origem}</i></p>
                </div>
            `;
        }

        htmlGeral += `
            <div class="playlist">
                <h3>${playlistNome}</h3>
                ${musicasHtml}
            </div>
        `;
    }
    
    jukebox.innerHTML = htmlGeral;
}

// --- CONTROLES DE ÁUDIO ---

// Alterna entre os estados visíveis/invisíveis da barra
function esconderBarra() {
    const estaEscondido = controles.style.display == 'none';
    exibirControles(estaEscondido);
}

// Play / Pause Geral
function togglePlay() {
    if (music.paused) {
        music.play();
        playBtn.innerHTML = ICON_PAUSE;
    } else {
        music.pause();
        playBtn.innerHTML = ICON_PLAY;
    }
}

// Mute / Unmute
function toggleMute() {
    music.muted = !music.muted;
    muteBtn.innerHTML = music.muted ? ICON_MUTE : ICON_SOUND;
}

// Toca uma música específica da lista
function tocarSelecionada(botao, caminhodamusica, origem) {
    // Se o botão clicado já estava tocando, ele para a música
    if (botao == tocandoAgora && !music.paused) {
        botao.innerHTML = ICON_PLAY;
        playBtn.innerHTML = ICON_PLAY;
        musicname.innerHTML = "--"
        music.src = "";
        music.load();
        progressBar.style.width = "0%";
        return;
    }

    // Reseta o botão da música anterior que estava tocando (se houver)
    if (tocandoAgora && tocandoAgora !== botao) {
        tocandoAgora.innerHTML = ICON_PLAY;
    }

    // Configura e inicia a nova música
    botao.innerHTML = ICON_STOP;
    tocandoAgora = botao;
    playlistAtual = botao.parentElement.parentElement.querySelector('h3').innerHTML;
    musicaAtual = caminhodamusica;

    music.src = caminhodamusica;
    music.load();
    music.play();

    // Atualiza interface de texto e botões globais
    musicname.innerHTML = `${formatarNomeMusica(caminhodamusica)} - <i>${origem}</i>`;
    playBtn.innerHTML = ICON_PAUSE;
    exibirControles(true);
}

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

// --- EVENTOS (LISTENERS) ---

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

// --- INICIALIZAÇÃO ---
controles.style.display = 'none';
progressContainer.style.display = 'none';
renderizarJukebox();