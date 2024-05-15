import React, { useState } from 'react';
import Head from 'next/head';
import { Menu } from '../components/Menu';
import styles from '../styles/Home.module.css';
import { ControleEditora } from '../classes/ControleEditora';
import { useNavigate } from 'react-router-dom';

const controleEditora = new ControleEditora();
const baseURL = 'http://localhost:3000/api/livros';

const LivroDados: React.FC = () => {
    const navigate = useNavigate();

    const [titulo, setTitulo] = useState<string>('');
    const [resumo, setResumo] = useState<string>('');
    const [autores, setAutores] = useState<string>('');
    const [codEditora, setCodEditora] = useState<number>(0);

    const opcoes = controleEditora.getEditoras().map(editora => ({
        value: editora.codEditora,
        text: editora.nome
    }));

    const incluirLivro = async (livro: Livro) => {
        const resposta = await fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(livro)
        });
        return resposta.ok;
    };

    const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = parseInt(event.target.value);
        setCodEditora(value);
    };

    const incluir = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const livro: Livro = {
            codigo: 0,
            titulo,
            resumo,
            autores: autores.split('\n'),
            codEditora
        };
        const sucesso = await incluirLivro(livro);
        if (sucesso) {
            navigate('/LivroLista');
        } else {
            alert('Falha ao incluir o livro.');
        }
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Cadastrar Livro</title>
            </Head>
            <Menu />
            <main className={styles.main}>
                <h1 className={styles.title}>Cadastrar Livro</h1>
                <form onSubmit={incluir}>
                    <div className="form-group">
                        <label>Título:</label>
                        <input type="text" className="form-control" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Resumo:</label>
                        <textarea className="form-control" value={resumo} onChange={(e) => setResumo(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Autores:</label>
                        <textarea className="form-control" value={autores} onChange={(e) => setAutores(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Editora:</label>
                        <select className="form-control" value={codEditora} onChange={tratarCombo}>
                            {opcoes.map(opcao => (
                                <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </main>
        </div>
    );
};

export default LivroDados;
