//types literais
function mostrarTexto(
    texto: string,
    alinhamento: 'left' | 'right' | 'center'
) {
    return `<div style="text-align: ${alinhamento}">${texto}</div>`;
}

mostrarTexto('Willian', 'left');
mostrarTexto('Willian', 'right');
mostrarTexto('Willian', 'center');
//mostrarTexto('Willian', 'blablabla'); esse linha daria erro pois não existe blablabla dentro dos alinhamentos determinados.


//outro exemplo
type Verdadeiro_ou_Falso = true | false;

function tem_nome(nomeee: string): Verdadeiro_ou_Falso {
    if (nomeee !== "") {
        return true;
    } else {
        return false;
    }
}

//mais um exemplo

/* a opção a baixo é sem determinar o type

function configurar(props: {width: number, heigth: number} | 'auto') {

}
*/

//abaixo está determiando o type
type Opcoes = {
    width: number,
    heigth: number
}

function configurar(props: Opcoes | 'auto') {

}


//chamando a função
configurar({width:100, heigth:200});
configurar('auto');
// configurar('automatico'); essa linha daria um erro pois a função só está esperando alturo, largura ou AUTO, não AUTOMATICO