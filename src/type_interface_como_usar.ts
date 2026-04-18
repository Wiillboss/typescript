//criando type interface
//Só usamos type proprio em duas situações, quando queremos criar um tipo primitivo ou quando queremos criar um tipo de união
//Type pode ser usado tanto para criar variáveis quanto para criar tipos personalizados, enquanto interface é usada apenas para definir a estrutura de objetos.

type NomeCompleto = string;

let nome: NomeCompleto = 'Willian dos Santos';

//criando type interface com propriedades
type Pessoa = {
    nome: string;
    idade: number;
    profissao: string;
}

//abaixo, estamos criando uma função que recebe um objeto do tipo Pessoa como parâmetro. A função retorna uma string formatada com as informações da pessoa. O TypeScript garante que o objeto passado para a função tenha as propriedades corretas e os tipos correspondentes, proporcionando segurança de tipo em tempo de compilação.
function imprimirPessoa(pessoa: Pessoa) {
    return `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Profissão: ${pessoa.profissao}`;
}

//abaixo, estamos passando um objeto literal que corresponde à estrutura definida pela interface Pessoa. O TypeScript verifica se o objeto tem as propriedades corretas e os tipos correspondentes, garantindo que a função imprimirPessoa receba um objeto válido.
imprimirPessoa({
    nome: 'Willian dos Santos',
    idade: 30,
    profissao: 'Desenvolvedor'
});

//criando type interface com propriedades opcionais
interface PessoaOpcional {
    nome: string;
    idade: number;
    profissao?: string; // A propriedade 'profissao' é opcional, ou seja, pode ser omitida ao criar um objeto do tipo PessoaOpcional.
}

interface PessoaOpcional {
    sobrenome?: string; // A propriedade 'sobrenome' é opcional, ou seja, pode ser omitida ao criar um objeto do tipo PessoaOpcional.
}

interface PessoaOpcional {
    sexo: string; // A propriedade 'sexo' é obrigatória, ou seja, deve ser fornecida ao criar um objeto do tipo PessoaOpcional.
}

function imprimirPessoaOpcional(pessoa: PessoaOpcional) {
    if (pessoa.profissao) {
        return `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Profissão: ${pessoa.profissao}`;
    } else {
        return `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Profissão: Não informada`;
    }
}

imprimirPessoaOpcional({
    nome: 'Willian dos Santos',
    idade: 30,
    sexo: 'Masculino'
});

//o type não é alteravel, ou seja, uma vez definido, não pode ser modificado. Já a interface é aberta para extensão, o que significa que você pode adicionar novas propriedades a uma interface existente usando a declaração de mesclagem (declaration merging). Isso torna as interfaces mais flexíveis para casos em que você precisa estender ou modificar a estrutura de um tipo ao longo do tempo.