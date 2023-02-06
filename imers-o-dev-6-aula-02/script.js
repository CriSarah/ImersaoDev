var numeroSecreto = parseInt(Math.random() * 601);

var chances = 1;

if(numeroSecreto != 0);


alert('Vamos brincar de advinhação!');

while(chute != numeroSecreto) {
    var chute = prompt("Chute um número entre 0 e 600");

    if(chute == numeroSecreto) {

      alert('Parabéns, você acertou!')
      alert("Depois de" + chances + "você acertou, parabéns!") {
        
        break
      }
      
    } else if (chute > numeroSecreto) {

      alert(' Você errou... O número secreto é menor')
      alert("Você já fez " + chances + 1 + "tentativas!");
      chances ++
      if(chances == 1) {
        
        break
      }
    } else if  (chute < numeroSecreto)     
      {
      alert('Você errou... O número secreto é maior')
        alert("Você já fez " + chances + "tentativas!");
        
      }
  }


console.log('O número pensado foi ' + numeroSecreto)
alert('O número pensado foi ' + numeroSecreto)