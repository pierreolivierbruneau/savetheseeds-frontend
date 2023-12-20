import styles from "../../styles/Tutos.module.css";

function PlanterEnAutomne() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.containerTitle}>
          <h3 className={styles.title}>La Plantation Automnale </h3>
          <img src="/petitePomme.jpg" className={styles.imageTutos} />{" "}
        </div>
        <div style={{ textAlign: "center" }}>
          <h4 className={styles.sousTitle}>Conseils et Astuces</h4>
        </div>
        <div className={styles.textSection}>
          <p style={{ fontSize: 20 }}>
            L'automne offre une opportunité unique pour planter des fruits
            adaptés à la saison fraîche. Suivez ce guide détaillé pour maximiser
            votre récolte de fruits succulents en automne.
          </p>
          <ul>
            <li className={styles.list}>
              <p style={{ fontWeight: "bold" }}>
                1.Sélection des Fruits Adaptés à l'Automne :
              </p>
              L'automne offre une opportunité unique pour planter des fruits
              adaptés à la saison fraîche. Suivez ce guide détaillé pour
              maximiser votre récolte de fruits succulents en automne.
            </li>
            <li className={styles.list}>
              <p style={{ fontWeight: "bold" }}>2. Préparation du Sol :</p>{" "}
              Préparez le sol en le décompactant et ajoutez du compost pour
              améliorer sa fertilité. Assurez-vous que le sol est bien drainé
              pour éviter les problèmes liés à l'excès d'eau pendant la saison
              automnale.
            </li>
            <li className={styles.list}>
              <p style={{ fontWeight: "bold" }}>
                {" "}
                3. Plantation des Arbres et Arbustes :
              </p>{" "}
              Plantez vos arbres et arbustes fruitiers en respectant les
              recommandations de distance entre les plants. Creusez des trous
              suffisamment grands pour accueillir les racines et positionnez-les
              à la profondeur appropriée.
            </li>
            <li className={styles.list}>
              <p style={{ fontWeight: "bold" }}>4. Exposition au Soleil :</p>{" "}
              Choisissez un emplacement qui bénéficie d'une exposition maximale
              au soleil, même si les journées sont plus courtes. Les fruits ont
              besoin de lumière pour une croissance optimale.
            </li>{" "}
            <li className={styles.list}>
              <p style={{ fontWeight: "bold" }}>5. Arrosage Prudent :</p>{" "}
              Arrosez régulièrement, en particulier pendant les périodes sèches
              de l'automne. Gardez le sol uniformément humide sans le rendre
              détrempé. Un système d'irrigation goutte-à-goutte peut être une
              option pratique.
            </li>{" "}
            <li className={styles.list}>
              {" "}
              <p style={{ fontWeight: "bold" }}>
                6. Protection Contre le Gel :
              </p>{" "}
              Surveillez les prévisions météorologiques et protégez vos
              plantations contre les gelées tardives. Couvrez les jeunes plants
              la nuit si nécessaire pour éviter tout dommage dû au froid.
            </li>
            <li className={styles.list}>
              <p style={{ fontWeight: "bold" }}>
                7. Entretien Régulier et Récolte:
              </p>{" "}
              Effectuez une taille légère pour encourager une croissance saine.
              Retirez les feuilles mortes et les mauvaises herbes autour des
              plantations pour éviter la compétition en nutriments. La récolte
              des fruits peut avoir lieu à la fin de l'été et au début de
              l'automne. Assurez-vous de récolter lorsque les fruits sont à
              maturité. Profitez de vos fruits frais et savoureux au cours de
              l'automne.
            </li>
          </ul>
          <p>
            Conclusion : En suivant ces étapes simples, vous serez sur la voie
            d'une abondance de fruits savoureux tout au long de l'été. N'oubliez
            pas d'ajuster les conseils en fonction des besoins spécifiques de
            chaque type de fruit que vous choisissez de planter. Joyeux
            jardinage estival !{" "}
            <span role="img" aria-label="Apple">
              🍎
            </span>
            <span role="img" aria-label="Pear">
              🍐
            </span>
            <span role="img" aria-label="Grapps">
              🍇
            </span>
          </p>
        </div>
      </main>
    </div>
  );
}

export default PlanterEnAutomne;
