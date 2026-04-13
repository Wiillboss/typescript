// A função firstLetterUpperCase recebe uma string como parâmetro e retorna a mesma string com a primeira letra em maiúscula. O TypeScript garante que o parâmetro nome4 seja do tipo string, evitando erros em tempo de execução caso seja passado um valor de outro tipo.

function firstLetterUpperCase(nome4 : string) {
    let firstLetter = nome4[0].toUpperCase(); // Obtém a primeira letra do nome e converte para maiúscula
    let restOfName = nome4.slice(1);
    return firstLetter + restOfName;
}
firstLetterUpperCase('willian'); // Retorna 'Willian', caso tente passar um número ou outro tipo de valor, o TypeScript irá dar um erro, pois o tipo do parâmetro é string e não number ou outro tipo. 

//a função primeiraLetraMaiuscula é semelhante à função firstLetterUpperCase, mas utiliza métodos diferentes para obter a primeira letra e o restante do nome. O resultado final é o mesmo, ou seja, a string com a primeira letra em maiúscula. O TypeScript também garante que o parâmetro nome5 seja do tipo string, evitando erros em tempo de execução caso seja passado um valor de outro tipo.
function primeiraLetraMaiuscula(nome5) {
    let primeiraLetra = nome5.charAt(0).toUpperCase(); // Obtém a primeira letra do nome e converte para maiúscula
    return primeiraLetra + nome5.substring(1); //essa linha faz a concatenação da primeira letra maiúscula com o restante do nome, utilizando o método substring para obter o restante do nome a partir do índice 1. O resultado final é a string com a primeira letra em maiúscula.
}

primeiraLetraMaiuscula('willian'); // Retorna 'Willian'
primeiraLetraMaiuscula(90); // Retorna '90', como o parâmetro nome5 é do tipo any, o TypeScript não irá dar um erro, mas o resultado final será '90', pois o método charAt e substring são aplicados a uma string, e o número 90 é convertido para string antes de ser processado.

