/*
---------------- SCRIPT GERENCIADOR DAS ANIMAÇÕES AVANÇADAS ----------------
*/

// function by GPT :/
function animarTrocaDeTexto(elemento, termoParaApagar, novoTermo) {
    let textoAtual = elemento.innerText;

    // Encontra onde começa a parte que queremos apagar
    const indiceInicio = textoAtual.indexOf(termoParaApagar);

    if (indiceInicio === -1) {
        return;
    }

    // Define a velocidade (em milissegundos) de cada letra
    const velocidadeApagar = 50; 
    const velocidadeEscrever = 80;
    const delayEntreAcoes = 500; // Pausa rápida entre apagar e começar a escrever


    function escreverLetra(indiceLetra) {
        if (indiceLetra < novoTermo.length) {
            // Adiciona a próxima letra do novo termo
            elemento.innerHTML += novoTermo[indiceLetra];
            setTimeout(escreverLetra, velocidadeEscrever, indiceLetra + 1);
        }
    }

    function apagarLetra() {
        // Se o texto atual ainda for maior do que o texto até o ponto de início
        if (elemento.innerHTML.length > indiceInicio) {
            // Remove a última letra
            elemento.innerHTML = elemento.innerHTML.slice(0, -1);
            setTimeout(apagarLetra, velocidadeApagar);
        } else {
            // Quando terminar de apagar, espera um pouco e começa a escrever
            setTimeout(escreverLetra, delayEntreAcoes, 0);
        }
    }



    // Inicia o processo apagando
    apagarLetra();
}

