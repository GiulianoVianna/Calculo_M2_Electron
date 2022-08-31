
function calculo() {
  var num1 = document.getElementById("altura").value / 100;
  var num2 = document.getElementById("largura").value / 100;
  var valor = document.getElementById("valor").value;
  var soma = parseInt(num1) + parseInt(num2);
  document.getElementById("resultado").value = ((parseFloat(num1) * parseFloat(num2)) * parseFloat(valor)).toFixed(2);

}

function limpar() {
  document.getElementById("altura").value = "";
  document.getElementById("largura").value = "";
  document.getElementById("valor").value = "";
  document.getElementById("resultado").value = "";

}
