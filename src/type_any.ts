let nomes2: string[] = ['Willian', 'Maria', 'João']; // Declaração de um array de strings
nomes2.push('Ana'); // Adiciona um novo nome ao array, caso tenta adicionar um número, dara um erro, pois o tipo do array é string e não number.

let coisas: any = ['Willian', 30, true]; // Declaração de uma variável do tipo any
coisas.push('Maria'); // Adiciona um novo valor ao array, como o tipo é any, pode adicionar qualquer tipo de valor
coisas.push(25);    
coisas.push(true);    