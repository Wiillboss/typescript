"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Definição do tipo para o objeto usuário
function resumo(usuario) {
    return `Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}`;
}
//implementação da função resumo para o objeto u
let u = {
    nome: "Willian",
    idade: 30,
    email: "willian@example.com"
};
console.log(resumo(u));
//# sourceMappingURL=types_objetos.js.map