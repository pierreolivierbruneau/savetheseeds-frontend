import styles from "../styles/Don.module.css";
import { Button } from "antd";
import { useState } from "react";
import Link from "next/link";

function Don() {
  const [showUtility, setShowUtility] = useState(false);
  const [showTaxes, setShowTaxes] = useState(false);
  const [showMoney, setShowMoney] = useState(false);

  const handleClick = () => {
    setShowUtility(!showUtility);
    setShowTaxes(false);
    setShowMoney(false);
  };

  const handleClick2 = () => {
    setShowTaxes(!showTaxes);
    setShowUtility(false);
    setShowMoney(false);
  };

  const handleClick3 = () => {
    setShowMoney(!showMoney);
    setShowUtility(false);
    setShowTaxes(false);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>SOUTENEZ-NOUS !</h2>
      <div className={styles.questions}>
        <h3 onClick={handleClick}>A quoi servent vos dons ?</h3>
        {showUtility && (
          <p className={styles.answers}>
            Nos dons servent à soutenir notre projet de plantation de graines.En
            faisant un don, vous contribuez directement à la réalisation de ces
            objectifs environnementaux. Vos dons nous permettent d'étendre nos
            plantations, d'atteindre un plus grand nombre de terres dégradées et
            de diversifier les espèces plantées. Ils nous aident également à
            sensibiliser les communautés locales à l'importance de la
            préservation de l'environnement. Nous sommes reconnaissants de votre
            soutien et de vos dons, car ils jouent un rôle essentiel dans la
            concrétisation de notre mission de préserver la nature et de
            construire un avenir plus durable.
          </p>
        )}
      </div>
      <div className={styles.blankspace}></div>
      <div className={styles.questions}>
        <h3 onClick={handleClick2}>Puis-déduire mes dons de mes impôts ?</h3>
        {showTaxes && (
          <p className={styles.answers}>
            Etant une petite association qui débute, nous ne sommes pas encore
            reconnus et enregistrés auprès des autorités fiscales compétentes.
            Il n'est donc pas pour le moment possible de déduire les dons des
            impôts, mais avons bon espoir que cela soit possible dans un futur
            proche !{" "}
          </p>
        )}
      </div>
      <div className={styles.blankspace}></div>
      <div className={styles.questions}>
        <h3 onClick={handleClick3}>
          Save the seeds est-il entièrement financé par les dons ?
        </h3>
        {showMoney && (
          <p className={styles.answers}>
            Oui, Save the Seeds est entièrement financé par les dons. Nos
            activités et programmes dépendent entièrement des contributions
            généreuses de personnes et d'organisations qui soutiennent notre
            mission de préservation et de protection de l'environnement. Grâce à
            ces dons, nous pouvons mener des projets de sauvegarde de
            l'environnement, sensibiliser le public aux enjeux de la
            biodiversité
          </p>
        )}
      </div>
      <div className={styles.blankspace}></div>
      <div>
        <input
          type="text"
          placeholder="....€"
          id="Montant don"
          className={styles.input}
        ></input>
      </div>
      <div className={styles.blankspace}></div>
      <div>
        <Link href="/payments">
          <Button className={styles.button}>Valider mon don</Button>
        </Link>
      </div>
      <div className={styles.blankspace}></div>
      <div>
        <img
          src="tutoPrintemps.jpg"
          style={{ width: "300px", height: "200px" }}
        />
      </div>
    </div>
  );
}

export default Don;
