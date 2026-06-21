// script.js
// Lista de palavras por categoria com dica (25 itens por categoria)
const DADOS = {
  linguagem: [
    { palavra: "javascript", dica: "Linguagem que roda no navegador" },
    { palavra: "python", dica: "Linguagem popular em ciencia de dados" },
    { palavra: "rust", dica: "Linguagem focada em seguranca de memoria" },
    { palavra: "typescript", dica: "Superset tipado do JavaScript" },
    { palavra: "java", dica: "Linguagem orientada a objetos muito usada em empresas" },
    { palavra: "csharp", dica: "Linguagem da plataforma dotnet" },
    { palavra: "go", dica: "Linguagem criada pelo Google" },
    { palavra: "kotlin", dica: "Linguagem moderna para Android" },
    { palavra: "swift", dica: "Linguagem da Apple para iOS" },
    { palavra: "php", dica: "Linguagem popular para web server side" },
    { palavra: "scala", dica: "Linguagem funcional para JVM" },
    { palavra: "haskell", dica: "Linguagem puramente funcional" },
    { palavra: "lua", dica: "Linguagem leve usada em jogos" },
    { palavra: "dart", dica: "Linguagem usada com Flutter" },
    { palavra: "ruby", dica: "Linguagem com sintaxe elegante" },
    { palavra: "perl", dica: "Linguagem historica para scripts" },
    { palavra: "elixir", dica: "Linguagem concorrente baseada em Erlang" },
    { palavra: "clojure", dica: "Linguagem funcional para JVM" },
    { palavra: "objectivec", dica: "Linguagem usada em iOS antes do Swift" },
    { palavra: "fortran", dica: "Linguagem tradicional em calculo numerico" },
    { palavra: "c", dica: "Linguagem de baixo nivel muito usada" },
    { palavra: "cpp", dica: "C mais orientado a objetos (C++)" },
    { palavra: "matlab", dica: "Ambiente e linguagem para calculo" },
    { palavra: "groovy", dica: "Linguagem dinamica para JVM" },
    { palavra: "assembly", dica: "Linguagem de maquina legivel" }
  ],
  frutas: [
    { palavra: "banana", dica: "Amarela e rica em potassio" },
    { palavra: "morango", dica: "Pequena e vermelha, usada em sobremesas" },
    { palavra: "abacaxi", dica: "Tropical com coroa" },
    { palavra: "manga", dica: "Fruta doce muito consumida no Brasil" },
    { palavra: "laranja", dica: "Citrica e fonte de vitamina C" },
    { palavra: "uva", dica: "Pequena e usada para vinho" },
    { palavra: "pera", dica: "Fruta macia e suculenta" },
    { palavra: "melancia", dica: "Grande e muito refrescante" },
    { palavra: "caju", dica: "Tem castanha e polpa" },
    { palavra: "acerola", dica: "Muito rica em vitamina C" },
    { palavra: "goiaba", dica: "Fruta tropical com sementes" },
    { palavra: "figo", dica: "Doce e macio" },
    { palavra: "kiwi", dica: "Pequeno, verde e azedinho" },
    { palavra: "jabuticaba", dica: "Cresce direto no tronco" },
    { palavra: "abacate", dica: "Usado em guacamole e vitaminas" },
    { palavra: "amora", dica: "Pequena e escura, sabor acido" },
    { palavra: "pitanga", dica: "Fruta pequena e vermelha" },
    { palavra: "maracuja", dica: "Fruta azeda, usada em sucos" },
    { palavra: "carambola", dica: "Fruta em formato de estrela" },
    { palavra: "nectarina", dica: "Parecida com o pêssego" },
    { palavra: "framboesa", dica: "Pequena e delicada" },
    { palavra: "caqui", dica: "Doce quando maduro" },
    { palavra: "limao", dica: "Citrico muito usado em temperos" },
    { palavra: "bergamota", dica: "Tambem chamada de tangerina" },
    { palavra: "pitaya", dica: "Fruta exotica com polpa colorida" }
  ],
  animais: [
    { palavra: "elefante", dica: "Maior mamifero terrestre" },
    { palavra: "golfinho", dica: "Mamifero marinho inteligente" },
    { palavra: "tatu", dica: "Animal com carapaca que cava" },
    { palavra: "papagaio", dica: "Ave que pode imitar sons" },
    { palavra: "leao", dica: "Rei da selva" },
    { palavra: "tigre", dica: "Felino listrado" },
    { palavra: "girafa", dica: "Pescoco muito longo" },
    { palavra: "canguru", dica: "Marsupial que salta" },
    { palavra: "pinguim", dica: "Ave que nao voa e vive em colonias" },
    { palavra: "urso", dica: "Grande mamifero, alguns hibernam" },
    { palavra: "coelho", dica: "Pequeno e com orelhas longas" },
    { palavra: "macaco", dica: "Primate agil e inteligente" },
    { palavra: "coruja", dica: "Ave noturna com visao aguçada" },
    { palavra: "baleia", dica: "Maior animal marinho" },
    { palavra: "zebra", dica: "Equideo com listras" },
    { palavra: "hipopotamo", dica: "Grande e semi aquatico" },
    { palavra: "rinoceronte", dica: "Grande mamifero com chifre" },
    { palavra: "raposa", dica: "Canideo astuto" },
    { palavra: "lobo", dica: "Canideo que vive em alcateias" },
    { palavra: "camelo", dica: "Resistente em desertos" },
    { palavra: "avestruz", dica: "Maior ave que corre rapido" },
    { palavra: "ornitorrinco", dica: "Mamifero que bota ovos" },
    { palavra: "esquilo", dica: "Roedor agil que sobe arvores" },
    { palavra: "polvo", dica: "Molusco com tentaculos" },
    { palavra: "caranguejo", dica: "Crustaceo com pinças" }
  ],
  objetos: [
    { palavra: "computador", dica: "Maquina para processar dados" },
    { palavra: "cadeira", dica: "Usada para sentar" },
    { palavra: "telefone", dica: "Comunicacao a distancia" },
    { palavra: "caneta", dica: "Instrumento para escrever" },
    { palavra: "mesa", dica: "Superficie para apoiar objetos" },
    { palavra: "relogio", dica: "Marca o tempo" },
    { palavra: "televisao", dica: "Aparelho para assistir programas" },
    { palavra: "livro", dica: "Fonte de conhecimento impresso" },
    { palavra: "chave", dica: "Usada para abrir fechaduras" },
    { palavra: "lanterna", dica: "Fonte portatil de luz" },
    { palavra: "mochila", dica: "Usada para carregar coisas nas costas" },
    { palavra: "garrafa", dica: "Recipiente para liquidos" },
    { palavra: "faca", dica: "Utensilio cortante" },
    { palavra: "ventilador", dica: "Gera fluxo de ar" },
    { palavra: "abajur", dica: "Iluminacao de mesa" },
    { palavra: "almofada", dica: "Conforto para sentar ou deitar" },
    { palavra: "teclado", dica: "Entrada de texto para computador" },
    { palavra: "monitor", dica: "Tela para exibir informacoes" },
    { palavra: "impressora", dica: "Imprime documentos fisicos" },
    { palavra: "cadeado", dica: "Usado para trancar portas" },
    { palavra: "escova", dica: "Usada para limpar ou pentear" },
    { palavra: "prato", dica: "Recipiente para servir comida" },
    { palavra: "garfo", dica: "Talher com dentes" },
    { palavra: "panela", dica: "Usada para cozinhar" },
    { palavra: "microondas", dica: "Aparelho para aquecer alimentos" }
  ]
};

