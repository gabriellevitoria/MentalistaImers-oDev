var numeroSecreto = parseInt(Math.random() * 11);
var resultado = document.getElementById ('resultado')
function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    resultado.innerHTML = 'Parabéns você acertou :)';
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = 'você deve digitar um número de 0 a 10';
  } else {
    resultado.innerHTML = 'você errou :(  \n o número secreto era ' + numeroSecreto;
    
  }
}
