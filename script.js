let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let botao = document.getElementById("calcular");
let res = document.getElementById("resultado");

//função criada com JS
function calcular(n1, n2) {
    if (typeof n1 == "number" && typeof n2 == "number") {
        return n1 + n2;
    } else {
        n1 = parseFloat(n1);
        n2 = parseFloat(n2);
        return n1 + n2;
        /*
            a sequencia abaixo substitui a sequencia acima
            return +n1 + +n2;
        */
    }

}

/*função criada com TS

function calcularTS(n1, n2) {
    return n1 + n2;
}*/

botao.addEventListener("click", function () {
    res.innerHTML = calcular(numero1.value, numero2.value);
});