// Fatores de dificuldade (facil tem mais tentativas)
const DIFICULDADE_FATOR = {
  facil: 0.5,
  intermediario: 0.3,
  dificil: 0.2
};

// Elementos DOM
const registro = document.getElementById("registro");
const btnIniciar = document.getElementById("btnIniciar");
const nomeInput = document.getElementById("nome");
const diffButtons = document.querySelectorAll(".diff-btn");

const jogoSection = document.getElementById("jogo");
const jogadorNomeSpan = document.getElementById("jogadorNome");
const jogadorDificuldadeSpan = document.getElementById("jogadorDificuldade");
const jogadorCategoriaSpan = document.getElementById("jogadorCategoria");
const tentativasSpan = document.getElementById("tentativasRestantes");
const palavraDiv = document.getElementById("palavra");
const dicaDiv = document.getElementById("dica");
const tecladoDiv = document.getElementById("teclado");
const mensagemP = document.getElementById("mensagem");
const btnReiniciar = document.getElementById("btnReiniciar");

const canvas = document.getElementById("forcaCanvas");
const ctx = canvas.getContext("2d");

const tabelaPlacarBody = document.querySelector("#tabelaPlacar tbody");
const btnLimparPlacar = document.getElementById("btnLimparPlacar");

// Estado do jogo
let palavraSecreta = "";
let dicaAtual = "";
let progresso = [];
let tentativasRestantes = 0;
let maxErros = 0;
let erros = 0;
let jogador = "";
let dificuldade = "facil";
let categoriaEscolhida = "";

