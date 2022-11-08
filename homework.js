"use strict";
// questão 1 
let texto1 = "*******************************************************************";
let texto2 = "BEM-VINDO AO MEU PROGRAMA";
let texto3 = "*******************************************************************";
let texto4 = "ELE REALMENTE FUNCIONA";
let texto5 = "*******************************************************************";
let texto6 = "EU USEI FUNÇÃO PARA FAZER ISSO";
exibirTexto(texto1);
exibirTexto(texto2);
exibirTexto(texto3);
exibirTexto(texto4);
exibirTexto(texto5);
exibirTexto(texto6);
function exibirTexto(frase) {
    return console.log(frase);
}
// ========= Questão 2 =============
alert("Questão 2");
//questão 2 
let numero1 = prompt('Digite um número') || '';
let numero2 = prompt('Digite um número') || '';
function soma(numero1, numero2) {
    return (`${numero1} + ${numero2} = ${parseInt(numero1) + parseInt(numero2)}`);
}
alert('A soma é igual ' + soma(numero1, numero2));
// ========= Questão 3 =============
alert("Questão 3");
// questão 3
let pergunta = prompt("Digite Sim ou Não: ") || '';
function VerificaSeSim(pergunta) {
    if (pergunta == "sim") {
        alert("Parabéns!");
    }
    else if (pergunta == "nao") {
        alert("Digite Apenas Sim ou Não:");
    }
    else {
        alert("Você tem noções dos seus atos?");
    }
}
VerificaSeSim(prompt('Digite sim ou nao'));
// ========= Questão 4 =============
alert("Questão 4");
//questão 4 
let nomeCliente = prompt("Digite seu nome: ") || '';
let nomeAtendente = prompt('Digite o nome da atendente: ') || '';
function alertaAtendente(nomeCliente, nomeAtendente) {
    alert(`Olá, ${nomeCliente}! Eu me chamo ${nomeAtendente}, como posso ajudar?`);
}
alert(alertaAtendente(nomeCliente, nomeAtendente));
// ========= Questão 5 =============
alert("Questão 5");
// // questão 5 
let segundos = prompt("Digite um numero em segundos: ") || '';
function converteHoras(segundos) {
    return parseInt(segundos) / 3600;
}
function converteminutos(segundos, converteHoras) {
    return (parseInt(segundos) - (converteHoras * 3600)) / 60;
}
function convertesegundos(segundos) {
    return parseInt(segundos) % 60;
}
alert(converteHoras(segundos) + ' horas ' + converteminutos(segundos, converteHoras(segundos)) + ' minutos ' + convertesegundos(segundos) + ' segundos ');
// ========= Questão 6 =============
alert("Questão 6");
//questão 6 
let ano = prompt("Digte um ano ") || '';
function bissexto(ano) {
    return (parseInt(ano) % 4 == 0 && parseInt(ano) % 100 != 0) || parseInt(ano) % 400 == 0;
}
alert('O ano digitado é bissexto: ' + bissexto(ano));
// ========= Questão 7 =============
alert("Questão 7 - pegadinha");
//  questão 7
function fazPegadinha() {
    alert("Guria!");
    alert("Tudo bem?");
    alert("Será que agora acaba?");
    alert("ishhh, não acabou!");
    alert("agora é serio, ta no final!");
    alert("hahaha brincadeira");
    alert("só mais um?");
    alert("deu, né?");
    alert("tá é oficial,deu!");
}
fazPegadinha();
// ========= Questão 8 =============
alert("Questão 8");
//questão 8
let num1 = prompt("Digite um número: ") || '';
let num2 = prompt("Digite um número: ") || '';
let operacao = prompt("Digite a operacao desejada: (+,-,* ou /)'") || '';
function resolvendo(num1, num2) {
    if (operacao == '+') {
        return parseInt(num1) + parseInt(num2);
    }
    else if (operacao == "-") {
        return parseInt(num1) - parseInt(num2);
        ;
    }
    else if (operacao == "*") {
        return parseInt(num1) * parseInt(num2);
        ;
    }
    else if (operacao == "/") {
        return parseInt(num1) / parseInt(num2);
        ;
    }
}
alert("O resultado da operação escolhida é: " + resolvendo(num1, num2));
// ========= Questão 9 =============
alert("Questão 9");
// questão 9 
let carlos = 28;
let ana = 15;
let irmaLuiza = 23;
let luiza = 20;
function subtracaoCarlosEAna(carlos, ana) {
    return carlos - ana;
}
function subtracaoLuizaEIrmaLuiza(irmaLuiza, Luiza) {
    return irmaLuiza - Luiza;
}
function concatenacaoIdades(subtracaoCarlosEAna, subtracaoLuizaEIrmaLuiza) {
    return subtracaoCarlosEAna - subtracaoLuizaEIrmaLuiza;
}
alert("A nossa diferença de idade é " + subtracaoCarlosEAna(carlos, ana));
alert("A minha diferença de idade com a minha irma é de " + subtracaoLuizaEIrmaLuiza(irmaLuiza, luiza) + " anos");
alert("A concatenacao das idades é " + concatenacaoIdades(subtracaoCarlosEAna(carlos, ana), subtracaoLuizaEIrmaLuiza(irmaLuiza, luiza)) + " anos");
// ========= Questão 10 =============
alert("Questão 10");
// questão 10
let chegada = 1500;
let anoDeHoje = 2022;
function numGeracoes(anoDeHoje, chegada) {
    return (anoDeHoje - chegada) / 28; // Math.floor n ta funcionando e nem o parseFloat
}
alert("Já se passaram " + numGeracoes(anoDeHoje, chegada) + " anos");
