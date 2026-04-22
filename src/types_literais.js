"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//types literais
function mostrarTexto(texto, alinhamento) {
    return `<div style="text-align: ${alinhamento}">${texto}</div>`;
}
mostrarTexto('Willian', 'left');
mostrarTexto('Willian', 'right');
mostrarTexto('Willian', 'center');
function tem_nome(nomeee) {
    if (nomeee !== "") {
        return true;
    }
    else {
        return false;
    }
}
function configurar(props) {
}
//chamando a função
configurar({ width: 100, heigth: 200 });
configurar('auto');
// configurar('automatico'); essa linha daria um erro pois a função só está esperando alturo, largura ou AUTO, não AUTOMATICO
//# sourceMappingURL=types_literais.js.map