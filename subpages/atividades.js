// Atividades escolares renderização

const subreps = [ // links do subsite de atividades
    "https://gyorge-new.github.io/Front-End-2025/",
    "https://gyorge-new.github.io/Slides-Diversos/",
    "https://gyorge-new.github.io/Slides-Ocultos/"
]
const titulos = [ // Titulos de cada atividade
    "Front-End",
    "Apresentações",
    "Slides Esquecidos"
]
const descricoes = [ // Descrição de cada atividade
    "Materia onde supostamente o Grande Fabio Dias ensina HTML e Java Script. Aqui está todos os Layouts que fiz durante tais aulas",
    "Diversos slides que fui fazendo durante os anos para ganhar nota em alguma materia",
    "Slides que me avisaram que eu tinha, porque eu não lembrava"
]

const divumlayot = document.getElementById("grid") 

for (let i = 0; i < subreps.length; i++) {
    const repo = subreps[i]
    const descricao = descricoes[i]
    const titulo = titulos[i]
    
    divumlayot.innerHTML += `
    <div id="${repo}" class="bloco">
        <h3>${titulo}</h3>
        <a href="${repo}">
            <div id="${repo}" class="subloco">
                <img src="${repo}/thumb.png" alt="">
                <p>${descricao}</p>
            </div>
        </a>
    </div>
    `
}