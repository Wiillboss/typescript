let willian: 'Willian' = 'Willian'; // A variável willian é do tipo literal 'Willian', ou seja, ela só pode receber o valor 'Willian'. Se tentarmos atribuir outro valor, como 'Maria', o TypeScript irá gerar um erro, pois não é permitido atribuir um valor diferente do tipo literal definido.

let maria: 'Maria' = 'Maria'; // A variável maria é do tipo literal 'Maria', ou seja, ela só pode receber o valor 'Maria'. Se tentarmos atribuir outro valor, como 'Willian', o TypeScript irá gerar um erro, pois não é permitido atribuir um valor diferente do tipo literal definido.

function fazerRequisicao(url: string, method: 'GET' | 'POST') { 
    // Lógica para fazer a requisição
    console.log(`Fazendo requisição para ${url} com método ${method}`);
}

type Methods = 'GET' | 'POST';

let url = 'https://google.com.br';
/* Da forma que está abaixo iria dar erro, pois o TypeScript não tem como garantir que a variável method só vai receber os valores 'GET' ou 'POST'. Para resolver isso, podemos usar um tipo literal para a variável method, garantindo que ela só possa receber os valores permitidos.
let method: 'GET';
fazerRequisicao(url, method); // Erro: O tipo 'string' não pode ser atribuído ao tipo '"GET" | "POST"'.'
*/

let method: Methods = 'GET';
fazerRequisicao(url, method); // Funciona corretamente, pois a variável method é do tipo Methods, que é um tipo literal que só permite os valores 'GET' ou 'POST'.


//outro exemplo de inferência literal usando um objeto literal:
type RequestDetails = {
    url: string;
    method: 'GET' | 'POST';
};

let req: RequestDetails = {
    url: 'https://google.com.br',
    method: 'GET'
};

fazerRequisicao(req.url, req.method);// Funciona corretamente, pois a variável req é do tipo RequestDetails, que tem as propriedades url e method com os tipos corretos. O TypeScript garante que as propriedades tenham os tipos esperados, proporcionando segurança de tipo em tempo de compilação.