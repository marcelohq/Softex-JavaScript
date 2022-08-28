// Crie um código JavaScript no back-end utilizando o Node.JS. 
// No código, você deverá elaborar uma ou mais rotas, que podem ser de qualquer tipo (get, put etc). 
// Depois, faça um teste em aplicações de rota, como o Postman ou o Insomnia, para confirmar se o retorno está 
// coerente com o que você programou.

// Observação: os prints, ou o próprio código, devem ser divididos por arquivos. Por exemplo, o código de rotas está em um arquivo diferente do código de conexão.


const Express = require('express'); // Adicionando o módulo do express na constante "express"
const app = Express(); // Função que retorna a criação do express para a constante "APP". 

const routes = require('./rotas/routes') // "Importando" o arquivo routes que está dentro da página "rotas" - Chamando o grupo de rotas que está no arquivo "routes"

// Rotas 
app.use("/rota", routes) // "/rota" é o prefixo para o grupo de rotas que foi importado. E routes arquivo importado e que o app.use vai pegar as rotas.


app.listen(8081, function(){
    console.log("Servidor rodando na url: localhost:8081");
});// Fazendo a conexão com o servidor na porta especificada. Essa função tem que ser a última linha do código. A função listen gera um evento, e a função de callback informa que o servidor está rodando.