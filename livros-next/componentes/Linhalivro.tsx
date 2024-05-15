import React from 'react';

import  ControleEditora from '../classes/controle/ControleEditora';
import  Livro  from '../classes/modelo/Livros';

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
    livro: Livro;
    excluir: () => void;
}


export const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluir }) => {
    const editora = controleEditora.getNomeEditora(livro.codEditora);

    return (
        <tr>
            <td>{livro.codigo}</td>
            <td>{livro.titulo}</td>
            <td>{editora}</td>
            
            <td>
                <button onClick={excluir}>Excluir</button>
            </td>
        </tr>
    );
};
