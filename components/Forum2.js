import styles from '../styles/Forum2.module.css';

function Forum2(){


    return(
<div>


 <div className={styles.title}>
     Forum
</div>

<div className={styles.container}>

<div>
    <div className={styles.text}>Intitulé du poste</div>
    <input type="text" className={styles.textbox}></input>
</div>


<div>
    <div className={styles.text2}>Contenu du poste</div>
    <input type="text" className={styles.textbox2}></input>
</div>


</div>


<button type="submit" className={styles.submit}>Submit</button>


</div>
    )
}


export default Forum2;