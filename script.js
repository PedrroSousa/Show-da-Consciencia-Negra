// =========================================================================
// BANCO DE PERGUNTAS (EDITE AQUI OS TEMAS, PERGUNTAS E RESPOSTAS)
// 'correta': 0 = A, 1 = B, 2 = C, 3 = D
// =========================================================================
const PERGUNTAS = [
    {
        tema: "História do Brasil",
        pergunta: "Em que dia é celebrado o Dia Nacional da Consciência Negra no Brasil?",
        opcoes: ["13 de maio", "20 de novembro", "21 de abril", "15 de novembro"],
        correta: 1
    },
    {
        tema: "Personalidades Históricas",
        pergunta: "Quem foi o último líder do Quilombo dos Palmares, símbolo da resistência contra a escravidão?",
        opcoes: ["Dragão do Mar", "Zumbi dos Palmares", "Luís Gama", "André Rebouças"],
        correta: 1
    },
    {
        tema: "Literatura",
        pergunta: "Qual escritora brasileira ficou mundialmente conhecida pelo livro 'Quarto de Despejo'?",
        opcoes: ["Conceição Evaristo", "Carolina Maria de Jesus", "Djamila Ribeiro", "Maria Firmina dos Reis"],
        correta: 1
    },
    {
        tema: "Cultura e Patrimônio",
        pergunta: "Qual expressão cultural afro-brasileira mistura arte marcial, dança, música e acrobacias?",
        opcoes: ["Maracatu", "Capoeira", "Frevo", "Samba de Roda"],
        correta: 1
    },
    {
        tema: "História e Resistência",
        pergunta: "Quem foi a líder quilombola que comandou o Quilombo do Quariterê no século XVIII?",
        opcoes: ["Dandara", "Tereza de Benguela", "Aqualtune", "Luiza Mahin"],
        correta: 1
    },
    {
        tema: "Direito e Abolicionismo",
        pergunta: "Qual ex-escravizado tornou-se advogado autodidata e libertou mais de 500 pessoas nos tribunais?",
        opcoes: ["José do Patrocínio", "Luís Gama", "Machado de Assis", "Cruz e Sousa"],
        correta: 1
    },
    {
        tema: "Ciência e Inovação",
        pergunta: "Qual cientista brasileira coordenou a equipe que sequenciou o genoma do coronavírus em 48 horas?",
        opcoes: ["Jaqueline Goes de Jesus", "Sônia Guimarães", "Enedina Alves Marques", "Joana D'Arc Félix"],
        correta: 0
    },
    {
        tema: "Música",
        pergunta: "Qual sambista e compositora carioca recebeu o título de 'Rainha do Samba' e 'Dona Ivone Lara'?",
        opcoes: ["Alcione", "Elza Soares", "Dona Ivone Lara", "Leci Brandão"],
        correta: 2
    },
    {
        tema: "História do Ceará",
        pergunta: "Quem liderou a greve dos jangadeiros no Ceará em 1881, recusando-se a embarcar escravizados?",
        opcoes: ["Chico da Matilde (Dragão do Mar)", "Padre Cícero", "Bárbara de Alencar", "Antônio Conselheiro"],
        correta: 0
    },
    {
        tema: "Literatura Contemporânea",
        pergunta: "Qual autora cunhou o conceito de 'escrevivência' na literatura brasileira?",
        opcoes: ["Ana Maria Gonçalves", "Conceição Evaristo", "Chimamanda Ngozi Adichie", "bell hooks"],
        correta: 1
    },
    {
        tema: "Esportes",
        pergunta: "Qual ginasta brasileira tornou-se a maior medalhista olímpica da história do Brasil?",
        opcoes: ["Daiane dos Santos", "Rebeca Andrade", "Rafaela Silva", "Beatriz Souza"],
        correta: 1
    },
    {
        tema: "Geografia e História",
        pergunta: "Onde estava localizado o maior quilombo das Américas, o Quilombo dos Palmares?",
        opcoes: ["Serra da Barriga (atual Alagoas)", "Recôncavo Baiano", "Vale do Paraíba", "Serra do Mar"],
        correta: 0
    }
];

