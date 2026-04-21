type MathFuncion = (a: number, b: number) => number;

const add: MathFuncion = (a, b) => a + b;
const subtract: MathFuncion = (a, b) => a - b;
const multiply: MathFuncion = (a, b) => a * b;
const divide: MathFuncion = (a, b) => a / b;
//os parametros não precisam ser tipados, pois o TypeScript infere o tipo dos parametros a partir do tipo da função MathFuncion, que já foi definida como uma função que recebe dois números e retorna um número.

//exemplo de constante do tipo MathFuncion sem arrow function:
const power: MathFuncion = function(a, b) {
    return Math.pow(a, b);
}
