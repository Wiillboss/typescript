"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
//os parametros não precisam ser tipados, pois o TypeScript infere o tipo dos parametros a partir do tipo da função MathFuncion, que já foi definida como uma função que recebe dois números e retorna um número.
//exemplo de constante do tipo MathFuncion sem arrow function:
const power = function (a, b) {
    return Math.pow(a, b);
};
//# sourceMappingURL=type_funcoes.js.map