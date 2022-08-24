// Desenvolva um código e crie nele:

// - um objeto com, no mínimo, três propriedades;
// - um array de tamanho três no mínimo;
// - duas funções, a primeira lista as propriedades do objeto e a segunda, os elementos do array.

//Criando objeto pessoa.
let pessoa = {
    nome : "Marcelo",
    idade : 30,
    sexo : "Masculino",
    altura: 1.77,
    peso: 79
};

//Criando array com 7 posições
let vetor =  [42, 7, 30, 23, 25, 16, 20];

//Função que mostrará as propriedades e os elementos do objeto
function lerObjeto(objeto){

    for(const propriedade in objeto){

        console.log("Propriedade: "+propriedade+" valor: "+objeto[propriedade]);
        
    }
}

//Função que monstrará os elementos do vetor.
function lerVetor(vetor){

    for(const i of vetor){

        console.log(i);

    }

}
//Chamando as functions
lerObjeto(pessoa);
lerVetor(vetor);