// =========================================================================
// ESTADO DO JOGO
// =========================================================================
let equipes = [
    { id: 0, nome: "Equipe Vermelha", cor: "#e63946", pontos: 0 },
    { id: 1, nome: "Equipe Verde", cor: "#2a9d8f", pontos: 0 },
    { id: 2, nome: "Equipe Azul", cor: "#3a86ff", pontos: 0 },
    { id: 3, nome: "Equipe Amarela", cor: "#f4a261", pontos: 0 }
];

let indicePerguntaAtual = 0;
let indiceEquipeAtual = 0;
let rodadaAtual = 1;
let respondeu = false;

// =========================================================================
// INICIALIZAÇÃO E NAVEGAÇÃO
// =========================================================================
document.getElementById("start-btn").addEventListener("click", () => {
    // Atualiza nomes das equipes com o que foi digitado
    equipes.forEach((eq, index) => {
        const inputVal = document.getElementById(`team-name-${index}`).value.trim();
        if (inputVal) eq.nome = inputVal;
    });

    // Embaralha as perguntas (opcional - comente a linha abaixo se quiser ordem fixa)
    PERGUNTAS.sort(() => Math.random() - 0.5);

    trocarTela("game-screen");
    atualizarPlacarAoVivo();
    carregarPergunta();
});

document.getElementById("next-btn").addEventListener("click", () => {
    indicePerguntaAtual++;
    indiceEquipeAtual++;

    if (indiceEquipeAtual >= equipes.length) {
        indiceEquipeAtual = 0;
        rodadaAtual++;
    }

    if (indicePerguntaAtual >= PERGUNTAS.length) {
        mostrarPodioFinal();
    } else {
        atualizarPlacarAoVivo();
        carregarPergunta();
    }
});

document.getElementById("finish-early-btn").addEventListener("click", () => {
    if (confirm("Deseja encerrar o quiz agora e exibir o pódio final?")) {
        mostrarPodioFinal();
    }
});

function trocarTela(idTela) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(idTela).classList.add("active");
}

// =========================================================================
// LÓGICA DA RODADA E PLACAR
// =========================================================================
function atualizarPlacarAoVivo() {
    const scoreboard = document.getElementById("live-scoreboard");
    scoreboard.innerHTML = "";

    // Cria uma cópia ordenada por pontos para mostrar o ranking em tempo real
    const ranking = [...equipes].sort((a, b) => b.pontos - a.pontos);

    ranking.forEach((eq, pos) => {
        const isVez = eq.id === equipes[indiceEquipeAtual].id;
        const pill = document.createElement("div");
        pill.className = `score-pill ${isVez ? "active-turn" : ""}`;
        pill.style.setProperty("--pill-color", eq.cor);

        pill.innerHTML = `
            <div>
                <span class="rank-badge">${pos + 1}º</span>
                <strong>${eq.nome}</strong>
            </div>
            <span class="points">${eq.pontos}</span>
        `;
        scoreboard.appendChild(pill);
    });
}

function carregarPergunta() {
    respondeu = false;
    document.getElementById("next-btn").classList.add("hidden");

    const equipe = equipes[indiceEquipeAtual];
    const q = PERGUNTAS[indicePerguntaAtual];

    // Atualiza cores e textos da vez
    document.documentElement.style.setProperty("--current-team-color", equipe.cor);
    document.getElementById("round-info").textContent = `RODADA ${rodadaAtual} • PERGUNTA ${indicePerguntaAtual + 1} DE ${PERGUNTAS.length}`;
    document.getElementById("current-team-display").textContent = `VEZ DE: ${equipe.nome.toUpperCase()}`;

    // Atualiza pergunta e tema
    document.getElementById("question-theme").textContent = `Tema: ${q.tema}`;
    document.getElementById("question-text").textContent = q.pergunta;

    // Gera alternativas
    const grid = document.getElementById("options-grid");
    grid.innerHTML = "";
    const letras = ["A", "B", "C", "D"];

    q.opcoes.forEach((opcao, index) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerHTML = `<span class="option-letter">${letras[index]}</span> <span>${opcao}</span>`;
        btn.onclick = () => verificarResposta(index, btn);
        grid.appendChild(btn);
    });
}

