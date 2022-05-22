//Questão 1 

function Retangulo(x, y){
    this.x = x;
    this.y = y;

    this.calcArea = function() {
        return this.x * this.y;
    };
}

var xx = prompt("Insira o valor do x: ");
var yy = prompt("Insira o valor do y: ");

var retangulo = new Retangulo(xx, yy);

alert("O valor da área é: " + retangulo.calcArea());

//Questão 2


function Conta(){
    var nomeC, banco, numConta, saldo;

    this.setnomeC = function(nomeC){
        this.nomeC = nomeC;
    }

    this.setBanco = function(banco){
        this.banco = banco;
    }

    this.setnumConta = function(numConta){
        this.numConta = numConta;
    }

    this.getnomeC = function(){
        return this.nomeC;
    }

    this.getBanco = function(){
        return this.banco;
    }

    this.getnumConta = function(){
        return this.numConta;
    }

    this.getSaldo = function(){
        return this.saldo;
    }

    this.setSaldo = function(saldo){
        this.saldo = saldo;
    }
}

function ContaCorrente() {
    var saldoEspecial;

    this.getsaldoEspecial = function(){
        return this.saldoEspecial;
    }

    this.setsaldoEspecial = function(saldoEspecial){
        this.saldoEspecial = saldoEspecial;
    }
}

function Poupanca() {
    var juros, dataVencc ;

    this.getjuros = function(){
        return this.juros;
    }

    this.setjuros = function(juros){
        this.juros = juros;
    }

    this.getdataVenc = function(){
        return this.dataVenc;
    }

    this.setdataVenc = function(dataVenc){
        this.dataVenc = dataVenc;
    }
}

ContaCorrente.prototype = new Conta();
Poupanca.prototype = new Conta();

objContaCorrente = new ContaCorrente();
objPoupanca = new Poupanca();

objContaCorrente.setnomeC("Nicole Baraldi");
objContaCorrente.setBanco('Bradesco');
objContaCorrente.setnumConta(30245896-0);
objContaCorrente.setSaldo(1500.00);
objContaCorrente.setsaldoEspecial(1000.00);

objPoupanca.setnomeC('Marcos Santos');
objPoupanca.setBanco('Safari');
objPoupanca.setnumConta(14567891-7);
objPoupanca.setSaldo(5320.00);
objPoupanca.setjuros(1000.00);
objPoupanca.setdataVenc("09/12/2022");

alert("Nome: " + objContaCorrente.getnomeC() + "\n" + 
        "Banco: " + objContaCorrente.getBanco() + "\n" +
         "Numero da conta: " + objContaCorrente.getnumConta() + "\n" +
         "Saldo: " + objContaCorrente.getSaldo() + "\n" +
         "Saldo Especial: " + objContaCorrente.getsaldoEspecial() + "\n");

alert("Nome: " + objPoupanca.getnomeC() + "\n" + 
         "Banco: " + objPoupanca.getBanco() + "\n" +
          "Numero da conta: " + objPoupanca.getnumConta() + "\n" +
          "Saldo: " + objPoupanca.getSaldo() + "\n" +
          "Juros: " + objPoupanca.getjuros() + "\n" +
          "Data de vencimento: " + objPoupanca.getdataVenc());
