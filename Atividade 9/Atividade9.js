


function maior(num1, num2, num3){
    return  Math.max(num1,num2,num3); 
     
}

function crescente(a,b,c){

    
    var ordemCrescente = [Number(a), Number(b), Number(c)];
        return ordemCrescente.sort((a, b) => {
        return a-b;
    });
    
}


var num1,
    num2,
    num3,
    maior;


num1 = prompt("Insira o primeiro número: ");
num2 = prompt("Insira o segundo número: ");
num3 = prompt("Insira o terceiro número: ");

alert("Maior número: " + maior(num1, num2, num3) );
alert("Ordem Crescente: " + crescente(num1, num2, num3));


