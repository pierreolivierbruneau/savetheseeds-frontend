import styles from '../styles/Home.module.css';
import Header from './Header';

function Home() {
  return (
    <div>
      <Header/>
      <main className={styles.main}>
        <h1 className={styles.title}>
        </h1>
      </main>
    </div>
  );
}

export default Home;
