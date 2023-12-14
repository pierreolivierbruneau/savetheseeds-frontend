import styles from '../styles/Forum2.module.css';
import {useState} from "react";


function Forum2(){
const[comment, setComment] = useState("");
const[comments, setComments] = useState([]);


const onClickHandler = () =>{
    setComments((comments) => [...comments,comment]);

}
const onChangeHandler = (e) => {
setComment(e.target.value);
}

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
    <input type="text" 
    value={comment} 
    onChange={onChangeHandler} 
    className={styles.textbox2}>

    </input>
</div>


</div>


<button 
type="submit" 
onClick={onClickHandler} 
className={styles.submit}>
    Submit
    </button>


{comments.map((text) =>(
    <div className ={styles.commentContainer}> {text} </div>
))}


</div>
    )
}


export default Forum2;