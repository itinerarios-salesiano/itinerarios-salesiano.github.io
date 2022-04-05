var projetos = [{
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>',
    nome: "El TricLab",
    link: "./projetos/triclab/index.html",
    criador: "Turma Circuitos Digitais",
    ano: 2022
}, {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>',
    nome: "Labirinto Elétrico",
    link: "./projetos/labrinto/index.html",
    criador: "Turma Circuitos Digitais",
    ano: 2022
}, {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>',
    nome: "Lead",
    link: "https://itinerarios-salesiano.github.io/lead/",
    criador: "Gabriel Morgado",
    ano: 2020
},
{
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" /></svg>',
    nome: "Clean Apps",
    link: "https://itinerarios-salesiano.github.io/clean-apps/",
    criador: "Lucas Maes",
    ano: 2020
},
{
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>',
    nome: "Quotes",
    link: "https://itinerarios-salesiano.github.io/quotes/",
    criador: "Betina",
    ano: 2020
}
]

function inserirProjetos() {
    projetos.forEach((p) => {
        var botao = "<a class=\"lib\" href=\"" + p.link + "\" target='_blank'><div class='icon'>"+p.icon+"</div><div>"
        botao += p.nome + "<small>" + p.criador +" ("+ p.ano+ ")</small>"
        botao += "</div></a>"
        var elemento = document.getElementById('lista-projetos');
        elemento.innerHTML = elemento.innerHTML + botao
    })
}

inserirProjetos()