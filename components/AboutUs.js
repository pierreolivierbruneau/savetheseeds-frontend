import styles from "../styles/About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

function AboutUs() {
  const [showWho, setShowWho] = useState(false);
  const [showWhy, setShowWhy] = useState(false);
  const [showHow, setShowHow] = useState(false);
  const [showPurpose, setShowPurpose] = useState(false);

  const handleClick = () => {
    console.log("Click");
    setShowWho(!showWho);
    setShowWhy(false);
    setShowHow(false);
    setShowPurpose(false);
  };

  const handleClick2 = () => {
    console.log("Click");
    setShowWhy(!showWhy);
    setShowWho(false);
    setShowHow(false);
    setShowPurpose(false);
  };

  const handleClick3 = () => {
    console.log("Click");
    setShowHow(!showHow);
    setShowWhy(false);
    setShowWho(false);
    setShowPurpose(false);
  };

  const handleClick4 = () => {
    console.log("Click");
    setShowPurpose(!showPurpose);
    setShowWhy(false);
    setShowHow(false);
    setShowWho(false);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.title}>A PROPOS</h2>
        <div className={styles.about}>
          <div className={styles.paragraphs}>
            <h3 className={styles.questions} onClick={handleClick}>
              Qui ?
            </h3>
            {showWho && (
              <p className={styles.answers}>
                Composé d’une équipe soudée de développeurs soucieux de
                l’environnement, nous nous engageons à avoir un impact positif.
                Notre engagement collectif en faveur de la responsabilité
                environnementale alimente notre passion pour la création de
                solutions innovantes. Bien que nous soyons une petite équipe,
                nos aspirations sont grandes et nous sommes animés par une
                mission commune : contribuer de manière significative à un
                avenir plus vert et plus durable.
              </p>
            )}
          </div>
          <div className={styles.blankspace}></div>
          <div className={styles.paragraphs}>
            <h3 className={styles.questions} onClick={handleClick2}>
              Pourquoi ?
            </h3>
            {showWhy && (
              <p className={styles.answers}>
                Nous nous engageons à favoriser un changement positif dans le
                monde en minimisant notre empreinte environnementale. Conscients
                de l’augmentation alarmante de 12 % des émissions mondiales de
                CO2 au cours de la dernière décennie, nous sommes déterminés à
                contribuer à une solution. Notre objectif est de faciliter le
                lien entre les gens et l’impact profond de la plantation de
                graines. Les plantes jouent un rôle crucial dans le maintien
                d’une Terre saine, en libérant l’oxygène essentiel, en absorbant
                le dioxyde de carbone, en nourrissant la faune et en régulant
                l’équilibre complexe du cycle de l’eau. Ces contributions
                fondamentales sont indispensables au maintien de la vie sur
                notre planète, et nous nous engageons à faire partie de la
                solution pour un avenir plus vert et plus durable.
              </p>
            )}
          </div>
          <div className={styles.blankspace}></div>
          <div className={styles.paragraphs}>
            <h3 className={styles.questions} onClick={handleClick3}>
              Comment ?
            </h3>
            {showHow && (
              <p className={styles.answers}>
                Save the Seeds est sur le point de rationaliser le processus
                d'identification, de discussion et de replantation proactive
                d'arbres à l'aide de graines et de pierres provenant de notre
                alimentation. Tirant parti d'une technologie de géolocalisation
                avancée et de forums interactifs, nous servons de centre de
                communication efficace pour les personnes qui partagent notre
                profond engagement en faveur de la préservation de notre
                planète. Grâce à notre plateforme, nous permettons aux
                utilisateurs de se connecter, d'échanger des informations
                précieuses et de prendre des mesures concrètes en faveur de la
                préservation de l'environnement, en favorisant une communauté
                d'individus partageant les mêmes idées et dédiés au bien-être de
                notre planète.
              </p>
            )}
          </div>
          <div className={styles.blankspace}></div>
          <div className={styles.paragraphs}>
            <h3 className={styles.questions} onClick={handleClick4}>
              Notre but ?
            </h3>
            {showPurpose && (
              <p className={styles.answers}>
                Notre objectif est de rendre notre environnement plus
                diversifié, ce qui contribue à réduire notre impact sur la
                planète. En nous concentrant sur la biodiversité, nous visons à
                créer un écosystème plus sain et plus résilient. Par des actions
                concrètes et en travaillant ensemble, nous voulons contribuer à
                réduire les effets négatifs des activités humaines sur
                l’environnement et promouvoir une coexistence équilibrée entre
                la nature et la société. Notre engagement ne consiste pas
                seulement à préserver, mais à contribuer activement à la
                restauration et à l'enrichissement des écosystèmes pour le
                bien-être des générations actuelles et futures.
              </p>
            )}
          </div>
        </div>
        <div className={styles.socialNetworks}>
          <div className={styles.facebook}>
            <FontAwesomeIcon icon={faFacebook} className={styles.icons} />
            <p>Facebook</p>
          </div>
          <div className={styles.instagram}>
            <FontAwesomeIcon icon={faInstagram} className={styles.icons} />
            <p>Instagram</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AboutUs;
