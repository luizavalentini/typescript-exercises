// questão 1 
let texto1: string =   "*******************************************************************";
let texto2: string =     "BEM-VINDO AO MEU PROGRAMA";
let texto3: string =    "*******************************************************************";
let texto4: string =    "ELE REALMENTE FUNCIONA";
let texto5: string =   "*******************************************************************";
let texto6: string =    "EU USEI FUNÇÃO PARA FAZER ISSO";

      exibirTexto(texto1);
      exibirTexto(texto2);
      exibirTexto(texto3);
      exibirTexto(texto4);
      exibirTexto(texto5);
      exibirTexto(texto6);

function exibirTexto(frase: string){ 
    return console.log(frase)
  }

//questão 2 
let numero1: string | null = prompt('Digite um número') || ''
let numero2: string | null = prompt('Digite um número') || ''

function soma(numero1: string, numero2: string): string{ 
         return(`${numero1} + ${numero2} = ${parseInt(numero1) + parseInt(numero2)}`);
}

alert('A soma é igual' + soma(numero1,numero2))


//questão 3
let pergunta: string | null = prompt("Digite Sim ou Não: ") || '';
function VerificaSeSim(pergunta: string){ // : string
    if (pergunta == "sim") {
           alert("Parabéns!");
        } else if (pergunta == "nao") {
          prompt("Digite Apenas Sim ou Não:");
        } else {
          prompt("Você tem noções dos seus atos?");
        }
         document.write(pergunta);
      }
alert(VerificaSeSim(pergunta));

//questão 4 
let nomeCliente: string | null = prompt("Digite seu nome: ") || '';
let nomeAtendente: string | null = prompt('Digite o nome da atendente: ') || '';

function alertaAtendente(nomeCliente: string, nomeAtendente: string){
    window.alert(`Olá, ${nomeCliente}! Eu me chamo ${nomeAtendente}, como posso ajudar?`)
}
alert(alertaAtendente(nomeCliente, nomeAtendente));


// quetsão 5 

let segundos: string | null = prompt("Digite um numero em segundos: ") || '';

function converteHoras(segundos: string): number {
    return (parseInt(segundos) / 3600);
}
function converteminutos(segundos: number, converteHoras: number): number{ //vai ficar number? 
    return (segundos-(converteHoras*3600)) /60;
}
function convertesegundos(segundos: number): number{
    return (segundos%60);
}


//questão 6 
let ano: string | null = prompt("Digte um ano ") || '';

function bissexto(ano: string): boolean {
    return (parseInt(ano) % 4 == 0 && parseInt(ano) % 100 != 0) || parseInt(ano) % 400 == 0;
 }

 alert('O ano digitado é bissexto: '+ bissexto(pergunta));


 // questão 7
    //    alert(fazPegadinha());

    //   function fazPegadinha(popup: string) {
    //     alert("Guria!");
    //     alert("Tudo bem?");
    //     alert("Será que agora acaba?");
    //     alert("ishhh, não acabou!");
    //     alert("agora é serio, ta no final!");
    //     alert("hahaha brincadeira");
    //     alert("só mais um?");
    //     alert("deu, né?");
    //     alert("tá é oficial,deu!");
    //   }


//questão 8
let num1: string | null = prompt("Digite um número: ") || '';
let num2: string | null = prompt("Digite um número: ") || '';
let operacao: string | null = prompt("Digite a operacao desejada: (+,-,* ou /)'") || '';

function resolvendo(num1: string, num2: string){
    if(operacao == '+'){
        return parseInt(num1) + parseInt(num2);
    }
    else if(operacao == "-"){
        return parseInt(num1) - parseInt(num2);;
    }
    else if(operacao == "*"){
        return parseInt(num1) * parseInt(num2); ;
    }
    else if(operacao == "/"){
        return parseInt(num1)/parseInt(num2);;
    }
   }

   alert("O resultado da operação escolhida é: " + resolvendo);


// questão 9 
let carlos: number = 28;
let ana: number = 15;
let irmaLuiza: number = 23;
let luiza: number = 20;

function subtracaoCarlosEAna(carlos: number, ana: number): number{
         return carlos-ana;
}


 function subtracaoLuizaEIrmaLuiza(irmaLuiza: number, Luiza: number): number{
                return irmaLuiza-Luiza;
}

function concatenacaoIdades(subtracaoCarlosEAna: number, subtracaoLuizaEIrmaLuiza: number){
    return subtracaoCarlosEAna-subtracaoLuizaEIrmaLuiza;
 }

alert("A nossa diferença de idade é " +  subtracaoCarlosEAna(carlos, ana));
alert ("A minha diferença de idade com a minha irma é de" + subtracaoLuizaEIrmaLuiza(irmaLuiza,luiza));
alert("A concatenacao das idades é " + concatenacaoIdades( subtracaoCarlosEAna(carlos, ana), subtracaoLuizaEIrmaLuiza(irmaLuiza,luiza))); 


// questão 10
      let chegada: number = 1500;
      let anoDeHoje: number = 2022;
     
      function numGeracoes(anoDeHoje: number, chegada: number): number {
       return (anoDeHoje - chegada) / 28; 
      }

      alert("Já se passaram " + numGeracoes(anoDeHoje,chegada));