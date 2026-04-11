let numero1 = document.getElementById('numero1') as HTMLInputElement;
let numero2 = document.getElementById('numero2') as HTMLInputElement;
let botao = document.getElementById('calcular') as HTMLButtonElement;
let res = document.getElementById('resultado') as HTMLElement;

// Tipando corretamente os parâmetros e retorno
function calcular(n1: number, n2: number): number {
    return n1 + n2;
}

botao.addEventListener('click', function () {
    // Convertendo string para número
    let n1 = Number(numero1.value);
    let n2 = Number(numero2.value);

    res.innerHTML = calcular(n1, n2).toString();
});