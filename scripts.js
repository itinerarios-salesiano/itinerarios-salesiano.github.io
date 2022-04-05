var projetos = [{
    nome: "El TricLab",
    link: "./projetos/triclab/index.html",
    criador: "Turma Circuitos Digitais",
    ano: 2022
}, {
    nome: "Labirinto Elétrico",
    link: "./projetos/labrinto/index.html",
    criador: "Turma Circuitos Digitais",
    ano: 2022
}, {
    nome: "Lead",
    link: "https://itinerarios-salesiano.github.io/lead/",
    criador: "Gabriel Morgado",
    ano: 2020
},
{
    nome: "Clean Apps",
    link: "https://itinerarios-salesiano.github.io/clean-apps/",
    criador: "Lucas Maes",
    ano: 2020
},
{
    nome: "Quotes",
    link: "https://itinerarios-salesiano.github.io/quotes/",
    criador: "Betina",
    ano: 2020
}
]

function inserirProjetos() {
    projetos.forEach((p) => {
        var botao = "<a class=\"lib\" href=\"" + p.link + "\" target='_blank'>"
        botao += p.nome + "<small>" + p.criador +" ("+ p.ano+ ")</small>"
        botao += "</a>"
        var elemento = document.getElementById('lista-projetos');
        elemento.innerHTML = elemento.innerHTML + botao
    })
}

inserirProjetos()