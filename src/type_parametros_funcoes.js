"use strict";
// A função firstLetterUpperCase recebe uma string como parâmetro e retorna a mesma string com a primeira letra em maiúscula. O TypeScript garante que o parâmetro nome4 seja do tipo string, evitando erros em tempo de execução caso seja passado um valor de outro tipo.
Object.defineProperty(exports, "__esModule", { value: true });
function firstLetterUpperCase(nome4) {
    let firstLetter = nome4[0].toUpperCase(); // Obtém a primeira letra do nome e converte para maiúscula
    let restOfName = nome4.slice(1);
    return firstLetter + restOfName;
}
firstLetterUpperCase('willian'); // Retorna 'Willian', caso tente passar um número ou outro tipo de valor, o TypeScript irá dar um erro, pois o tipo do parâmetro é string e não number ou outro tipo. 
//a função primeiraLetraMaiuscula é semelhante à função firstLetterUpperCase, mas utiliza métodos diferentes para obter a primeira letra e o restante do nome. O resultado final é o mesmo, ou seja, a string com a primeira letra em maiúscula. O TypeScript também garante que o parâmetro nome5 seja do tipo string, evitando erros em tempo de execução caso seja passado um valor de outro tipo.
function primeiraLetraMaiuscula(nome5) {
    let primeiraLetra = nome5.charAt(0).toUpperCase(); // Obtém a primeira letra do nome e converte para maiúscula
    return primeiraLetra + nome5.substring(1); //essa linha faz a concatenação da primeira letra maiúscula com o restante do nome, utilizando o método substring para obter o restante do nome a partir do índice 1. O resultado final é a string com a primeira letra em maiúscula.
    //Foi usando o type any no paremetro da variável para sumir o erro, entretanto se deixar sem type ele será considerado do tipo any, e o resultado final será o mesmo, ou seja, a string com a primeira letra em maiúscula. O TypeScript não irá dar um erro, mas o resultado final pode ser inesperado caso seja passado um valor de outro tipo, como um número ou um objeto, pois o método charAt e substring são aplicados a uma string, e outros tipos de valores podem ser convertidos para string antes de serem processados.
}
primeiraLetraMaiuscula('willian'); // Retorna 'Willian'
primeiraLetraMaiuscula(90); // Retorna '90', como o parâmetro nome5 é do tipo any, o TypeScript não irá dar um erro, mas o resultado final será '90', pois o método charAt e substring são aplicados a uma string, e o número 90 é convertido para string antes de ser processado.
//# sourceMappingURL=type_parametros_funcoes.js.map