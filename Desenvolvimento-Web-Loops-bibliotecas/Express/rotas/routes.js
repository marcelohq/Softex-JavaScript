//Arquivo para o grupo de rotas
const express = require('express'); // Adicionando o módulo do express na constante "express"
const rota = express.Router(); // Componente necessário para criar rotas em arquivos diferente do arquivo principal

//Rotas - São os caminhos para a aplicação.
rota.get("/", function(req, res){
    res.send("Testando o parametro res e puxando a função 'send'")
});

//Get passando parametros pela URL
rota.get("/sobre/:autor/:intencao", function(req, res){
    res.send("<h1>Autor: "+req.params.autor+"</h1>"+"<h2> Profissão:"+req.params.intencao+"</h2>"); //Só pode haver um send por rota.
    // res.send("Fazendo mais testes. Você está acessando a rota 'sobre'");
});

rota.get("/teste", function(req, res){
    res.send("Fazendo mais uma vez para fixar!");
})

module.exports = rota; // Módulo para exportar as rotas deste arquivo para o arquivo principal. 
