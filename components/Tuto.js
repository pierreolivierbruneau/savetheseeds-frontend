import styles from "../styles/Tutos.module.css";

function Tuto() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.containerTitle}>
          <h3 className={styles.title}>Créer Vos Semis</h3>
        </div>

        <div className={styles.containerSousTitle}>
          <div className={styles.section}>
            <div className={styles.textSection}>
              <h4 className={styles.sousTitle}>
                Comment récupérer des graines
              </h4>
              <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit,{" "}
              </p>
            </div>
            <img src="recuper.jpg" className={styles.imageStyle} />
          </div>

          <div className={styles.section}>
            <div className={styles.textSection}>
              <h4 className={styles.sousTitle}>Préparer les graines</h4>
              <p className={styles.paragraph}>
                tenetur error, harum nesciunt ipsum debitis quas aliquid.
                Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
                laudantium molestias eos sapiente officiis modi at sunt
                excepturi expedita sint? Sed quibusdam recusandae alias error
                harum maxime adipisci amet laborum. Perspiciatis minima nesciunt
                dolorem! Officiis iure rerum voluptates a cumque velit
              </p>
            </div>
            <img src="preparer.jpg" className={styles.imageStyle} />
          </div>

          <div className={styles.section}>
            <div className={styles.textSection}>
              <h4 className={styles.sousTitle}>Faire germer les graines</h4>
              <p className={styles.paragraph}>
                tenetur error, harum nesciunt ipsum debitis quas aliquid.
                Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
                laudantium molestias eos sapiente officiis modi at sunt
                excepturi expedita sint? Sed quibusdam recusandae alias error
                harum maxime adipisci amet laborum. Perspiciatis minima nesciunt
                dolorem! Officiis iure rerum voluptates a cumque velit
              </p>
            </div>
            <img src="germer.jpg" className={styles.imageStyle} />
          </div>

          <div className={styles.section}>
            <div className={styles.textSection}>
              <h4 className={styles.sousTitle}>Planter dans la nature</h4>
              <p className={styles.paragraph}>
                tenetur error, harum nesciunt ipsum debitis quas aliquid.
                Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
                laudantium molestias eos sapiente officiis modi at sunt
                excepturi expedita sint? Sed quibusdam recusandae alias error
                harum maxime adipisci amet laborum. Perspiciatis minima nesciunt
                dolorem! Officiis iure rerum voluptates a cumque velit
              </p>
            </div>
            <img src="planter.jpg" className={styles.imageStyle} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Tuto;
