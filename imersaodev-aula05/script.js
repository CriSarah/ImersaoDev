var sarah = {
  nome: "Sarah",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var nina = {
  nome: "Nina",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var salguinho = {
  nome: "Salguinho",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var listaJogadores = [nina, salguinho, sarah];

var elementoTabela = document.getElementById("tabelaJogadores");

function exibirNaTela() {
  elementoTabela.innerHTML = "";
  for (var i = 0; i < listaJogadores.length; i++) {
    elementoTabela.innerHTML += `
    <tr>
       <td>${listaJogadores[i].nome}</td>
       <td>${listaJogadores[i].vitoria}</td>
        <td>${listaJogadores[i].empate}</td>
        <td>${listaJogadores[i].derrota}</td>
        <td>${listaJogadores[i].pontos}</td>
        <td></td>
        <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
          <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
          <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
        </tr>`;
  }
}

function adicionarVitoria(i){
    listaJogadores[i].vitoria++;
    listaJogadores[i].pontos += 3;
 

    exibirNaTela();
}
function adicionarEmpate(i) {
    listaJogadores[i].empate++;
    listaJogadores[i].pontos++;


  exibirNaTela();
}
function adicionarDerrota(jogador) {
  listaJogadores[jogador].derrota++;
  exibirNaTela();
}

exibirNaTela();

function adicionarJogador() {
  var novoJogador = prompt(
    "Insira o nome do novo(a) jogador(a) no campo abaixo:"
  );

  var novoJogador = {
    nome: novoJogador,
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  listaJogadores.push(novoJogador);
  exibirNaTela();
}

function zerarPontos(jogador) {
  for (var i in listaJogadores) {
    listaJogadores[i].vitoria = 0;
    listaJogadores[i].empate= 0;
    listaJogadores[i].derrota = 0;
    listaJogadores[i].pontos = 0;
  }
  exibirNaTela();
}