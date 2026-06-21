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

const DIFICULDADE_FATOR = {
  facil: 0.5,
  intermediario: 0.3,
  dificil: 0.2
};

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

let palavraSecreta = "";
let dicaAtual = "";
let progresso = [];
let tentativasRestantes = 0;
let maxErros = 0;
let erros = 0;
let jogador = "";
let dificuldade = "facil";
let categoriaEscolhida = "";

let audioCtx = null;
function ensureAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  } else if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}
function playTone(freq, type, duration, gain) {
  ensureAudioContext();
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.type = type;
  o.frequency.value = freq;
  g.gain.value = 0;
  o.connect(g);
  g.connect(audioCtx.destination);
  const now = audioCtx.currentTime;
  g.gain.cancelScheduledValues(now);
  g.gain.setValueAtTime(0, now);
  g.gain.linearRampToValueAtTime(gain, now + 0.01);
  g.gain.exponentialRampToValueAtTime(0.001, now + duration);
  o.start(now);
  o.stop(now + duration + 0.02);
}
function playHover() {
  playTone(880, "sine", 0.06, 0.06);
}
function playClick() {
  playTone(660, "triangle", 0.08, 0.08);
}
function playSuccess() {
  playTone(880, "sine", 0.09, 0.09);
  setTimeout(()=>playTone(1100, "sine", 0.12, 0.09), 90);
}
function playError() {
  playTone(220, "sawtooth", 0.18, 0.12);
}
function playDefeat() {
  playTone(220, "sawtooth", 0.18, 0.12);
  setTimeout(()=>playTone(180, "sawtooth", 0.18, 0.12), 180);
  setTimeout(()=>playTone(140, "sawtooth", 0.22, 0.12), 360);
}
function playVictory() {
  playTone(880, "sine", 0.09, 0.09);
  setTimeout(()=>playTone(1100, "sine", 0.09, 0.09), 110);
  setTimeout(()=>playTone(1320, "sine", 0.12, 0.09), 230);
  setTimeout(()=>playTone(1760, "sine", 0.18, 0.12), 360);
}

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

function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c])); }

function escolherCategoriaEPalavra(){
  const chaves = Object.keys(DADOS);
  const idxCat = Math.floor(Math.random() * chaves.length);
  const cat = chaves[idxCat];
  const lista = DADOS[cat];
  const escolha = lista[Math.floor(Math.random()*lista.length)];
  return { categoria: cat, palavra: escolha.palavra.toLowerCase(), dica: escolha.dica };
}

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
  btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      btn.click();
    }
  });
  btn.addEventListener("mouseenter", ()=>{ playHover(); });
  btn.addEventListener("click", ()=>{ playClick(); });
});

document.addEventListener("mouseover", (e)=>{
  const b = e.target.closest("button");
  if (b && !b.dataset._hovered) {
    b.dataset._hovered = "1";
    setTimeout(()=>{ delete b.dataset._hovered; }, 250);
    playHover();
  }
});
document.addEventListener("click", (e)=>{
  const b = e.target.closest("button");
  if (b) playClick();
});

