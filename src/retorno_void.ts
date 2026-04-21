//retorno void é quando a função não retorna nada, ou seja, ela executa um código mas não tem um valor de retorno.
//abaixo está um exemplo de função com retorno void, que remove um elemento HTML da página:
function removerElemento(el: HTMLElement): void {
    el.remove();
}

removerElemento(document.getElementById('meuElemento')!); // A função removerElemento é chamada com um elemento HTML, e ela remove esse elemento da página. O tipo de retorno void indica que a função não retorna nenhum valor, apenas executa a ação de remover o elemento.



type QualquerFuncao = () => void;
//a função QualquerFuncao é um tipo de função que não recebe nenhum parâmetro e não retorna nenhum valor, ou seja, ela tem um retorno void. Esse tipo de função pode ser usado para representar funções que executam uma ação, mas não precisam retornar um resultado específico. Por exemplo, uma função que exibe uma mensagem no console ou que altera o estado de um componente em uma aplicação React pode ser do tipo QualquerFuncao. 

const algo: QualquerFuncao = () => {
    console.log('Executando algo...');
    // Essa função executa uma ação (exibir uma mensagem no console), mas não retorna nenhum valor, por isso seu tipo de retorno é void.
}