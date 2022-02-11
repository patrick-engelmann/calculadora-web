// selecionando o visor e o botão de igual
document.getElementsById('visor')
document.getElementById('opIgaul')

// Inser os digitos no visor
function teclasAcionadas(valorDigitado) {
  visor.innerHTML += valorDigitado
}

// Limpar
function limpar() {
  visor.innerHTML = ' '
}

// Apagar o ultimo digito
function apagar() {
  if (visor.textContent) {
    let resultado = document.getElementById('visor').innerHTML
    visor.innerHTML = resultado.substring(0, resultado.length - 1)
  }
}

// Mostrar o resultado
function confirmar() {
  if (visor.textContent != 'Error') {
    document.getElementById('visor').innerHTML = eval(visor.innerHTML)
  }
}
