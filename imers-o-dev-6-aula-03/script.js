var listaFilmes = [
  "https://br.web.img2.acsta.net/medias/nmedia/18/87/31/80/19874256.jpg",
  "https://m.media-amazon.com/images/I/81eEHlCkLsL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/51J5GqodmCL._AC_.jpg",
  "https://br.web.img3.acsta.net/c_310_420/pictures/14/02/17/17/16/262142.jpg",
  "https://s2.glbimg.com/qYlGLjkTz7STsqtdUXe9Kg0d1Yw=/362x536/https://s2.glbimg.com/xe74Dgh6O9Grs3phBFUKLJ8c2r0=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2019/2/a/sdBJPWSOedTfVzkzfWPg/2019-463-series-cbs-jul-everybody-hates-chris-poster.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/7/77/TheFreshPrinceOfBel-Air.jpg/245px-TheFreshPrinceOfBel-Air.jpg",
  "https://jardimdasamericas.com.br/uploads/2022/12/capa-filme-gato-de-botas-2-o-ultimo-pedido-784dc-large.jpg",
  "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/95/62/20122008.jpg"
];

var nomeFilmes = ['Um sonho possivel','modern family','Big bang a teoria', 'Os babutinhas', 'Todo mundo odeia o Chris', 'Um maluco no pedaço', 'Gato de botas 2', 'De volta para o futuro']

function adicionarFilme() {
  var filmeNovo = document.getElementById("adicionar").value;
   var nomeFilme = document.getElementById("nome").value;
  if (listaFilmes.includes(filmeNovo)) {
    alert("Este filme já está na lista.");
  } else {
    listaFilmes.push(filmeNovo)
    nomeFilmes.push(nomeFilme)
    exibirFilmes()
    //var elementoNovo = document.getElementById("filmeNovo");
    //elementoNovo.innerHTML =
    //elementoNovo.innerHTML + "<img src=" + filmeNovo + ">";
  }
}

  
function exibirFilmes() {
for (var i = 0; i < listaFilmes.length; i++) {
  var elementoNovo = document.querySelector(".imagens");
  elementoNovo.innerHTML += "<div class='filmes'>";
  elementoNovo.innerHTML += "<img src=" + listaFilmes[i] + ">";
  elementoNovo.innerHTML += "<h3 style='color: #ffffff;'>" + nomeFilmes[i] + '</h3>';
  elementoNovo.innerHTML += "</div>";
}
}
document.write('<div class="imagens">');

function exibirFilmes() {
  for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<div class='filmes'>");
    document.write("<img src=" + listaFilmes[i] + ">");
    document.write("<p style='color: #ffffff;'>" + nomeFilmes[i] + "</p>");
    document.write("</div>");
  }
}

document.write("</div>");

exibirFilmes();

exibirFilmes();