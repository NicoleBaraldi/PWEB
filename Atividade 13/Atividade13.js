var texto = document.getElementById("texto")
var opcao = document.getElementsByName("opcao")

function enviar() {

    opcao.forEach((OP) => {
        if (OP.checked) {
            if (OP.value == "maiusculo") {
                alert(texto.value.toUpperCase());;
            } else if (OP.value == "minusculo") {
                alert(texto.value.toLowerCase());
            }
        }
    })

}

