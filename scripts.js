var projetos = [{
    nome: "El TricLab",
    link: "./projetos/triclab/index.html",
    criador: "Turma Circuitos Digitais"
}, {
    nome: "Labirinto Elétrico",
    link: "./projetos/labirinto/index.html",
    criador: "Turma Circuitos Digitais"
}, {
    nome: "Lead",
    link: "https://pc-salesiano.github.io/lead/",
    criador: "Gabriel Morgado"
},
{
    nome: "Clean Apps",
    link: "https://pc-salesiano.github.io/clean-apps/",
    criador: "Lucas Maes"
},
{
    nome: "Quotes",
    link: "https://pc-salesiano.github.io/quotes/",
    criador: "Betina"
}
]

function inserirProjetos() {
    projetos.forEach((p) => {
        var botao = "<a class=\"lib\" href=\"" + p.link + "\" target='_blank'>"
        botao += p.nome + "<small>" + p.criador + "</small>"
        botao += "</a>"
        var elemento = document.getElementById('lista-projetos');
        elemento.innerHTML = elemento.innerHTML + botao
    })
}

inserirProjetos()