// Função sem receber parametros e sem retorno.
function falarNome(){
    console.log("Eu sou uma apresentação genérica");
}

//Função com parametros e com retorno. Receberá dois números e retornará o total.
function soma(a, b){
    return a + b;
}

// Arrow function que recebe dois parametros e retorna a diferença dos dois números.
const subtração = (a , b) => a - b;

//Atribuindo às variaveis, o retorno das respectivas funções.
let diferenca = subtração(30, 25);
let total = soma(7, 7);

//Mostrando no console o resultado. 
falarNome();
console.log("Total da soma: "+total);
console.log("Total da subtração: "+diferenca);

