
# Jogo da Forca
Para usar o jogo execute:

```bash
npm install
npm start
```

Abra http://localhost:3000 no navegador.
Ou acesse pelo deploy em: https://forcagame.netlify.app/

Este projeto é um jogo da forca implementado com HTML, CSS e JavaScript e servido por um pequeno servidor Node/Express. A interface tem fundo preto e um container com borda para destacar o conteúdo. O jogador informa um nome e escolhe a dificuldade por botões animados; a categoria da palavra é escolhida aleatoriamente entre Linguagem de programação, Frutas, Animais e Objetos. Cada categoria contém 25 palavras com dicas. As dificuldades são Fácil, Intermediário e Difícil; Fácil concede mais tentativas que Intermediário e Difícil. O número máximo de erros permitidos é calculado a partir do tamanho da palavra multiplicado por um fator por nível. O jogo desenha a forca em um canvas; ao perder o boneco é desenhado completamente. Há um teclado de letras interativo; letras corretas e erradas são destacadas. O placar é persistido no localStorage e exibido em uma tabela ordenada por score. Todos os botões têm animação visual e efeitos sonoros: som ao passar o mouse, som ao clicar, som de acerto, som de erro, som de vitória e som de derrota. Os sons são gerados dinamicamente no navegador usando Web Audio API, sem necessidade de arquivos externos. Para personalizar palavras ou fatores de dificuldade edite o arquivo script.js. O servidor é mínimo e serve apenas arquivos estáticos; pode ser substituído por outro servidor se desejar.
