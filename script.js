// =========================================================================
// BANCO DE PERGUNTAS COMPLETO (GABARITO VARIADO ENTRE A, B, C, D)
// =========================================================================
const PERGUNTAS = [
    {
        tema: "Cotas Raciais",
        pergunta: "O que são cotas raciais?",
        opcoes: [
            "Vagas reservadas para grupos raciais contemplados por políticas de inclusão.",
            "Vagas destinadas somente a pessoas ricas.",
            "Proibição de estudar em universidades públicas.",
            "Benefícios exclusivos para empresas privadas."
        ],
        correta: 0 // A
    },
    {
        tema: "Ações Afirmativas",
        pergunta: "Por que as cotas raciais foram criadas?",
        opcoes: [
            "Para diminuir o número de estudantes nas universidades.",
            "Para acabar com as escolas públicas.",
            "Para reduzir desigualdades históricas e sociais.",
            "Para impedir a contratação de trabalhadores."
        ],
        correta: 2 // C
    },
    {
        tema: "Educação e Inclusão",
        pergunta: "Qual é a importância das cotas na educação?",
        opcoes: [
            "Diminuir o acesso às universidades.",
            "Substituir os estudos dos alunos.",
            "Eliminar a necessidade de professores.",
            "Ampliar o acesso de grupos historicamente excluídos ao ensino."
        ],
        correta: 3 // D
    },
    {
        tema: "Igualdade de Oportunidades",
        pergunta: "O que significa igualdade de oportunidades?",
        opcoes: [
            "Oferecer direitos somente a algumas pessoas.",
            "Garantir oportunidades justas para todas as pessoas.",
            "Impedir o acesso à educação.",
            "Valorizar apenas quem possui mais dinheiro."
        ],
        correta: 1 // B
    },
    {
        tema: "Mercado de Trabalho",
        pergunta: "Como as ações afirmativas podem contribuir para o mercado de trabalho?",
        opcoes: [
            "Aumentando o preconceito e a divisão.",
            "Reduzindo as oportunidades de emprego.",
            "Promovendo inclusão e diversidade nas empresas.",
            "Impedindo a participação profissional."
        ],
        correta: 2 // C
    },
    {
        tema: "História e Memória",
        pergunta: "Por que o dia 20 de novembro é celebrado como o Dia da Consciência Negra?",
        opcoes: [
            "Porque representa a data da morte de Zumbi dos Palmares, símbolo da resistência negra.",
            "Porque foi o dia da assinatura da Lei Áurea.",
            "Porque foi o dia da independência do Brasil.",
            "Porque marca o início da escravidão no Brasil."
        ],
        correta: 0 // A
    },
    {
        tema: "Personalidades Históricas",
        pergunta: "Quem foi Zumbi dos Palmares?",
        opcoes: [
            "Um governante que assinou a Lei Áurea.",
            "Um escritor brasileiro que defendia a escravidão.",
            "Um colonizador português.",
            "Uma liderança do Quilombo dos Palmares que simbolizou a luta contra a escravidão."
        ],
        correta: 3 // D
    },
    {
        tema: "Direitos e Cidadania",
        pergunta: "O que significa igualdade racial?",
        opcoes: [
            "Valorizar apenas uma cultura na sociedade.",
            "Garantir direitos, respeito e oportunidades a todas as pessoas, sem discriminação racial.",
            "Separar as pessoas de acordo com a cor da pele.",
            "Impedir que diferentes culturas convivam."
        ],
        correta: 1 // B
    },
    {
        tema: "Educação Antirracista",
        pergunta: "Qual é o papel da escola no combate ao racismo?",
        opcoes: [
            "Evitar conversas sobre diversidade cultural.",
            "Permitir brincadeiras que humilhem os colegas.",
            "Ensinar a história e a cultura africana e afro-brasileira, promovendo respeito e igualdade.",
            "Ensinar apenas a história de determinados grupos sociais."
        ],
        correta: 2 // C
    },
    {
        tema: "Reflexão Social",
        pergunta: "Por que a Consciência Negra deve ser valorizada durante todo o ano?",
        opcoes: [
            "Porque o respeito, a igualdade racial e o combate ao racismo devem fazer parte das atitudes diárias.",
            "Porque é apenas uma comemoração do mês de novembro.",
            "Porque a diversidade cultural não tem importância para a sociedade.",
            "Porque o racismo deixou de existir após a abolição da escravidão."
        ],
        correta: 0 // A
    },
    {
        tema: "História do Brasil",
        pergunta: "Em que dia é celebrado o Dia Nacional da Consciência Negra no Brasil?",
        opcoes: ["13 de maio", "21 de abril", "20 de novembro", "15 de novembro"],
        correta: 2 // C
    },
    {
        tema: "Personalidades Históricas",
        pergunta: "Quem foi o último líder do Quilombo dos Palmares, símbolo da resistência contra a escravidão?",
        opcoes: ["Zumbi dos Palmares", "Dragão do Mar", "Luís Gama", "André Rebouças"],
        correta: 0 // A
    },
    {
        tema: "Literatura",
        pergunta: "Qual escritora brasileira ficou mundialmente conhecida pelo livro 'Quarto de Despejo'?",
        opcoes: ["Conceição Evaristo", "Djamila Ribeiro", "Carolina Maria de Jesus", "Maria Firmina dos Reis"],
        correta: 2 // C
    },
    {
        tema: "Cultura e Patrimônio",
        pergunta: "Qual expressão cultural afro-brasileira mistura arte marcial, dança, música e acrobacias?",
        opcoes: ["Maracatu", "Frevo", "Samba de Roda", "Capoeira"],
        correta: 3 // D
    },
    {
        tema: "História e Resistência",
        pergunta: "Quem foi a líder quilombola que comandou o Quilombo do Quariterê no século XVIII?",
        opcoes: ["Tereza de Benguela", "Dandara", "Aqualtune", "Luiza Mahin"],
        correta: 0 // A
    },
    {
        tema: "Direito e Abolicionismo",
        pergunta: "Qual ex-escravizado tornou-se advogado autodidata e libertou mais de 500 pessoas nos tribunais?",
        opcoes: ["José do Patrocínio", "Machado de Assis", "Luís Gama", "Cruz e Sousa"],
        correta: 2 // C
    },
    {
        tema: "Cultura e Tradição",
        pergunta: "Qual cientista brasileira coordenou a equipe que sequenciou o genoma do coronavírus em 48 horas?",
        opcoes: ["Acarajé", "Feijoada", "Sushi tradicional", "Pizza marguerita"],
        correta: 1 // B
    },
    {
        tema: "Música",
        pergunta: "Qual sambista e compositora carioca recebeu o título de 'Rainha do Samba' e 'Dona Ivone Lara'?",
        opcoes: ["Alcione", "Elza Soares", "Leci Brandão", "Dona Ivone Lara"],
        correta: 3 // D
    },
    {
        tema: "História do Ceará",
        pergunta: "Quem liderou a greve dos jangadeiros no Ceará em 1881, recusando-se a embarcar escravizados?",
        opcoes: ["Padre Cícero", "Chico da Matilde (Dragão do Mar)", "Bárbara de Alencar", "Antônio Conselheiro"],
        correta: 1 // B
    },
    {
        tema: "Literatura Contemporânea",
        pergunta: "Qual autora cunhou o conceito de 'escrevivência' na literatura brasileira?",
        opcoes: ["Ana Maria Gonçalves", "Chimamanda Ngozi Adichie", "Conceição Evaristo", "bell hooks"],
        correta: 2 // C
    },
    {
        tema: "Esportes",
        pergunta: "Qual ginasta brasileira tornou-se a maior medalhista olímpica da história do Brasil?",
        opcoes: ["Daiane dos Santos", "Rafaela Silva", "Rebeca Andrade", "Beatriz Souza"],
        correta: 2 // C
    },
    {
        tema: "Geografia e História",
        pergunta: "Onde estava localizado o maior quilombo das Américas, o Quilombo dos Palmares?",
        opcoes: ["Serra da Barriga (atual Alagoas)", "Recôncavo Baiano", "Vale do Paraíba", "Serra do Mar"],
        correta: 0 // A
    }
];

