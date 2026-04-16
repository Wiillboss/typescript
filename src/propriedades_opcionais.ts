// Propriedades Opcionais. O sinal de interrogação (?) é usado para indicar que uma propriedade é opcional em um tipo de objeto. Isso significa que a propriedade pode ou não estar presente no objeto, e o TypeScript não gerará um erro se ela estiver ausente.
function resumee(usuaaario: { nomeee: string, idadeee?: number, profissaooo?: string }) {
    if (usuaaario.idadeee !== undefined) {
        return `Ola, ${usuaaario.nomeee}! Você tem ${usuaaario.idadeee} anos.   `;
    } else {
        return `Ola, ${usuaaario.nomeee}! Idade não informada.   `;
    }
}

let usu = {
    nomeee: 'Willian'
};
resumee(usu);