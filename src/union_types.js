"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Union Types. Os tipos de união permitem que uma variável possa ser de mais de um tipo. Isso é útil quando você deseja que uma variável possa aceitar diferentes tipos de valores.
let idaadee = 90;
idaadee = document.getElementById('idade')?.textContent || 'Idade não encontrada';
// Exemplo de função que aceita um tipo de união
function imprimirIdade(idade) {
    // Daria um Erro: A propriedade 'toUpperCase' não existe no tipo 'string | number'. O TypeScript não sabe se 'idaadee' é uma string ou um número, então ele não permite acessar métodos específicos de um tipo sem uma verificação de tipo.  
    if (typeof idaadee === 'string') {
        console.log(idaadee.toUpperCase());
    }
    else {
        console.log(`Idade: ${idade}`);
    }
}
imprimirIdade(idaadee);
imprimirIdade(25);
imprimirIdade('Trinta');
imprimirIdade('30');
//# sourceMappingURL=union_types.js.map