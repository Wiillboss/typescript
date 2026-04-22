"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Função que recebe uma string e retorna a mesma string com a primeira letra em maiúscula
function primeira_letra_maiuscula(nomee) {
    let primeira_letra = nomee.charAt(0).toUpperCase();
    return primeira_letra + nomee.substring(1);
}
// Exemplo de uso da função
let nomee = primeira_letra_maiuscula("Willian");
// Função que recebe dois números e retorna a soma dos dois números
function somar_numeros(n1, n2) {
    return n1 + n2;
}
let resultado = somar_numeros(5, 10);
console.log(resultado); // Saída: 15    
//# sourceMappingURL=type_retorno_funcao.js.map