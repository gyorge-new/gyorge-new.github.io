const music = document.getElementById("bgMusic");
const playBtn = document.getElementById("playBtn");
const muteBtn = document.getElementById("muteBtn");
const progressBar = document.getElementById("progress-bar");
const progressContainer = document.getElementById("progress-container");
const source = document.getElementById("musicSource");
const musicname = document.getElementById("musicName")

const minhaPlaylist = [
    "musicas/Ethereal Night.mp3",
    "musicas/May This Moment Last Forever.mp3",
    "musicas/Fighters_Game.mp3",
    "musicas/Retrograde Dreams.mp3",
    "musicas/Hyperwave.mp3",
    "musicas/Voyager X.mp3"
];

// Variável para guardar qual música está tocando agora
let musicaAtualIndex = 2;

// Função para tocar uma música aleatória
function tocarAleatorio() {
    let novoIndice;
    
    // Sorteia até achar uma música que não seja a que acabou de tocar
    do {
        novoIndice = Math.floor(Math.random() * minhaPlaylist.length);
    } while (novoIndice === musicaAtualIndex && minhaPlaylist.length > 1);

    musicaAtualIndex = novoIndice;
    const proximaMusica = minhaPlaylist[musicaAtualIndex];
    musicname.innerText = proximaMusica.replace(".mp3","").replace("_"," ").replace("musicas/","")
    
    // Troca a música
    music.src = proximaMusica;
    music.load();

    // Tenta dar o play
    music.play()
        .then(() => {
            playBtn.innerHTML = "⏸";
        })
        .catch(e => {
            console.log("Autoplay bloqueado pelo navegador.");
        });
}

// Função de Play/Pause
function togglePlay() {
    if (music.paused) {
        music.play();
        playBtn.innerHTML = "⏸";
    } else {
        music.pause();
        playBtn.innerHTML = "▶";
    }

}

// Quando a música acabar, sorteia a próxima
music.addEventListener("ended", function() {
    console.log("A música acabou, sorteando a próxima...");
    tocarAleatorio();
});

// Função Mute
function toggleMute() {
    music.muted = !music.muted;
    muteBtn.innerHTML = music.muted ? "🔇" : "🔊";
}

// Atualiza a barra de progresso
music.addEventListener("timeupdate", () => {
    if (music.duration) {
        const percent = (music.currentTime / music.duration) * 100;
        progressBar.style.width = percent + "%";
    }
});

// Clique na barra para pular o tempo
progressContainer.addEventListener("click", (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = music.duration;
    if (duration) {
        music.currentTime = (clickX / width) * duration;
    }
});