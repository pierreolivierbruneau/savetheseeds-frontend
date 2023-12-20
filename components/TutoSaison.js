import styles from "../styles/cards.module.css";

function TutoSaison() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.containerTitle}>
          <h3 className={styles.title}>
            Quelles Graines Planter Selon Les Saisons
          </h3>
        </div>

        <div className={styles.containerSousTitle}>
          <div className={styles.section}>
            <div className={styles.textSection}>
              <h4 className={styles.sousTitle}>Bien choisir sa graine</h4>
              <p className={styles.paragraph}>
                <p style={{ textIndent: 30 }}>
                  La plantation de graines est un excellent moyen de cultiver
                  des fruits et légumes frais à la maison. Cependant, il est
                  important de choisir les bonnes graines pour la bonne saison.
                  En effet, chaque type de plante a des besoins spécifiques en
                  matière de température, de lumière et d'humidité.
                </p>
              </p>
            </div>
            <img src="recuper.jpg" className={styles.imageStyle} />
          </div>

          <div className={styles.section}>
            <div className={styles.textSection}>
              <h4 className={styles.sousTitle}>Printemps</h4>
              <p className={styles.paragraph}>
                <p style={{ textIndent: 30 }}>
                  Le printemps est la saison idéale pour planter la plupart des
                  fruits et légumes. Les températures commencent à augmenter et
                  les jours sont plus longs, ce qui est propice à la germination
                  et à la croissance des plantes.
                </p>
                <ul className={styles.List}>
                  <li style={{ fontWeight: "bold" }}>
                    Légumes : tomates, courgettes, concombres, poivrons,
                    haricots, pois, radis, carottes, oignons, pommes de terre
                  </li>
                  <li style={{ fontWeight: "bold" }}>
                    Fruits : fraises, framboises, myrtilles, rhubarbe,
                    groseilles
                  </li>
                </ul>
              </p>
            </div>
            <img src="preparer.jpg" className={styles.imageStyle} />
          </div>

          <div className={styles.section}>
            <div className={styles.textSection}>
              <h4 className={styles.sousTitle}>Été</h4>
              <p className={styles.paragraph}>
                <p>
                  L'été est une saison chaude et ensoleillée, idéale pour la
                  croissance des plantes. Cependant, il est important de veiller
                  à ce que les plantes aient suffisamment d'eau, car le sol peut
                  se dessécher rapidement.
                </p>
                <ul className={styles.List}>
                  <li style={{ fontWeight: "bold" }}>
                    Légumes : melons, pastèques, aubergines, courges, maïs,
                    basilic, menthe
                  </li>
                  <li style={{ fontWeight: "bold" }}>
                    Fruits : pêches, nectarines, abricots, prunes, cerises,
                    figues
                  </li>
                </ul>
              </p>
            </div>
            <img src="preparer.jpg" className={styles.imageStyle} />
          </div>

          <div className={styles.section}>
            <div className={styles.textSection}>
              <h4 className={styles.sousTitle}>Automne</h4>
              <p className={styles.paragraph}>
                <p>
                  L'automne est une saison idéale pour planter des arbres
                  fruitiers et des arbustes fruitiers. Les températures
                  commencent à baisser, ce qui permet aux plantes de développer
                  un système racinaire solide avant l'hiver.
                </p>
                <ul className={styles.List}>
                  <li style={{ fontWeight: "bold" }}>
                    Arbres fruitiers : pommiers, poiriers, pruniers, cerisiers,
                    pêchers, abricotiers, châtaigniers
                  </li>
                  <li style={{ fontWeight: "bold" }}>
                    Arbustes fruitiers : framboisiers, groseilliers,
                    cassissiers, mûres, myrtilliers, figuiers
                  </li>
                </ul>
              </p>
            </div>
            <img src="germer.jpg" className={styles.imageStyle} />
          </div>

          <div className={styles.section}>
            <div className={styles.textSection}>
              <h4 className={styles.sousTitle}>Hiver</h4>
              <p className={styles.paragraph}>
                <p>
                  L'hiver est une saison difficile pour la culture des fruits et
                  légumes. Les températures sont basses et les jours sont
                  courts, ce qui peut ralentir la croissance des plantes.
                  Cependant, il est possible de cultiver certaines plantes en
                  hiver, notamment sous abri.
                </p>
                <ul className={styles.List}>
                  <li>
                    Légumes : radis, carottes, betteraves, navets, épinards,
                    laitue, roquette
                  </li>
                  <li>Fruits : fraises, framboises, myrtilles, rhubarbe</li>
                </ul>
                <p>
                  Bien sûr, ces conseils sont généraux. Il est important de se
                  renseigner sur les besoins spécifiques de chaque plante avant
                  de la planter. Vous pouvez trouver des informations sur les
                  graines et les plantes dans des livres, des magazines ou sur
                  Internet.
                </p>
                <p>
                  Voici quelques conseils supplémentaires pour choisir les
                  bonnes graines :
                </p>
                <ul className={styles.List}>
                  <li>
                    Tenez compte de votre région. Les conditions climatiques
                    varient d'une région à l'autre. Choisissez des graines
                    adaptées au climat de votre région.
                  </li>
                  <li>
                    Prévoyez à l'avance. Certaines graines ont besoin d'être
                    semées plusieurs semaines ou même plusieurs mois avant la
                    récolte.
                  </li>
                  <li>
                    Lisez l'étiquette. L'étiquette des graines vous fournit des
                    informations importantes sur la plante, notamment sa période
                    de semis, sa durée de culture et ses besoins en matière de
                    soins.
                  </li>
                </ul>
              </p>
            </div>
            <img src="germer.jpg" className={styles.imageStyle} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default TutoSaison;
