import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LivroLista from './LivrosLista';
import LivroDados from './LivrosDados';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Livros</Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Lista</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dados">Dados</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<LivroLista />} />
          <Route path="/dados" element={<LivroDados />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
