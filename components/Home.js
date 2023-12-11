import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div>
      <main className={styles.main}>
        {/* <img src="/image.webp" className={styles.image} /> */}
        <h1 className={styles.title}></h1>
        <div className={styles.buttonCountainer1}>
          <div className={styles.button1}>Recherche de Type de Graines</div>
          <div className={styles.button2}>
            Quelles Graines Planter à proximité
          </div>
        </div>
        <div className={styles.compteur}>
          <p>COMPTEUR DE SEMIS</p>
          <div className={styles.nombre}>8525</div>
          <svg
            className={styles.semis}
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            width="30"
            viewBox="0 0 512 512"
          >
            <path d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0h32c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64H64c123.7 0 224 100.3 224 224v32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320C100.3 320 0 219.7 0 96z" />
          </svg>
        </div>
      </main>
    </div>
  );
}

export default Home;
