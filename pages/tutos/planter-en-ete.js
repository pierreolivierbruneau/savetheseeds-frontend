import styles from "../../styles/Tutos.module.css";

function PlanterEnEte() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.containerTitle}>
          <h3 className={styles.title}>La Plantation Estivale</h3>
          <img src="/cerise.jpg" className={styles.imageTutos} />{" "}
        </div>
        <div style={{ textAlign: "center" }}>
          <h4 className={styles.sousTitle}>Conseils et Astuces</h4>
        </div>
        <div className={styles.textSection}>
          <p style={{ fontSize: 20 }}>
            L'été est la saison idéale pour cultiver une variété de fruits
            succulents dans votre jardin. Les températures chaudes et les
            journées ensoleillées fournissent des conditions optimales pour la
            croissance des plantes. Suivez ce guide complet pour tirer le
            meilleur parti de votre jardin estival.
          </p>
          <ul>
            <li className={styles.list}>
              <p style={{ fontWeight: "bold" }}>
                1.Sélection des Fruits Adaptés à l'Été :
              </p>
              Au cours de l'été, privilégiez les fruits qui prospèrent dans des
              climats chauds. Certains choix populaires incluent les melons, les
              pastèques, les aubergines, les courges, le maïs, les fraises, les
              framboises et les figues.
            </li>
            <li className={styles.list}>
              <p style={{ fontWeight: "bold" }}>2. Préparation du Sol :</p>{" "}
              Assurez-vous que le sol est bien préparé en le décompactant et en
              ajoutant du compost pour améliorer la qualité. Un sol bien drainé
              est essentiel pour éviter les problèmes liés à l'excès d'eau
              pendant les périodes estivales.
            </li>
            <li className={styles.list}>
              <p style={{ fontWeight: "bold" }}> 3. Exposition au Soleil :</p>{" "}
              Sélectionnez des emplacements qui bénéficient d'une exposition
              maximale au soleil. Les fruits ont besoin de beaucoup de lumière
              pour une croissance optimale. Assurez-vous que vos plantations
              reçoivent au moins 6 à 8 heures de soleil par jour.
            </li>
            <li className={styles.list}>
              <p style={{ fontWeight: "bold" }}>4. Arrosage Régulier :</p> L'été
              peut être chaud et sec, donc un arrosage régulier est crucial.
              Arrosez le matin ou le soir pour éviter l'évaporation rapide de
              l'eau. Assurez-vous que le sol reste uniformément humide, mais
              évitez le sur-arrosage.
            </li>{" "}
            <li className={styles.list}>
              <p style={{ fontWeight: "bold" }}>
                5. Protection Contre la Chaleur Extrême :
              </p>{" "}
              Les vagues de chaleur peuvent être stressantes pour les plantes.
              Protégez-les en utilisant du paillis pour maintenir l'humidité du
              sol et en installant des ombrages temporaires pendant les jours
              les plus chauds.
            </li>{" "}
            <li className={styles.list}>
              {" "}
              <p style={{ fontWeight: "bold" }}>
                6. Soins Spécifiques aux Fruits :
              </p>{" "}
              Chaque type de fruit a des besoins spécifiques. Par exemple, les
              melons et les pastèques peuvent bénéficier d'un support pour
              éviter de toucher le sol, tandis que les fraises peuvent prospérer
              lorsqu'elles sont cultivées en hauteur.
            </li>
            <li className={styles.list}>
              <p style={{ fontWeight: "bold" }}>
                7. Récolte et Délice Estival :
              </p>{" "}
              La récolte des fruits varie en fonction de la variété, mais
              assurez-vous de récolter lorsque les fruits sont à maturité.
              Profitez de vos récoltes estivales fraîches et délicieuses !
            </li>
          </ul>
          <p>
            Conclusion : En suivant ces étapes simples, vous serez sur la voie
            d'une abondance de fruits savoureux tout au long de l'été. N'oubliez
            pas d'ajuster les conseils en fonction des besoins spécifiques de
            chaque type de fruit que vous choisissez de planter. Joyeux
            jardinage estival !{" "}
            <span role="img" aria-label="Sun">
              🌞
            </span>
            <span role="img" aria-label="Watermelon">
              🍉
            </span>
            <span role="img" aria-label="Strawberry">
              🍓
            </span>
          </p>
        </div>
      </main>
    </div>
  );
}

export default PlanterEnEte;
