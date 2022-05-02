
        var pedra,
            papel,
            tesoura,
            opcaoPc,
            opcaoPessoa;


        opcaoPessoa = prompt("Insira o opção desejada:" +
                        "\n 1- Pedra"+ 
                        "\n 2- Papel"+ 
                        "\n 3- Tesoura");

        opcaoPc = Math.floor(Math.random()*3)+1;


        alert("Opção Pessoa:" + opcaoPessoa);
        alert("Opção Pc:" + opcaoPc);
        

        if(opcaoPessoa == opcaoPc)
        alert("Empate!!");

        else if(opcaoPessoa == 1)
        {
            if(opcaoPc == 2)
            alert("Computador venceu!");
            else
            alert("Você venceu!!");
        }


        else if(opcaoPessoa == 2)
        {
            if(opcaoPc == 1)
            alert("Você venceu!");
            else
            alert("O computador venceu!");
        }

        else{
            if(opcaoPc == 1)
            alert("O computador venceu!");
            else
            alert("Você venceu!");
        }
 
