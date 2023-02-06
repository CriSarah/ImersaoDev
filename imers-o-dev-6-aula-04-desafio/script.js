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

var nomeFilmes = ['Um sonho possivel','modern family','Big bang a teoria', 'Os batutinhas', 'Todo mundo odeia o Chris', 'Um maluco no pedaço', 'Gato de botas 2', 'De volta para o futuro']

var trailersFilme = [
  'https://www.youtube.com/watch?v=qacQrxVl0Xo',
  'https://www.youtube.com/watch?v=X0lRjbrH-L8',
  'https://www.youtube.com/_3bvacw-Xrc',
  'https://www.youtube.com/watch?v=XC9fB1aLaM4',
  'https://www.youtube.com/watch?v=HBV6fTT_SH8',
  'https://www.youtube.com/watch?v=E47zkZjv6PE',
  'https://www.youtube.com/sLk94T-hS78',
  'https://www.youtube.com/HBkNzSlvKu8',
]

var elementoSelecao = document.getElementById('deletar'); 

function adicionarFilme() {
  var filmeNovo = document.getElementById("adicionar").value;
   var nomeFilme = document.getElementById("nome").value;
  if (listaFilmes.includes(filmeNovo)) {
    alert("Este filme já está na lista.");
  } else {
    listaFilmes.push(filmeNovo)
    nomeFilmes.push(nomeFilme)
    document.body.innerHTML += "<div class='filmes'>" + "<img src=" + listaFilmes.at(-1) + ">" + "<p style='color: #ffffff;'>" + nomeFilmes.at(-1) + '</p></div>';
  }
}

var filmeElemento = document.querySelector('.filmes') 

function exibirFilmes() {
  filmeElemento.innerHTML = ''
    for (var i = 0; i < listaFilmes.length; i++) {
      
    filmeElemento.innerHTML += "<div class='filmes'>" + "<img src=" + listaFilmes[i] + ">" + "<p style='color: #ffffff;'>" + nomeFilmes[i] + '</p></div>';
  
  }
}



document.write("</div>");

function listaDeletar() {
    var codigoLista = '<option selected disabled value="">Selecione um filme para deletar</option>';
 for (var i = 0; i < listaFilmes.length; i++) {
      codigoLista += `<option value="${i}">${nomeFilmes[i]}</option>`;
    }
  elementoSelecao.innerHTML = '';
    elementoSelecao.innerHTML += codigoLista;
 }

function deletar() { 
  var selecao = parseInt(document.getElementById('deletar').value);
  
    if (selecao >= 0) {
      listaFilmes.splice(selecao, 1);
      nomeFilmes.splice(selecao, 1);
      trailersFilme.splice(selecao, 1);
    } 
    listaDeletar();
    exibirFilmes();
  

    }
  
listaDeletar();
exibirFilmes();