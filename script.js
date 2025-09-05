function insert(num){
   var numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + num
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        try {
            var calc = eval(resultado);
            if (calc === Infinity || calc === -Infinity) {
                alert("Não é possível dividir por 0");
                document.getElementById('resultado').innerHTML = "";
            } else {
                document.getElementById('resultado').innerHTML = calc;
            }
        } catch (e) {
            alert("Expressão inválida!");
            document.getElementById('resultado').innerHTML = "";
        }
    }
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);

}
