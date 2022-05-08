var decisao = confirm ("Vamos começar inserindo os dados!: ");
var contIdade = 0;
var IdadeVelha = 0;
var IdadeNova = 1000;
var QtdePessimo = 0;
var QtdeOB = 0;
var QtdeMen = 0;
var QtdeWoman = 0;

if(decisao){
    var idade;
    var sexo;
    var opiniao;

    for(var i = 0; i < 45; i = i + 1){
        console.log(i);

        idade = parseInt (prompt ("Insira a idade: ")); 
        sexo = parseInt (prompt ("Insira o sexo \n1-Masculino, \n2-Femino: "));
        opiniao = parseInt (prompt("Insira opinião: \nÓtimo = 4, \nBom = 3, \nRegular = 2, \nPéssimo = 1"));

        contIdade = contIdade + idade;

        if(idade > IdadeVelha){
            IdadeVelha = idade;
        }

        if(idade < IdadeNova){
            IdadeNova = idade;
        }

        if(opiniao == 1){
            QtdePessimo = QtdePessimo + 1;
        }

        if(opiniao == 4 || opiniao == 3){
            QtdeOB = QtdeOB + 1;
        }
        if (sexo == 1){
            QtdeMen = QtdeMen + 1;
        }else if(sexo == 2){
            QtdeWoman = QtdeWoman + 1;
        }
    }
    alert ("A média de idade dos participantes da pesquisa: " + Math.round(contIdade / 45));
    alert ("Participante mais velho da pesquisa: " + IdadeVelha);
    alert ("Participante mais novo da pesquisa: " + IdadeNova);
    alert ("Quantidade de participantes que responderam péssimo: " + QtdePessimo);
    alert ("Porcentagem de participantes que responderam ótimo e bom: " + Math.round((QtdeOB / 45) * 100) + "%");
    alert ("Quantidade de homens que responderam o formulário: " + QtdeMen);
    alert ("Quantidade de mulheres que responderam o formulário: " + QtdeWoman);
}