// Pergunta Surpresa isolada para o Desafio Extra
const PERGUNTA_SURPRESA_EXTRA = {
    tema: "Pergunta Surpresa",
    pergunta: "Em qual região/estado atual nasceu e se desenvolveu a história do Quilombo dos Palmares?",
    opcoes: [
        "Interior da Bahia",
        "Serra da Barriga (atual Alagoas)",
        "Região metropolitana do Rio de Janeiro",
        "Litoral de São Paulo"
    ],
    correta: 1 // B
};

// =========================================================================
// ESTADO DO JOGO
// =========================================================================
let filaPerguntas = [];
let equipes = [
    { id: 0, nome: "Equipe Vermelha", cor: "#e63946", pontos: 0, usoFifty: false, usoDouble: false },
    { id: 1, nome: "Equipe Verde", cor: "#2a9d8f", pontos: 0, usoFifty: false, usoDouble: false },
    { id: 2, nome: "Equipe Amarela", cor: "#f4a261", pontos: 0, usoFifty: false, usoDouble: false },
    { id: 3, nome: "Equipe Roxa", cor: "#9b5de5", pontos: 0, usoFifty: false, usoDouble: false }
];

let indiceFilaAtual = 0;
let indiceEquipeAtual = 0;
let rodadaAtual = 1;
let respondeu = false;
let modoDobrarAtivo = false;
let ehDesafioExtraAtual = false;

