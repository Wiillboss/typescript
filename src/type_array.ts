//formas de declarar um array em TypeScript (forma basica)
let nomes: string[] = ['Willian', 'Maria', 'João'];

let idades: number[] = [30, 25, 40];

let idades2: Array<number> = [30, 25, 40]; //outra forma de declarar um array com números

/*Atenção, caso tente dar um push em um array de um tipo diferente do declarado, o TypeScript irá dar um erro, pois o tipo do array é definido no momento da declaração. Por exemplo, se tentar dar um push em um array de strings com um número, o TypeScript irá dar um erro, pois o tipo do array é string e não number.
*/

/* TypeScript impõe tipos em arrays: tentar adicionar um valor de tipo incompatível gera erro. Exemplo: push de número em string[] falha.
Isso garante segurança de tipo, evitando erros em tempo de execução. */