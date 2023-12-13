import styles from "../styles/Don.module.css";
import { Button } from 'antd';


function Don() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>SOUTENEZ-NOUS !</h2>
          <div className={styles.questions}>
            <h3>A quoi servent vos dons ?</h3>
          </div>
          <div className={styles.blankspace}></div>
          <div className={styles.questions}>
            <h3>Puis-déduire mes dons de mes impôts ?</h3>
          </div>
          <div className={styles.blankspace}></div>
          <div className={styles.questions}>
            <h3>Save the seeds est-il entièrement financé par les dons ?</h3>
          </div>
          <div className={styles.blankspace}></div>
          <div>
            <input type ='text' placeholder='....€' id='Montant don' className={styles.input}></input>
          </div>
          <div className={styles.blankspace}></div>
          <div>
            <Button className={styles.button}>Valider mon don</Button>
          </div>
      </div>
    );
   }
   
   export default Don;