// Funções Anônimas
// Função anônima é uma função que não possui um nome definido. Elas são frequentemente usadas como argumentos para outras funções, como callbacks, ou para criar funções de forma rápida e concisa. Em TypeScript, as funções anônimas podem ser definidas usando a sintaxe de função tradicional ou a sintaxe de arrow function.
//No exemplo abaixo, temos um array de nomes e uma função anônima que é passada como argumento para o método forEach para imprimir cada nome em maiúscula. A função anônima verifica se o valor é uma string antes de tentar convertê-lo para maiúscula, caso contrário, ela imprime uma mensagem indicando que o valor não é uma string.
let nones23 = ['Zidade', 'Pavel', 'Batistuta', 'Ronaldo', 'Romário', 90];

//função anônima tradicional
nones23.forEach(function (nome) {
    if (typeof nome === 'string') {
        console.log(nome.toUpperCase());
    }else {
        console.log(`O valor ${nome} não é uma string.`);
    }
});

// Função Anônima com Arrow Function
nones23.forEach((nome) => {
    if (typeof nome === 'string') {
        console.log(nome.toUpperCase());
    } else {
        console.log(`O valor ${nome} não é uma string.`);
    }
});
