"use strict";
let numero1 = document.getElementById('numero1');
let numero2 = document.getElementById('numero2');
let botao = document.getElementById('calcular');
let res = document.getElementById('resultado');
// Tipando corretamente os parâmetros e retorno
function calcular(n1, n2) {
    return n1 + n2;
}
botao.addEventListener('click', function () {
    // Convertendo string para número
    let n1 = Number(numero1.value);
    let n2 = Number(numero2.value);
    res.innerHTML = calcular(n1, n2).toString();
});