btnIniciar.addEventListener("click", ()=>{
  const nome = nomeInput.value.trim() || "Anonimo";
  jogador = nome;
  const selecionado = document.querySelector(".diff-btn.active");
  dificuldade = selecionado ? selecionado.dataset.dificuldade : "facil";
  const escolha = escolherCategoriaEPalavra();
  categoriaEscolhida = escolha.categoria;
  palavraSecreta = escolha.palavra;
  dicaAtual = escolha.dica;
  const fator = DIFICULDADE_FATOR[dificuldade];
  maxErros = Math.max(1, Math.ceil(palavraSecreta.length * fator));
  tentativasRestantes = maxErros;
  erros = 0;
  progresso = Array.from(palavraSecreta).map(ch => (ch === " " ? " " : "_"));
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

btnReiniciar.addEventListener("click", ()=>{
  registro.classList.remove("hidden");
  jogoSection.classList.add("hidden");
  limparCanvas();
});

function criarTeclado(){
  tecladoDiv.innerHTML = "";
  for(let i=65;i<=90;i++){
    const letra = String.fromCharCode(i).toLowerCase();
    const btn = document.createElement("button");
    btn.textContent = letra;
    btn.addEventListener("click", ()=>verificarLetra(letra, btn));
    btn.addEventListener("mouseenter", ()=>playHover());
    btn.addEventListener("click", ()=>playClick());
    tecladoDiv.appendChild(btn);
  }
}

function verificarLetra(letra, btn){
  if (tentativasRestantes <= 0) return;
  btn.disabled = true;
  if (palavraSecreta.includes(letra)){
    for (let i=0;i<palavraSecreta.length;i++){
      if (palavraSecreta[i] === letra) progresso[i] = letra;
    }
    btn.classList.add("correct");
    palavraDiv.textContent = progresso.join(" ");
    playSuccess();
    if (!progresso.includes("_")){
      playVictory();
      finalizarJogo(true);
    }
  } else {
    btn.classList.add("wrong");
    erros++;
    tentativasRestantes = Math.max(0, maxErros - erros);
    tentativasSpan.textContent = tentativasRestantes;
    desenharProximoErro(erros);
    playError();
    if (tentativasRestantes === 0){
      desenharForcaCompleta();
      playDefeat();
      finalizarJogo(false);
    }
  }
}

function finalizarJogo(venceu){
  const base = dificuldade === "facil" ? 50 : dificuldade === "intermediario" ? 100 : 200;
  const bonus = tentativasRestantes * 10;
  const comprimento = palavraSecreta.length;
  const score = venceu ? base + bonus + comprimento : Math.max(0, Math.floor((base/4) - (erros*5)));
  if (venceu) {
    mensagemP.innerHTML = `🎉 Você venceu!<span class="score">Score: ${score}</span>`;
  } else {
    mensagemP.innerHTML = `💀 Você perdeu! A palavra era "${escapeHtml(palavraSecreta)}".<span class="score">Score: ${score}</span>`;
  }
  const placar = carregarPlacar();
  placar.push({ nome: jogador, score, data: new Date().toISOString() });
  salvarPlacar(placar);
  atualizarTabelaPlacar();
  const botoes = tecladoDiv.querySelectorAll("button");
  botoes.forEach(b => b.disabled = true);
}

function desenharForcaInicial(){
  limparCanvas();
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
}

function limparCanvas(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
}

function desenharProximoErro(n){
  ctx.strokeStyle = "#333";
  ctx.lineWidth = 3;
  switch(n){
    case 1:
      ctx.beginPath();
      ctx.arc(140,60,18,0,Math.PI*2);
      ctx.stroke();
      break;
    case 2:
      ctx.beginPath();
      ctx.moveTo(140,78);
      ctx.lineTo(140,130);
      ctx.stroke();
      break;
    case 3:
      ctx.beginPath();
      ctx.moveTo(140,90);
      ctx.lineTo(115,110);
      ctx.stroke();
      break;
    case 4:
      ctx.beginPath();
      ctx.moveTo(140,90);
      ctx.lineTo(165,110);
      ctx.stroke();
      break;
    case 5:
      ctx.beginPath();
      ctx.moveTo(140,130);
      ctx.lineTo(120,170);
      ctx.stroke();
      break;
    case 6:
      ctx.beginPath();
      ctx.moveTo(140,130);
      ctx.lineTo(160,170);
      ctx.stroke();
      break;
    default:
  }
}

function desenharForcaCompleta(){
  limparCanvas();
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
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(140,60,18,0,Math.PI*2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(140,78);
  ctx.lineTo(140,130);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(140,90);
  ctx.lineTo(115,110);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(140,90);
  ctx.lineTo(165,110);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(140,130);
  ctx.lineTo(120,170);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(140,130);
  ctx.lineTo(160,170);
  ctx.stroke();
  ctx.strokeStyle = "#d9534f";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(134,54);
  ctx.lineTo(138,58);
  ctx.moveTo(138,54);
  ctx.lineTo(134,58);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(142,54);
  ctx.lineTo(146,58);
  ctx.moveTo(146,54);
  ctx.lineTo(142,58);
  ctx.stroke();
}

function formatarCategoria(cat){
  if (cat === "linguagem") return "Linguagem de programacao";
  if (cat === "frutas") return "Frutas";
  if (cat === "animais") return "Animais";
  if (cat === "objetos") return "Objetos";
  return cat;
}

function formatarDificuldadeExibicao(key){
  if (key === "facil") return "Fácil";
  if (key === "intermediario") return "Intermediário";
  if (key === "dificil") return "Difícil";
  return key;
}

atualizarTabelaPlacar();
