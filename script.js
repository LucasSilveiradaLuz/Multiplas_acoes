const resposta = document.getElementById("resposta")

function calcular(){
let numero1=prompt("Primeiro valor:");
let numero2= prompt("Segundo valor");
let operacao = prompt("O que iremos realizar?[1]soma [2]subtracao [3]multiplicacao [4]divisao");

if (numero1 === null || numero1 === "" ||
      numero2 === null || numero2 === "" ||
      operacao === null || operacao === "") {
    resposta.innerText = "Por favor, preencha todos os campos.";
    return; 
  }
  numero1 = Number(numero1);
  numero2 = Number(numero2);

  let soma = numero1 + numero2
  let subtracao = numero1 - numero2
  let multiplicacao = numero1 * numero2
  let divisao = numero1 / numero2

  if(operacao.indexOf("soma") !== -1 || operacao.indexOf("1")!== -1){
      resposta.innerText = "O resultado é: "+ soma
  }
   if(operacao.indexOf("subtracao") !== -1 || operacao.indexOf("2")!== -1){
      resposta.innerText = "O resultado é: "+ subtracao
  }
   if(operacao.indexOf("multiplicacao") !== -1 || operacao.indexOf("3")!== -1){
      resposta.innerText = "O resultado é: "+ multiplicacao
  }
   if(operacao.indexOf("divisao") !== -1 || operacao.indexOf("4")!== -1){
      resposta.innerText = "O resultado é: "+ divisao
  }
  }

