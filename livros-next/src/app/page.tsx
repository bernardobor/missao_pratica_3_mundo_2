
import { Menu } from '../../componentes/Menu';
import styles from '../styles/home.module.css';
import Head from 'next/head';


export default function Home() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Loja Next</title>
        </Head>
        <Menu />
        <main className={styles.main}>
            <h1 className={styles.title}>Página Inicial</h1>
        </main>
    </div>
);
};
