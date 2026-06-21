Autor: Luiz Augusto Mendes Barbosa

# Jogo da Forca
Para usar o jogo execute:

```bash
npm install
npm start
```

Abra http://localhost:3000 no navegador.<br>
Ou acesse em: https://forcagame.netlify.app/

Este projeto é um jogo da forca implementado com HTML, CSS e JavaScript e servido por um pequeno servidor Node/Express. A interface tem fundo preto e um container com borda para destacar o conteúdo. O jogador informa um nome e escolhe a dificuldade por botões animados; a categoria da palavra é escolhida aleatoriamente entre Linguagem de programação, Frutas, Animais e Objetos. Cada categoria contém 25 palavras com dicas. As dificuldades são Fácil, Intermediário e Difícil; Fácil concede mais tentativas que Intermediário e Difícil. O número máximo de erros permitidos é calculado a partir do tamanho da palavra multiplicado por um fator por nível. O jogo desenha a forca em um canvas; ao perder o boneco é desenhado completamente. Há um teclado de letras interativo; letras corretas e erradas são destacadas. O placar é persistido no localStorage e exibido em uma tabela ordenada por score. Todos os botões têm animação visual e efeitos sonoros: som ao passar o mouse, som ao clicar, som de acerto, som de erro, som de vitória e som de derrota. Os sons são gerados dinamicamente no navegador usando Web Audio API, sem necessidade de arquivos externos. Para personalizar palavras ou fatores de dificuldade edite o arquivo script.js. O servidor é mínimo e serve apenas arquivos estáticos; pode ser substituído por outro servidor se desejar.

## 🎮  Como jogar
O jogador registra seu nome e escolhe a dificuldade (Fácil, Intermediário ou Difícil).

Uma categoria é escolhida aleatoriamente (Linguagem de programação, Frutas, Animais ou Objetos).

O jogo seleciona uma palavra secreta dessa categoria e mostra uma dica relacionada.

O jogador deve adivinhar a palavra escolhendo letras no teclado virtual.

Cada letra correta é revelada na palavra; cada letra errada reduz o número de tentativas disponíveis.

O número máximo de erros permitidos depende da dificuldade escolhida:

Fácil: mais tentativas.

Intermediário: número médio de tentativas.

Difícil: menos tentativas.

Se o jogador errar todas as tentativas, o boneco da forca é desenhado completamente e a partida termina em derrota.

Se o jogador completar a palavra antes de esgotar as tentativas, vence a partida.

Ao final, o jogo mostra o score (pontuação) e registra no placar.

## Referências
Hangman Game Rules – descrição tradicional do jogo da forca em inglês: The Spruce Crafts (thesprucecrafts.com in Bing)

Jogos de palavras e memória – referências culturais sobre o uso da forca em educação: Educação UOL (educacao.uol.com.br in Bing)

Web Audio API – documentação oficial usada para gerar os sons no navegador: MDN Web Docs (developer.mozilla.org in Bing)
