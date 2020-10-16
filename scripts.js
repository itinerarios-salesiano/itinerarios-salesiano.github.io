var projetos = [{
        nome: "Maõ no Musuko",
        link: "https://pc-salesiano.github.io/lead/",
        criador: "Feito em Grupo"
    },
    {
        nome: "Bots do Discord",
        link: "https://lopez03.github.io/botsdediscord/index.html",
        criador: "Feito em Grupo"
    },
    {
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
        nome: "Jogos.io",
        link: "https://pc-salesiano.github.io/jogos-io/",
        criador: "Henrique"
    },
    {
        nome: "Quotes",
        link: "https://pc-salesiano.github.io/quotes/",
        criador: "Betina"
    },
    {
        nome: "MinePad",
        link: "https://pc-salesiano.github.io/minepad/index.html",
        criador: "Lucas Vieira"
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