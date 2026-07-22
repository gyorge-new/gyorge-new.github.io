const musicControlersWindow = window.top                                               // pegando o iframe dos controles
const docMusic = musicControlersWindow.document                                   // pegando DOM do iframe 

const progressContainer = docMusic.getElementById("progress-container") // <div> div do progresso da música
const scrollHorizontal = docMusic.querySelector("#scroll-arrows")       // <div> com os botões do scroll
const controles = docMusic.getElementById("controls-wrapper")           // <div> com os controles da música
const progressBar = docMusic.getElementById("progress-bar")             // <div> de progresso da música
const ocultBtn = docMusic.getElementById("ocultar-audio")               // <button> de ocultar audio
const musicname = docMusic.getElementById("musicName")                  // <p> onde fica o nome da musica no player
const playBtn = docMusic.getElementById("playBtn")                      // <button> de dar play/puse
const muteBtn = docMusic.getElementById("muteBtn")                      // <button> de mutar
const jukebox = document.getElementById("jukebox")                      // <div> onde ficam as musicas
const music = docMusic.getElementById("bgMusic")                        // <source> do audio de fundo

const {
    mudarMusica,
    togglePlay,
    toggleMute,
    ICON_PLAY,
    ICON_PAUSE,
    ICON_STOP,
    ICON_MUTE,
    ICON_CIMA,
    ICON_BAIXO
} = musicControlersWindow.musicAPI

const playlists = {
    "Céu Roxo": {
        "Ethereal Night.mp3": "The NOexistenceN of you AND me",
        "May This Moment Last Forever.mp3": "The NOexistenceN of you AND me",
        "Clair de Lune - Claude Debussy.mp3": "Youtube: Vinheteiro",
        "Nightfade_Notes.mp3": "Magnific.com: Kike Gutz",
    },
    "Nostalgia": {
        "Stranger Things Remix And Aria Math.mp3": "Youtube: ALTEFIED",
        "Hollow Knight - Crystal Peaks.mp3": "Youtube: Terraban",
        "Modular.mp3": "Youtube: liltommyj",
        "Sweden.mp3": "Youtube: MrSuicideSheep",
    },
    "Games": {
        "SMW-Koopa Castle.mp3": "Youtube: Magnus619666",
        "SMW-Overworld.mp3": "Youtube: DJMykah",
        "SMW-Underground.mp3": "Youtube: DJMykah"
    },
    "Happy": {
        "Voyager X.mp3": "Magnific.com",
        "Retrograde Dreams.mp3": "Magnific.com",
        "Fighters_Game.mp3": "Magnific.com",
        "joyful-rhythm-walk-funk.mp3": "pixabay.com: lightbeatsmusic",
    },
    "Meme shit": {
        "Fabio e seus carros.mp3": "Origem? <s>Odio ao Fabio</s> Er... Inspiração",
        "Fabio envenenado.mp3": "Origem? PH",
        "Fabio e seus carros - alpha.mp3": "Origem? Ideia maluca"
    },
}



// Deixa o nome legível
function formatarNomeMusica(caminho) {
    return caminho
        .replace("musicas/", "")
        .replace(".mp3", "")
        .replace(/_/g, " ")
        .replace(/ - /g, " ")
        .replace(/-/g, " ");
}

// Tocar uma musica especifica
let botaoAnterior = null
let playlistAtual = null
let musicaAtual = null
function tocarSelecionada(botao, nomedamusica, origem,playlistDaMusica) {
    const caminhodamusica = "musicas/"+nomedamusica
    const descText = `${formatarNomeMusica(caminhodamusica)} - <i>${origem}</i>`
    mudarMusica(music, playBtn, ocultBtn, musicname, descText, caminhodamusica)
    botao.innerHTML = ICON_STOP

    if (botao!=botaoAnterior && botaoAnterior) {
        botaoAnterior.innerHTML = ICON_PLAY
    }

    botaoAnterior=botao
    playlistAtual=playlistDaMusica
    musicaAtual=nomedamusica
}

// Apesar do nome só troca pra próxima música da playlist

for (const [playlistNome, musicas] of Object.entries(playlists)) {
    let musicasHtml = "";

    for (const [caminho, origem] of Object.entries(musicas)) {
        const nomeFormatado = formatarNomeMusica(caminho);
        musicasHtml += `
            <div class="cadamusica">
                <button id="${caminho}" class="playmusic" onclick="tocarSelecionada(this, '${caminho}', '${origem}', '${playlistNome}')">${ICON_PLAY}</button>
                <p>${nomeFormatado} - <i>${origem}</i></p>
            </div>
        `;
    }

    jukebox.innerHTML += `
        <div class="playlist">
            <h3>${playlistNome}</h3>
            <div class="musicas">
                ${musicasHtml}
            </div>
        </div>
    `;
}

/*
---------------- Eventos das músicas ----------------
*/


// Quando a música atual termina
music.addEventListener("ended", () => {
    playlistJson = playlists[`${playlistAtual}`]
    if (playlistJson) {
        const musicas = Object.entries(playlistJson)
        const indice = musicas.findIndex(item => item[0] === musicaAtual)
        if (indice !== -1 && indice + 1 < musicas.length) {
            const [proximaChave, proximoValor] = musicas[indice + 1]
            const botao = document.getElementById(proximaChave)
            tocarSelecionada(botao,proximaChave,proximoValor,playlistAtual)
        } else {
            console.log("Fim da playlist ou música não encontrada.")
        }
    } else {
        // parece q o evento é acionado duas vezes seguidas e na segunda a variavel playlistAtual vem null
        console.log("Bug estranho no addEventListner do fim da musica em ./subpages/musicas.js")
    }
})

