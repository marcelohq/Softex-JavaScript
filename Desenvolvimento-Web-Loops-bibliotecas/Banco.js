// Crie um código com um objeto chamado “Banco”. Ele deverá ter propriedades que incluem conta, saldo, tipo de conta e agência e os seus métodos devem ser: buscar saldo, depósito, saque e número da conta.

// Observações:
// - buscar saldo deve retornar o valor atual do saldo;
// - para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto;
// - para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
// - o número da conta deve retornar o número da conta.

//Criando objeto com método construtor.
    function Banco(conta, saldo, tipoConta, agencia){
//Declarando atributos
        this.conta = conta;
        this.saldo = saldo;
        this.tipoConta = tipoConta;
        this.agencia = agencia;
//Funções que serão uitlizadas pelo objeto 

        //Método que mostra o saldo
        this.buscarSaldo = function (){
            return this.saldo;
        }
        //Método que modifica recebe deposito
        this.deposito = function (deposito){
            this.saldo += deposito;
        }
        //Método que retira determinado valor do saldo
        this.saque = function (saque){
            this.saldo -= saque;
        }
        //Métedo que retorna o número da conta;
        this.numeroConta = function ContaNumero(){
            console.log("Número da conta: "+this.conta);
        }
    }
let minhaConta = new Banco("011250419", 2400, "Corrente", "3234");

minhaConta.numeroConta(); // Mostrando o número da conta
console.log("Saldo antes da modificação: "+minhaConta.buscarSaldo());
minhaConta.saque(1000); // Retirando 1000 do saldo
minhaConta.deposito(2000); // Adicionando 2000 ao saldo
console.log("Saldo depois da modificação: "+minhaConta.buscarSaldo()); // Mostrando o novo saldo


