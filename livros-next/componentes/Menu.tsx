import React from 'react';
import Link from 'next/link';

export const Menu: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link href="/">
                   
                </Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link href="/">
                              
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/LivroLista">
                              
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/LivroDados">
                                
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
