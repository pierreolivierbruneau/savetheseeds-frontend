import styles from "../../styles/Tutos.module.css";

function PlanterAuPrintemps() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.containerTitle}>
          <h3 className={styles.title}>La Plantation de Fruits au Printemps</h3>
        </div>
        <div style={{ textAlign: "center" }}>
          <h4 className={styles.sousTitle}>Conseils et Astuces</h4>
        </div>
        <div className={styles.textSection}>
          <p style={{ fontSize: 20 }}>
            Au printemps, la nature se réveille et offre une opportunité idéale
            pour planter une variété de fruits délicieux dans votre jardin.
            Suivez ces conseils pratiques pour une plantation réussie :
          </p>
          <ul>
            <li className={styles.list}>
              <p style={{ fontWeight: "bold" }}>1. Sélection des Fruits :</p> Au
              printemps, choisissez des fruits adaptés à votre région et à votre
              climat. Les options populaires incluent les fraises, les
              framboises, les cerises, les pêches et les abricots. Assurez-vous
              que les variétés sélectionnées sont compatibles avec les
              conditions printanières.
            </li>
            <li className={styles.list}>
              <p style={{ fontWeight: "bold" }}>2. Préparation du Sol :</p>{" "}
              Préparez le sol en le décompactant et en ajoutant du compost pour
              améliorer la fertilité. Assurez-vous que le sol draine bien, car
              les excès d'eau peuvent être néfastes pour les racines des arbres
              fruitiers.
            </li>
            <li className={styles.list}>
              <p style={{ fontWeight: "bold" }}>
                {" "}
                3. Plantation des Arbres et Arbustes :
              </p>{" "}
              Plantez vos arbres et arbustes fruitiers en suivant les
              recommandations de distance entre les plants. Creusez des trous
              suffisamment grands pour accueillir les racines et assurez-vous de
              les positionner à la profondeur appropriée.
            </li>
            <li className={styles.list}>
              <p style={{ fontWeight: "bold" }}>4. Exposition au Soleil :</p>{" "}
              Choisissez un emplacement qui bénéficie d'une exposition maximale
              au soleil. Les fruits ont besoin de beaucoup de lumière pour une
              croissance optimale.
            </li>{" "}
            <li className={styles.list}>
              <p style={{ fontWeight: "bold" }}>5. Arrosage Prudent :</p>{" "}
              Arrosez régulièrement, en particulier pendant les périodes sèches.
              Gardez le sol uniformément humide sans le rendre détrempé. Un
              système d'irrigation goutte-à-goutte peut être une option
              pratique.
            </li>{" "}
            <li className={styles.list}>
              {" "}
              <p style={{ fontWeight: "bold" }}>
                6. Protection Contre les Gelées Tardives :
              </p>{" "}
              Protégez vos plantations contre les gelées tardives en surveillant
              les prévisions météorologiques. Couvrez les jeunes plants la nuit
              si nécessaire pour éviter tout dommage dû au froid.
            </li>
            <li className={styles.list}>
              <p style={{ fontWeight: "bold" }}> 7. Entretien Régulier :</p>{" "}
              Effectuez une taille légère pour encourager une croissance saine.
              Retirez les mauvaises herbes autour des plantations pour éviter la
              compétition en nutriments.
            </li>
          </ul>
          <p>
            En suivant ces conseils simples, vous maximiserez vos chances de
            récolter des fruits succulents plus tard dans la saison. N'oubliez
            pas d'ajuster ces conseils en fonction des spécificités de chaque
            type de fruit que vous choisissez de planter. Happy gardening!{" "}
            <span role="img" aria-label="Plant">
              🌱
            </span>
            <span role="img" aria-label="Strawberry">
              🍓
            </span>
            <span role="img" aria-label="Peach">
              🍑
            </span>
          </p>
        </div>
      </main>
    </div>
  );
}

export default PlanterAuPrintemps;