let totalPerguntasMetade = 0;
let indicesDesafioSorteados = [];
let temporizador = null;
let tempoRestante = 30;

// =========================================================================
// NAVEGAÇÃO ENTRE TELAS
// =========================================================================
document.getElementById("go-to-rules-btn").addEventListener("click", () => trocarTela("rules-screen"));

document.getElementById("start-game-btn").addEventListener("click", () => {
    PERGUNTAS.sort(() => Math.random() - 0.5);
    filaPerguntas = [...PERGUNTAS];

    totalPerguntasMetade = Math.floor(filaPerguntas.length / 2);
    sortearMomentosDesafio();

    trocarTela("game-screen");
    atualizarPlacarAoVivo();
    carregarItemAtual();
});

document.getElementById("rules-btn").addEventListener("click", () => trocarTela("rules-screen"));

document.getElementById("skip-btn").addEventListener("click", () => {
    if (respondeu) return;
    pararTemporizador();
    
    const perguntaPulada = filaPerguntas.splice(indiceFilaAtual, 1)[0];
    filaPerguntas.push(perguntaPulada);

    avancarTurnoSomenteEquipe();
});

document.getElementById("next-btn").addEventListener("click", () => {
    avancarTurnoCompleto();
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

function avancarTurnoSomenteEquipe() {
    pararTemporizador();
    indiceEquipeAtual++;

    if (indiceEquipeAtual >= equipes.length) {
        indiceEquipeAtual = 0;
        rodadaAtual++;
    }

    if (indiceFilaAtual >= filaPerguntas.length) {
        indiceFilaAtual = 0;
    }

    atualizarPlacarAoVivo();
    carregarItemAtual();
}

function avancarTurnoCompleto() {
    pararTemporizador();
    indiceFilaAtual++; 
    indiceEquipeAtual++;

    if (indiceEquipeAtual >= equipes.length) {
        indiceEquipeAtual = 0;
        rodadaAtual++;
    }

    if (indiceFilaAtual >= filaPerguntas.length) {
        mostrarPodioFinal();
    } else {
        atualizarPlacarAoVivo();
        carregarItemAtual();
    }
}

// =========================================================================
// SORTEIO DOS DESAFIOS EXTRAS
// =========================================================================
function sortearMomentosDesafio() {
    indicesDesafioSorteados = [];
    const totalRestante = filaPerguntas.length - totalPerguntasMetade;
    if (totalRestante < 3) return;

    while (indicesDesafioSorteados.length < 3) {
        let rand = Math.floor(Math.random() * totalRestante) + totalPerguntasMetade;
        if (!indicesDesafioSorteados.includes(rand)) {
            indicesDesafioSorteados.push(rand);
        }
    }
}

// =========================================================================
// CARREGAR ITEM ATUAL
// =========================================================================
function carregarItemAtual() {
    respondeu = false;
    modoDobrarAtivo = false;
    ehDesafioExtraAtual = false;

    const grid = document.getElementById("options-grid");
    grid.innerHTML = "";
    grid.style.display = "grid";

    document.getElementById("next-btn").classList.add("hidden");
    document.getElementById("skip-btn").classList.remove("hidden");
    document.getElementById("manual-challenge-panel").classList.add("hidden");
    document.getElementById("skills-container").style.display = "flex";
    document.getElementById("timer-display").classList.add("hidden");

    const equipe = equipes[indiceEquipeAtual];
    document.documentElement.style.setProperty("--current-team-color", equipe.cor);
    document.getElementById("round-info").textContent = `RODADA ${rodadaAtual} • ITEM ${indiceFilaAtual + 1} DE ${filaPerguntas.length}`;
    document.getElementById("current-team-display").textContent = `VEZ DE: ${equipe.nome.toUpperCase()}`;

    if (indicesDesafioSorteados.includes(indiceFilaAtual)) {
        carregarDesafioExtra(equipe);
    } else {
        carregarPerguntaNormal(equipe);
    }
}

function carregarPerguntaNormal(equipe) {
    const q = filaPerguntas[indiceFilaAtual];
    document.getElementById("question-theme").textContent = `Tema: ${q.tema}`;
    document.getElementById("question-text").textContent = q.pergunta;

    configurarHabilidades(equipe, q.correta);
    renderizarOpcoes(q.opcoes, q.correta);
}

function carregarDesafioExtra(equipe) {
    document.getElementById("skills-container").style.display = "none";
    document.getElementById("skip-btn").classList.add("hidden");

    const tipoDesafio = Math.random() < 0.5 ? "pergunta_extra" : "presencial";

    if (tipoDesafio === "pergunta_extra") {
        ehDesafioExtraAtual = true;
        document.getElementById("question-theme").textContent = "⚡ DESAFIO EXTRA: PERGUNTA SURPRESA!";
        document.getElementById("question-text").textContent = "Valendo 2 pontos! Responda corretamente antes que o tempo acabe:";
        
        const qExtra = PERGUNTA_SURPRESA_EXTRA;
        configurarHabilidades(equipe, qExtra.correta);
        renderizarOpcoes(qExtra.opcoes, qExtra.correta);

        document.getElementById("timer-display").classList.remove("hidden");
        iniciarTemporizador(30);
    } else {
        document.getElementById("question-theme").textContent = "🔥 DESAFIO PRESENCIAL DA TURMA!";
        document.getElementById("question-text").textContent = "Atenção professor(a): Execute um desafio presencial com a turma agora! Quando concluírem, escolha abaixo qual equipe pontua.";
        
        document.getElementById("options-grid").style.display = "none";
        document.getElementById("manual-challenge-panel").classList.remove("hidden");
        
        const manualGrid = document.getElementById("manual-teams-grid");
        manualGrid.innerHTML = "";
        
        equipes.forEach(eq => {
            const btn = document.createElement("button");
            btn.className = "manual-team-btn";
            btn.style.setProperty("--team-color", eq.cor);
            btn.textContent = `${eq.nome} (+1 Ponto)`;
            btn.onclick = () => atribuirPontoManual(eq.id);
            manualGrid.appendChild(btn);
        });
    }
}

function renderizarOpcoes(opcoes, indiceCorreta) {
    const grid = document.getElementById("options-grid");
    grid.innerHTML = "";
    const letras = ["A", "B", "C", "D"];

    opcoes.forEach((opcao, index) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerHTML = `<span class="option-letter">${letras[index]}</span> <span>${opcao}</span>`;
        btn.onclick = () => verificarResposta(index, indiceCorreta, btn);
        grid.appendChild(btn);
    });
}

function configurarHabilidades(equipe, indiceCorreta) {
    const btnFifty = document.getElementById("skill-fifty");
    const btnDouble = document.getElementById("skill-double");
    
    btnFifty.disabled = equipe.usoFifty;
    btnDouble.disabled = equipe.usoDouble;
    btnDouble.style.borderColor = "var(--gold)";
    btnDouble.style.color = "#fff";
    
    if (equipe.usoDouble) {
        btnDouble.style.borderColor = "#ff4d4d";
        btnDouble.style.color = "#ff4d4d";
        btnDouble.innerHTML = "⭐ USADO";
    } else {
        btnDouble.innerHTML = `⭐ Dobrar (<span id="count-double">1</span>)`;
    }

    if (equipe.usoFifty) {
        btnFifty.innerHTML = `💥 50/50 (0)`;
    } else {
        btnFifty.innerHTML = `💥 50/50 (1)`;
    }

    btnFifty.onclick = () => usarHabilidadeFifty(indiceCorreta);
    btnDouble.onclick = usarHabilidadeDouble;
}

// =========================================================================
// CRONÔMETRO
// =========================================================================
function iniciarTemporizador(segundos) {
    pararTemporizador();
    tempoRestante = segundos;
    document.getElementById("time-left").textContent = tempoRestante;

    temporizador = setInterval(() => {
        tempoRestante--;
        document.getElementById("time-left").textContent = tempoRestante;

        if (tempoRestante <= 0) {
            pararTemporizador();
            alert("⏰ O tempo esgotou para a Pergunta Extra!");
            if (!respondeu) {
                respondeu = true;
                document.getElementById("next-btn").classList.remove("hidden");
            }
        }
    }, 1000);
}

function pararTemporizador() {
    if (temporizador) clearInterval(temporizador);
}

// =========================================================================
// SISTEMA DE HABILIDADES
// =========================================================================
function usarHabilidadeFifty(indiceCorreta) {
    const equipe = equipes[indiceEquipeAtual];
    if (equipe.usoFifty) return;

    equipe.usoFifty = true;
    document.getElementById("skill-fifty").disabled = true;
    document.getElementById("skill-fifty").innerHTML = `💥 50/50 (0)`;

    const botoes = document.querySelectorAll(".option-btn");
    let eliminadas = 0;

    botoes.forEach((btn, index) => {
        if (index !== indiceCorreta && eliminadas < 2) {
            btn.classList.add("hidden-option");
            eliminadas++;
        }
    });
}

function usarHabilidadeDouble() {
    const equipe = equipes[indiceEquipeAtual];
    if (equipe.usoDouble) return;

    equipe.usoDouble = true;
    modoDobrarAtivo = true;
    
    const btnDouble = document.getElementById("skill-double");
    btnDouble.disabled = true;
    btnDouble.style.borderColor = "#ff4d4d";
    btnDouble.style.color = "#ff4d4d";
    btnDouble.innerHTML = "⭐ DOBRADO!";
}

// =========================================================================
// VERIFICAÇÃO DE RESPOSTA E PONTUAÇÃO MANUAL
// =========================================================================
function verificarResposta(indiceEscolhido, indiceCorreta, botaoClicado) {
    if (respondeu) return;
    respondeu = true;
    pararTemporizador();

    const botoes = document.querySelectorAll(".option-btn");
    const equipeAtual = equipes[indiceEquipeAtual];

    botoes.forEach(b => b.disabled = true);
    document.getElementById("skill-fifty").disabled = true;
    document.getElementById("skill-double").disabled = true;

    if (indiceEscolhido === indiceCorreta) {
        botaoClicado.classList.add("correct");
        let pontosGanhos = ehDesafioExtraAtual ? 2 : (modoDobrarAtivo ? 2 : 1);
        equipeAtual.pontos += pontosGanhos;
    } else {
        botaoClicado.classList.add("wrong");
        botoes[indiceCorreta].classList.add("correct");

        if (modoDobrarAtivo) {
            equipeAtual.pontos = 0;
            alert(`(${equipeAtual.nome}) Errou o 'Dobrar ou Nada' e perdeu todos os pontos!`);
        }
    }

    atualizarPlacarAoVivo();
    document.getElementById("next-btn").classList.remove("hidden");
    document.getElementById("skip-btn").classList.add("hidden");
}

function atribuirPontoManual(teamId) {
    if (respondeu) return;
    respondeu = true;

    const equipeVencedora = equipes.find(eq => eq.id === teamId);
    equipeVencedora.pontos += 1;

    alert(`Ponto atribuído para a ${equipeVencedora.nome}!`);
    document.getElementById("manual-challenge-panel").classList.add("hidden");
    atualizarPlacarAoVivo();
    document.getElementById("next-btn").classList.remove("hidden");
}

// =========================================================================
// PLACAR E PÓDIO FINAL
// =========================================================================
function atualizarPlacarAoVivo() {
    const scoreboard = document.getElementById("live-scoreboard");
    scoreboard.innerHTML = "";

    const ranking = [...equipes].sort((a, b) => b.pontos - a.pontos);

    ranking.forEach((eq, pos) => {
        const isVez = eq.id === equipes[indiceEquipeAtual].id;
        const card = document.createElement("div");
        card.className = `score-card ${isVez ? "active-turn" : ""}`;
        card.style.setProperty("--team-color", eq.cor);

        card.innerHTML = `
            <div class="team-info-side">
                <span class="rank-num">${pos + 1}º Lugar</span>
                <span class="team-name-side">${eq.nome}</span>
            </div>
            <span class="points-side">${eq.pontos} ${eq.pontos === 1 ? 'ponto' : 'pontos'}</span>
        `;
        scoreboard.appendChild(card);
    });
}

function mostrarPodioFinal() {
    trocarTela("podium-screen");
    pararTemporizador();

    const classificacao = [...equipes].sort((a, b) => b.pontos - a.pontos);

    const podiumTop = document.getElementById("podium-top");
    const podiumOthers = document.getElementById("podium-others");
    podiumTop.innerHTML = "";
    podiumOthers.innerHTML = "";

    let rankAtual = 1;
    classificacao.forEach((eq, i) => {
        if (i > 0 && eq.pontos < classificacao[i - 1].pontos) {
            rankAtual = i + 1;
        }
        eq.rankReal = rankAtual;
    });

    const top3 = classificacao.slice(0, 3);
    const restantes = classificacao.slice(3);

    top3.forEach((eq, indexVisual) => {
        let classeMedalha = "medal-bronze";
        if (eq.rankReal === 1) classeMedalha = "medal-ouro";
        else if (eq.rankReal === 2) classeMedalha = "medal-prata";

        const spotClass = `spot-rank-${indexVisual + 1}`;

        const spot = document.createElement("div");
        spot.className = `podium-spot ${spotClass}`;
        spot.innerHTML = `
            <div class="glow-circle ${classeMedalha}">
                <span class="podium-position">${eq.rankReal}º</span>
                <span class="podium-score">${eq.pontos} ${eq.pontos === 1 ? 'ponto' : 'pontos'}</span>
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
            <div><strong>${eq.pontos}</strong> ${eq.pontos === 1 ? 'ponto' : 'pontos'}</div>
        `;
        podiumOthers.appendChild(row);
    });
}