function verificarResposta(indiceEscolhido, botaoClicado) {
    if (respondeu) return;
    respondeu = true;

    const q = PERGUNTAS[indicePerguntaAtual];
    const botoes = document.querySelectorAll(".option-btn");

    // Desabilita todos os botões
    botoes.forEach(b => b.disabled = true);

    if (indiceEscolhido === q.correta) {
        botaoClicado.classList.add("correct");
        equipes[indiceEquipeAtual].pontos += 1; // +1 acerto
    } else {
        botaoClicado.classList.add("wrong");
        botoes[q.correta].classList.add("correct"); // Mostra qual era a certa
    }

    atualizarPlacarAoVivo();
    document.getElementById("next-btn").classList.remove("hidden");
}

// =========================================================================
// PÓDIO FINAL COM REGRA DE EMPATE (OURO, PRATA, BRONZE)
// =========================================================================
function mostrarPodioFinal() {
    trocarTela("podium-screen");

    // Ordena do maior para o menor número de acertos
    const classificacao = [...equipes].sort((a, b) => b.pontos - a.pontos);

    const podiumTop = document.getElementById("podium-top");
    const podiumOthers = document.getElementById("podium-others");
    podiumTop.innerHTML = "";
    podiumOthers.innerHTML = "";

    // Calcula colocação real considerando empates (ex: 1º, 1º, 3º, 4º)
    let rankAtual = 1;
    classificacao.forEach((eq, i) => {
        if (i > 0 && eq.pontos < classificacao[i - 1].pontos) {
            rankAtual = i + 1;
        }
        eq.rankReal = rankAtual;
    });

    // Separa os 3 primeiros itens do array para o pódio visual e o restante para a lista
    const top3 = classificacao.slice(0, 3);
    const restantes = classificacao.slice(3);

    top3.forEach((eq, indexVisual) => {
        // Define a cor da medalha baseada no rankReal (empate ganha a mesma cor)
        let classeMedalha = "medal-bronze";
        if (eq.rankReal === 1) classeMedalha = "medal-ouro";
        else if (eq.rankReal === 2) classeMedalha = "medal-prata";

        // Posição no pódio visual: indexVisual 0 = Centro, 1 = Esquerda, 2 = Direita
        const spotClass = `spot-rank-${indexVisual + 1}`;

        const spot = document.createElement("div");
        spot.className = `podium-spot ${spotClass}`;
        spot.innerHTML = `
            <div class="glow-circle ${classeMedalha}">
                <span class="podium-position">${eq.rankReal}º</span>
                <span class="podium-score">${eq.pontos} ${eq.pontos === 1 ? 'acerto' : 'acertos'}</span>
            </div>
            <div class="podium-team-name" style="--team-color: ${eq.cor}">
                ${eq.nome}
            </div>
        `;
        podiumTop.appendChild(spot);
    });

    restantes.forEach((eq) => {
        const row = document.createElement("div");
        row.className = "other-row";
        row.style.setProperty("--team-color", eq.cor);
        row.innerHTML = `
            <div><strong>${eq.rankReal}º Lugar</strong> — ${eq.nome}</div>
            <div><strong>${eq.pontos}</strong> ${eq.pontos === 1 ? 'acerto' : 'acertos'}</div>
        `;
        podiumOthers.appendChild(row);
    });
}