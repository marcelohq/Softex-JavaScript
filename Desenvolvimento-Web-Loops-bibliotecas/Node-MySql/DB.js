const Sequelize = require('sequelize'); // Pegando o módulo do sequelize. 

// Criando objeto "sequelize" passando o nome da tabela/banco de dados, o usuário, a senha, o host e o banco de dados usado.
const sequelize = new Sequelize('bancosoftex', 'root', 'mugiwara123', {
    host: "localhost",
    dialect: "mysql"
});

//Then é acionada quando a função "authenticate" tem sucesso, se não der certo, o catch é acionado.
sequelize.authenticate().then(function(){
    console.log("A conexão com o Banco de dados foi bem sucedida!"); // Informando que foi conectado com sucesso.
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro); //Informando que deu erro, e mostrando a mensagem do erro. 
});