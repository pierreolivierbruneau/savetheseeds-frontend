import styles from "../../styles/Tutos.module.css";

function PlanterEnHiver() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.containerTitle}>
          <h3 className={styles.title}>La Plantation Hivernale</h3>
          <img src="/marché.jpg" className={styles.imageTutos} />{" "}
        </div>
        <div style={{ textAlign: "center" }}>
          <h4 className={styles.sousTitle}>Conseils et Astuces</h4>
        </div>
        <div className={styles.textSection}>
          <p style={{ fontSize: 20 }}>
            Planter des fruits en hiver peut sembler ambitieux, mais avec les
            bonnes stratégies, vous pouvez profiter d'une récolte succulente
            même pendant les mois les plus froids. Suivez ces 7 étapes simples
            pour réussir votre jardinage hivernal.
          </p>
          <ul>
            <li className={styles.list}>
              <p style={{ fontWeight: "bold" }}>
                1. Sélection des Fruits Résistants au Froid :
              </p>
              Choisissez des fruits qui peuvent résister aux conditions
              hivernales rigoureuses. Optez pour des variétés d'arbres fruitiers
              à noyaux résistants au froid, des baies robustes et des
              légumes-racines adaptés à la saison froide.
            </li>
            <li className={styles.list}>
              <p style={{ fontWeight: "bold" }}>2. Préparation du Sol :</p>{" "}
              Préparez le sol en le décompactant et en ajoutant du compost pour
              améliorer sa qualité. Assurez-vous que le sol est bien drainé pour
              éviter la stagnation de l'eau qui pourrait endommager les racines
              pendant l'hiver.
            </li>
            <li className={styles.list}>
              <p style={{ fontWeight: "bold" }}>3.Choisissez le Bon Moment :</p>{" "}
              Plantez vos fruits à la fin de l'automne ou au début de l'hiver,
              lorsque les arbres sont en dormance. Cela permet aux racines de
              s'établir avant que la croissance active ne reprenne au printemps.
            </li>
            <li className={styles.list}>
              <p style={{ fontWeight: "bold" }}>
                4. Protégez les Jeunes Plants :
              </p>{" "}
              L'été Utilisez des paillis pour protéger les jeunes plants du
              froid excessif. Les paillis organiques aident à maintenir une
              température du sol plus constante et à protéger les racines du
              gel.
            </li>{" "}
            <li className={styles.list}>
              <p style={{ fontWeight: "bold" }}>5. Arrosage Modéré :</p> Bien
              que les plantes aient besoin d'eau, évitez l'excès d'humidité en
              hiver. Arrosez modérément, car un sol trop humide peut causer des
              problèmes de pourriture des racines.
            </li>{" "}
            <li className={styles.list}>
              {" "}
              <p style={{ fontWeight: "bold" }}>
                6.Utilisez des Protections Contre le Froid :
              </p>{" "}
              Enveloppez les troncs des jeunes arbres avec du papier ou un tissu
              spécial pour les protéger du froid intense. Les structures de
              protection contre le vent peuvent également être utiles dans les
              zones exposées.
            </li>
            <li className={styles.list}>
              <p style={{ fontWeight: "bold" }}>
                7. Surveillez et Prévenez les Maladies :
              </p>{" "}
              Pendant l'hiver, surveillez les signes de maladies ou de
              ravageurs. Appliquez des traitements préventifs si nécessaire,
              mais assurez-vous de suivre les recommandations spécifiques à
              chaque fruit.
            </li>
          </ul>
          <p>
            N'oubliez pas de faire des recherches spécifiques sur les fruits que
            vous souhaitez planter, car les besoins peuvent varier en fonction
            de l'espèce.
            <span role="img" aria-label="Apple">
              🍏
            </span>
            <span role="img" aria-label="Snowflake">
              ❄️
            </span>
            <span role="img" aria-label="ChristmasTree">
              🌳
            </span>
          </p>
        </div>
      </main>
    </div>
  );
}

export default PlanterEnHiver;
