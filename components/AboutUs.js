import styles from "../styles/About.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState } from "react";


function AboutUs() {
    const [showWho, setShowWho] = useState(false);
    const [showWhy, setShowWhy] = useState(false);
    const [showHow, setShowHow] = useState(false);
    const [showPurpose, setShowPurpose] = useState(false);

    const handleClick = () => {
      console.log('Click')
      setShowWho(!showWho)
      setShowWhy(false)
      setShowHow(false)
      setShowPurpose(false)
    }

    const handleClick2= () => {
      console.log('Click')
      setShowWhy(!showWhy)
      setShowWho(false)
      setShowHow(false)
      setShowPurpose(false)
    }

    const handleClick3= () => {
      console.log('Click')
      setShowHow(!showHow)
      setShowWhy(false)
      setShowWho(false)
      setShowPurpose(false)
    }

    const handleClick4= () => {
      console.log('Click')
      setShowPurpose(!showPurpose)
      setShowWhy(false)
      setShowHow(false)
      setShowWho(false)
    }


  return (
    <div className={styles.container}>
      <main className={styles.main}>
        
        <h2 className={styles.title}>A PROPOS</h2>
        <div className={styles.about}>
          <div className={styles.paragraphs}>
          <h3 className={styles.questions} onClick={handleClick}>Qui ?</h3>
          {showWho && <p className={styles.answers}>Nous sommes une petite équipe de développeurs soucieux de l'environnement.</p>}
          </div>
          <div className={styles.blankspace}></div>
          <div className={styles.paragraphs}>
          <h3 className={styles.questions} onClick={handleClick2}>Pourquoi ?</h3>
          {showWhy && <p className={styles.answers}>Nous voulons rendre le monde meilleur en diminuant notre impact sur l'environnement.</p>}
          </div>
          <div className={styles.blankspace}></div>
          <div className={styles.paragraphs}> 
          <h3 className={styles.questions} onClick={handleClick3}>Comment ?</h3>
          {showHow && <p className={styles.answers}>Replanter des arbres à partir de graines et noyaux que l'on trouve dans notre alimentation.</p>}
          </div>
          <div className={styles.blankspace}></div>
          <div className={styles.paragraphs}>
          <h3 className={styles.questions} onClick={handleClick4}>Notre but ?</h3>
          {showPurpose && <p className={styles.answers}>Améliorer la biodiversité de notre environnement et ainsi diminuer notre impact écologique.</p>}
          </div>
        </div>
        <div className={styles.socialNetworks}>
          <div className={styles.facebook}>
          <FontAwesomeIcon  icon={faFacebook} className={styles.icons}/>
          <p>Facebook</p>
          </div>
          <div className={styles.instagram}>
          <FontAwesomeIcon  icon={faInstagram} className={styles.icons}/>
          <p>Instagram</p>
          </div>
        </div>      
      </main>     
    </div>
  );
}

export default AboutUs;
