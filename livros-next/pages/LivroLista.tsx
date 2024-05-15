import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import  Menu  from '../componentes/Menu';
import styles from '../styles/Home.module.css';
import { Livro } from '../classes/modelo/Livros';
import { LinhaLivro } from '../componentes/Linhalivro';

const LivroLista: React.FC = () => {
    const baseURL = 'http://localhost:3000/api/livros';

    const [livros, setLivros] = useState<Array<Livro>>([]);
    const [carregado, setCarregado] = useState<boolean>(false);

    const obter = async () => {
        const resposta = await fetch(baseURL);
        return resposta.json();
    };

    const excluirLivro = async (codigo: number) => {
        const resposta = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
        return resposta.ok;
    };

    const excluir = async (codigo: number) => {
        await excluirLivro(codigo);
        setCarregado(false);
    };

    useEffect(() => {
        if (!carregado) {
            obter().then((data: Array<Livro>) => {
                setLivros(data);
                setCarregado(true);
            });
        }
    }, [carregado]);

    return (
        <div className={styles.container}>
            <Head>
                <title>Lista de Livros</title>
            </Head>
            <Menu />
            <main className={styles.main}>
                <h1 className={styles.title}>Lista de Livros</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Título</th>
                            <th>Editora</th>
                            <th>Ano</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro) => (
                            <LinhaLivro key={livro.codigo} livro={livro} excluir={() => excluir(livro.codigo)} />
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default LivroLista;