// Placar persistente
function carregarPlacar() {
  const raw = localStorage.getItem("placar_forca");
  return raw ? JSON.parse(raw) : [];
}
function salvarPlacar(placar) {
  localStorage.setItem("placar_forca", JSON.stringify(placar));
}
function atualizarTabelaPlacar() {
  const placar = carregarPlacar().sort((a,b)=>b.score-a.score);
  tabelaPlacarBody.innerHTML = "";
  placar.forEach((item, idx) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${idx+1}</td><td>${escapeHtml(item.nome)}</td><td>${item.score}</td>`;
    tabelaPlacarBody.appendChild(tr);
  });
}
btnLimparPlacar.addEventListener("click", ()=>{
  localStorage.removeItem("placar_forca");
  atualizarTabelaPlacar();
});

// Segurança minima para evitar injecao no DOM
function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c])); }

// Escolhe uma categoria aleatoria e uma palavra dentro dela
function escolherCategoriaEPalavra(){
  const chaves = Object.keys(DADOS);
  const idxCat = Math.floor(Math.random() * chaves.length);
  const cat = chaves[idxCat];
  const lista = DADOS[cat];
  const escolha = lista[Math.floor(Math.random()*lista.length)];
  return { categoria: cat, palavra: escolha.palavra.toLowerCase(), dica: escolha.dica };
}

// Gerencia selecao visual dos botoes de dificuldade
diffButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    diffButtons.forEach(b => {
      b.classList.remove("active");
      b.setAttribute("aria-pressed", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-pressed", "true");
    dificuldade = btn.dataset.dificuldade || "facil";
  });

  // Permitir selecao por teclado com Enter/Space
  btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      btn.click();
    }
  });
});

// Iniciar jogo
btnIniciar.addEventListener("click", ()=>{
  const nome = nomeInput.value.trim() || "Anonimo";
  jogador = nome;

  // se nenhuma dificuldade foi selecionada, usar facil por padrao
  const selecionado = document.querySelector(".diff-btn.active");
  dificuldade = selecionado ? selecionado.dataset.dificuldade : "facil";

  // escolher categoria e palavra aleatoriamente
  const escolha = escolherCategoriaEPalavra();
  categoriaEscolhida = escolha.categoria;
  palavraSecreta = escolha.palavra;
  dicaAtual = escolha.dica;

  // calcular tentativas maximas a partir do fator (facil tem mais tentativas)
  const fator = DIFICULDADE_FATOR[dificuldade];
  maxErros = Math.max(1, Math.ceil(palavraSecreta.length * fator));
  tentativasRestantes = maxErros;
  erros = 0;

  progresso = Array.from(palavraSecreta).map(ch => (ch === " " ? " " : "_"));

  // atualizar UI
  jogadorNomeSpan.textContent = jogador;
  jogadorDificuldadeSpan.textContent = formatarDificuldadeExibicao(dificuldade);
  jogadorCategoriaSpan.textContent = formatarCategoria(categoriaEscolhida);
  tentativasSpan.textContent = tentativasRestantes;
  palavraDiv.textContent = progresso.join(" ");
  dicaDiv.textContent = "Dica: " + dicaAtual;
  mensagemP.textContent = "";

  registro.classList.add("hidden");
  jogoSection.classList.remove("hidden");

  desenharForcaInicial();
  criarTeclado();
});

// Reiniciar jogo (voltar ao registro)
btnReiniciar.addEventListener("click", ()=>{
  registro.classList.remove("hidden");
  jogoSection.classList.add("hidden");
  limparCanvas();
});

// Criar teclado
function criarTeclado(){
  tecladoDiv.innerHTML = "";
  for(let i=65;i<=90;i++){
    const letra = String.fromCharCode(i).toLowerCase();
    const btn = document.createElement("button");
    btn.textContent = letra;
    btn.addEventListener("click", ()=>verificarLetra(letra, btn));
    tecladoDiv.appendChild(btn);
  }
}

// Verificar letra
function verificarLetra(letra, btn){
  if (tentativasRestantes <= 0) return;
  btn.disabled = true;

  if (palavraSecreta.includes(letra)){
    for (let i=0;i<palavraSecreta.length;i++){
      if (palavraSecreta[i] === letra) progresso[i] = letra;
    }
    btn.classList.add("correct");
    palavraDiv.textContent = progresso.join(" ");
    if (!progresso.includes("_")){
      finalizarJogo(true);
    }
  } else {
    btn.classList.add("wrong");
    erros++;
    tentativasRestantes = Math.max(0, maxErros - erros);
    tentativasSpan.textContent = tentativasRestantes;
    desenharProximoErro(erros);
    if (tentativasRestantes === 0){
      // desenhar boneco completo independentemente do maxErros
      desenharForcaCompleta();
      finalizarJogo(false);
    }
  }
}

// Finalizar jogo
function finalizarJogo(venceu){
  // calcular score simples: base por dificuldade + bonus por tentativas sobrando + comprimento da palavra
  const base = dificuldade === "facil" ? 50 : dificuldade === "intermediario" ? 100 : 200;
  const bonus = tentativasRestantes * 10;
  const comprimento = palavraSecreta.length;
  const score = venceu ? base + bonus + comprimento : Math.max(0, Math.floor((base/4) - (erros*5)));

  // mostrar mensagem com quebra de linha e score em fonte maior
  if (venceu) {
    mensagemP.innerHTML = `🎉 Você venceu!<span class="score">Score: ${score}</span>`;
  } else {
    mensagemP.innerHTML = `💀 Você perdeu! A palavra era "${escapeHtml(palavraSecreta)}".<span class="score">Score: ${score}</span>`;
  }

  // salvar no placar
  const placar = carregarPlacar();
  placar.push({ nome: jogador, score, data: new Date().toISOString() });
  salvarPlacar(placar);
  atualizarTabelaPlacar();

  // desabilitar teclado
  const botoes = tecladoDiv.querySelectorAll("button");
  botoes.forEach(b => b.disabled = true);
}

// Canvas da forca
function desenharForcaInicial(){
  limparCanvas();
  ctx.strokeStyle = "#333";
  ctx.lineWidth = 4;
  // base
  ctx.beginPath();
  ctx.moveTo(20,220);
  ctx.lineTo(200,220);
  ctx.stroke();
  // poste
  ctx.beginPath();
  ctx.moveTo(60,220);
  ctx.lineTo(60,20);
  ctx.lineTo(140,20);
  ctx.lineTo(140,40);
  ctx.stroke();
  // nao desenha corpo ainda
}

function limparCanvas(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
}

// desenha partes progressivamente (mantido para compatibilidade)
function desenharProximoErro(n){
  ctx.strokeStyle = "#333";
  ctx.lineWidth = 3;
  switch(n){
    case 1: // cabeca
      ctx.beginPath();
      ctx.arc(140,60,18,0,Math.PI*2);
      ctx.stroke();
      break;
    case 2: // tronco
      ctx.beginPath();
      ctx.moveTo(140,78);
      ctx.lineTo(140,130);
      ctx.stroke();
      break;
    case 3: // braco esquerdo
      ctx.beginPath();
      ctx.moveTo(140,90);
      ctx.lineTo(115,110);
      ctx.stroke();
      break;
    case 4: // braco direito
      ctx.beginPath();
      ctx.moveTo(140,90);
      ctx.lineTo(165,110);
      ctx.stroke();
      break;
    case 5: // perna esquerda
      ctx.beginPath();
      ctx.moveTo(140,130);
      ctx.lineTo(120,170);
      ctx.stroke();
      break;
    case 6: // perna direita
      ctx.beginPath();
      ctx.moveTo(140,130);
      ctx.lineTo(160,170);
      ctx.stroke();
      break;
    default:
      // nada extra aqui
  }
}

// desenha o boneco completo (usado quando o jogador perde)
function desenharForcaCompleta(){
  limparCanvas();
  // desenha estrutura
  ctx.strokeStyle = "#333";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(20,220);
  ctx.lineTo(200,220);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(60,220);
  ctx.lineTo(60,20);
  ctx.lineTo(140,20);
  ctx.lineTo(140,40);
  ctx.stroke();

  // desenha todas as partes do corpo
  ctx.lineWidth = 3;
  // cabeca
  ctx.beginPath();
  ctx.arc(140,60,18,0,Math.PI*2);
  ctx.stroke();
  // tronco
  ctx.beginPath();
  ctx.moveTo(140,78);
  ctx.lineTo(140,130);
  ctx.stroke();
  // braco esquerdo
  ctx.beginPath();
  ctx.moveTo(140,90);
  ctx.lineTo(115,110);
  ctx.stroke();
  // braco direito
  ctx.beginPath();
  ctx.moveTo(140,90);
  ctx.lineTo(165,110);
  ctx.stroke();
  // perna esquerda
  ctx.beginPath();
  ctx.moveTo(140,130);
  ctx.lineTo(120,170);
  ctx.stroke();
  // perna direita
  ctx.beginPath();
  ctx.moveTo(140,130);
  ctx.lineTo(160,170);
  ctx.stroke();

  // olhos X (opcional para indicar derrota)
  ctx.strokeStyle = "#d9534f";
  ctx.lineWidth = 2;
  // olho esquerdo
  ctx.beginPath();
  ctx.moveTo(134,54);
  ctx.lineTo(138,58);
  ctx.moveTo(138,54);
  ctx.lineTo(134,58);
  ctx.stroke();
  // olho direito
  ctx.beginPath();
  ctx.moveTo(142,54);
  ctx.lineTo(146,58);
  ctx.moveTo(146,54);
  ctx.lineTo(142,58);
  ctx.stroke();
}

// Formata nome da categoria para exibicao
function formatarCategoria(cat){
  if (cat === "linguagem") return "Linguagem de programacao";
  if (cat === "frutas") return "Frutas";
  if (cat === "animais") return "Animais";
  if (cat === "objetos") return "Objetos";
  return cat;
}

// Formata dificuldade para exibicao com inicial maiuscula e acento
function formatarDificuldadeExibicao(key){
  if (key === "facil") return "Fácil";
  if (key === "intermediario") return "Intermediário";
  if (key === "dificil") return "Difícil";
  return key;
}

// Inicializar placar ao carregar
atualizarTabelaPlacar();
