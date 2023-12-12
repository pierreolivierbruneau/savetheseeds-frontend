import styles from '../styles/Header.module.css';
import Modale from './Modal';
import Link from 'next/link';

function Header(){


    return(

<div className={styles.main}>
    <div className={styles.mainContainer}>

    <svg xmlns="http://www.w3.org/2000/svg" 
    height="150" 
    width="150" 
    viewBox="0 0 512 512" 
    className={styles.seedling}>
        <path fill='#224229' 
        d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0h32c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64H64c123.7 0 224 100.3 224 224v32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320C100.3 320 0 219.7 0 96z"/></svg>
    
     <div>
        <div className={styles.title}>Save the Seeds</div>
        <div className={styles.navbar}> 
            <button className={styles.accueil}>Accueil</button>
            <button className={styles.accueil}>Géolocalisation</button>
            <button className={styles.accueil}>Forum</button>
            <button className={styles.accueil}>Images</button>
            <button className={styles.accueil}>Dons</button>
            <button className={styles.accueil}>Tutos</button>
            <button className={styles.accueil}>A Propos</button>
        </div>
     </div>
     
        <div className={styles.buttons}>
            <p><button className={styles.inscription}>Inscription</button></p>
            
            <Modale/>
        </div>
    </div>
        
</div>

 )
}

export default Header;