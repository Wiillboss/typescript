// Definição do tipo para o objeto usuário
function resumo(usuario:({ nome: string; idade: number; email: string })) {
    return `Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}`;
}

//implementação da função resumo para o objeto u
let u = {
    nome: "Willian",
    idade: 30,
    email: "willian@example.com"
};
console.log(resumo(u));