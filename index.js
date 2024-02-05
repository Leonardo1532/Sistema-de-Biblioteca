// 1 - Crie uma classe Livro com as seguintes propriedades:
// Titulo - qual o nome do livro;
// Autor- quem escreveu o livro;
// Editora - qual empresa que publicou o livro;
// Ano de publicação - o ano em que o livro foi publicado;
// Disponibilidade - se o livro está disponível ou não (verdadeiro ou falso);


// 2 - Crie um método construtor para a classe Livro que recebe como parâmetro as informações que serão atribuídas as propriedades, com exceção de “Disponibilidade” que deve ter por padrão o valor “true” quando o objeto for criado


// 3 - Crie alguns objetos da classe Livro e adicione-os em um array;

// 4 - Crie uma classe Biblioteca com as seguintes propriedades:
//    - Nome - nome da biblioteca;

//    - Endereco - onde a biblioteca fica localizada;

//    - Telefone - telefone de contato da biblioteca;

//    - Acervo de livros - todos os livros que existem na biblioteca



// 5 - Crie um método construtor para a classe Biblioteca que deve receber como parâmetro as informações que serão atribuídas as propriedades, a propriedade Acervo de Livros deve receber um array;


// 6 - Adicione na classe Biblioteca um método para buscar um livro específico, deve passar como parâmetro o nome do livro e exibir no console todas as informações de um livro;

// 7 - Adicione na classe Biblioteca um método de empréstimo de um livro, deve ser passado como parâmetro o nome do livro, então verificar a disponibilidade e se estiver disponível retornar true e trocar o valor da propriedade do livro para false, se não estiver disponível retornar false.


// 8 - Adicione na classe Biblioteca um método de devolução de um livro, deve ser passado como parâmetro o nome do livro, então trocar o valor da propriedade de disponibilidade desse livro para true;


// 9 - Crie um objeto da classe Biblioteca e chame seus métodos.



let Livros = []


class Livro {
    Titulo
    Autor
    Editora
    AnoDePublicacao
    Disponibilidade
    constructor(titulo, autor, editora, anoDePublicacao) {
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.AnoDePublicacao = anoDePublicacao
        this.Disponibilidade = true
    }
}

function CriarLivros() {
    let tituloLivro = prompt("Insira o titulo do livro")
    let autorLivro = prompt("Insira o autor do livro")
    let editoraLivro = prompt("Insira a editora do livro")
    let anoPublicacao = prompt("Insira o ano de publicação do livro")

    let novoLivro = new Livro(tituloLivro, autorLivro, editoraLivro, anoPublicacao)
    Livros.push(novoLivro)
}


class Biblioteca {
    Nome
    Endereco
    Telefone
    AcervoDeLivros

    constructor(nome, endereco, telefone) {
        this.Nome = nome
        this.Endereco = endereco
        this.Telefone = telefone
        this.AcervoDeLivros = Livros
    }

    BuscarLivro(tituloLivro) {
        Livros.forEach(x => {
            if (x.Titulo === tituloLivro) {
                console.log("Título: " + x.Titulo)
                console.log("Autor: " + x.Autor)
                console.log("Editora: " + x.Editora)
                console.log("Ano de Publicacao: " + x.AnoDePublicacao)
                console.log("Disponibilidade: " + x.Disponibilidade)
            }
        })
    }

    Emprestimo(tituloLivro) {
        Livros.forEach(x => {
            if (x.Titulo === tituloLivro) {
                if (x.Disponibilidade === true) {
                    x.Disponibilidade = false
                    return true
                } else {
                    return false
                }
            }
        })
    }

    Devolucao(tituloLivro) {
        Livros.forEach(x => {
            if (x.Titulo === tituloLivro) {
                x.Disponibilidade = true
            }
        })
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

let nomeBiblioteca = prompt("Insira o nome da biblioteca")
let enderecoBiblioteca = prompt("Insira o endereço da biblioteca")
let telefoneBiblioteca = prompt("Insira o telefone da biblioteca")
let novaBiblioteca = new Biblioteca(nomeBiblioteca, enderecoBiblioteca, telefoneBiblioteca)

let nomeLivro

let condition = true
while (condition) {

    let opcao = prompt("Insira a opção desejada:  1: Criar um livro / 2:Buscar um livro pelo nome / 3: Empréstimo de um livro / 4: Devolução de um livro / 5: Encerrar o programa")
    switch (opcao) {
        case "1":
            CriarLivros()
            break;

        case "2":
            nomeLivro = prompt("Insira o titulo do livro que deseja encontrar")
            novaBiblioteca.BuscarLivro(nomeLivro)
            break;

        case "3":
            nomeLivro = prompt("Insira o titulo do livro que deseja emprestado")
            Emprestimo(nomeLivro)
            break;

        case "4":
            nomeLivro = prompt("Insira o titulo do livro que deseja devolver")
            Devolucao(nomeLivro)
            break;

        case "5":
            condition = false
            break;
        default:
            console.log("Default")
            condition = false
            break;
    }


}