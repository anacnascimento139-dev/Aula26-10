// funções no javascript

// function sejaBemvindo() {
//   return "seja bem vindo";
// }
// let saudacao = sejaBemvindo();

// console.log(saudacao)
// function multiply(a, b) {
//     if(isNaN(a) || isNaN(b)){
//         return "Erro,digite um valor válido"
//     }
//   return a * b;
// }

// let num1 = Number(prompt("Digite um número"));
// let num2 = Number(prompt("Digite mais um número"));


// let produto = multiply(num1,num2);
// console.log(produto);

// function somar(a, b) {
//   return a + b;
// }
// let num1 = Number(prompt("Digite um número"));
//  let num2 = Number(prompt("Digite mais um número"));

//  let produto = somar(num1,num2);
// console.log(produto);

// function verificarPar (num){
//     if(num % 2 === 0)
//         return("Par")
//     else{
//         return("Impar")
//     }
// }
// let num1 = Number(prompt("Digite um numero: "))
// let produto = verificarPar(num1)
// console.log(produto)

function calcularMedia(a,b,c){
    return (a + b + c) / 3
}

function verificarAprovacao(media){
    if(media >= 7){
        return "Aprovado";
    }
    else if(media >= 5 && media < 7){
        return "Recuperação";
    }
    else{
        return "Reprovado";
    }
}

let notal = Number(prompt("Digite uma nota:"));
let nota2 = Number(prompt("Digite uma nota:"));
let nota3 = Number(prompt("Digite uma nota:"));

let mediaAluno = calcularMedia(nota1,nota2,nota3);
let resultado = verificaAprovacao(mediaAluno);
console.log(resultado)

