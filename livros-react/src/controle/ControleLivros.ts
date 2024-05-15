import Livro from "../modelo/Livros";

class ControleLivros {
    private livros: Livro[];

    constructor() {
        // Inicializando a variável livros com pelo menos três elementos no formato JSON
        this.livros = [
            new Livro(1, 1, "Livro 1", "Resumo do Livro 1", ["Autor 1"]),
            new Livro(2, 2, "Livro 2", "Resumo do Livro 2", ["Autor 2"]),
            new Livro(3, 3, "Livro 3", "Resumo do Livro 3", ["Autor 3"])
        ];
    }

    obterLivros(): Livro[] {
        return this.livros;
    }

    incluir(livro: Livro): void {
        // Encontrando o maior código de livro
        let maiorCodigo = 0;
        this.livros.forEach(l => {
            if (l.codigo > maiorCodigo) {
                maiorCodigo = l.codigo;
            }
        });
        // Incrementando o código
        livro.codigo = maiorCodigo + 1;
        // Adicionando o livro ao vetor
        this.livros.push(livro);
    }

    excluir(codigo: number): void {
        // Encontrando o índice do livro com o código fornecido
        const index = this.livros.findIndex(l => l.codigo === codigo);
        // Removendo o livro se encontrado
        if (index !== -1) {
            this.livros.splice(index, 1);
        }
    }
}

export default ControleLivros;
