/*
---------------- SCRIPT GERENCIADOR DAS MÚSICAS ----------------
*/


// --- ICONES ---


// --- PREENCHENDO OS SVGs ---
playBtn.innerHTML = ICON_PLAY
muteBtn.innerHTML = ICON_SOUND
ocultBtn.innerHTML = ICON_CIMA
leftArrow.innerHTML = ICON_ESQUERDA
rightArrow.innerHTML = ICON_DIREITA

// --- VARIÁVEIS DE ESTADO ---

// --- (PLAYLISTS) ---




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
