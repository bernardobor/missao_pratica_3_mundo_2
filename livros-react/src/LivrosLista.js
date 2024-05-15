import React, { useState, useEffect } from 'react';
import ControleLivros from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';


const LinhaLivro = ({ livro, excluir }) => {
    const controleEditora = new ControleEditora();
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    return (
        <tr>
            <td>{livro.codigo}</td>
            <td>{livro.titulo}</td>
            <td>{livro.resumo}</td>
            <td>{nomeEditora}</td>
            <td>
                <ul className="list-unstyled">
                    {livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
            <td>
                         <button type="button" className="btn btn-danger" onClick={() => excluir(livro.codigo)}>Excluir</button>
            </td>
        </tr>
    );
};

const LivroLista = () => {
    const [livros, setLivros] = useState([]);
    const [atualizarLista, setAtualizarLista] = useState(false);
    const controleLivros = new ControleLivros();
 

    useEffect(() => {
        const obterLivros = async () => {
            const livros = controleLivros.obterLivros();
            setLivros(livros);
        };

        obterLivros();
    }, [atualizarLista]);

    const excluirLivro = (codigoLivro) => {
        controleLivros.excluir(codigoLivro);
        setAtualizarLista(!atualizarLista);
    };

    return (
        <main className="container">
            <h1 className="my-4">Lista de Livros</h1>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Título</th>
                        <th scope="col">Resumo</th>
                        <th scope="col">Editora</th>
                        <th scope="col">Autores</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro) => (
                        <LinhaLivro key={livro.codigo} livro={livro} excluir={excluirLivro} />
                    ))}
                </tbody>
            </table>
        </main>
    );
};

export default LivroLista;
