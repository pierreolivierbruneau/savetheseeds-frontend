import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from "../../styles/Post.module.css";
import { faUser, faComment, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from 'antd';


function posteBlog() {
    const router = useRouter();
    const [posteInformation, setPosteInformation] = useState({});
    const [numberComments, setNumberComments] = useState('');
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        if(router.query.slug) {

            fetch('http://localhost:3000/message/getmessage/'+router.query.slug)
            .then(response => response.json())
            .then(data => {
                console.log('The result is',data)
                if(data.result){           
                    setPosteInformation(data.forum)
                    setNumberComments(data.forum.answers.length)
                    setAnswers( data.forum.answers)
                }
            })
        }

    },[router.query])
   console.log('data', posteInformation.author?.username)
    const allanswers = answers.map((data, i) => {
          
        return(
            <div>
                <div>
                    <div className={styles.user2}>
                        <FontAwesomeIcon icon={faUser} size='3x'/>
                        <div>
                            <p>{data.author.username}</p>
                            <p className={styles.date2}>{data.date}</p>
                        </div>
                    </div>
                </div>
                <p className={styles.text} key={i}>{data.content}</p>
            </div>
            
        ) 
    })
    
    return(
    <div className={styles.main}>
        <div className={styles.header}>
            <div>
        <h3 className={styles.title}>Forum</h3>
        <h4 className={styles.postTitle}>{posteInformation?.title}</h4>
            </div>
        <p className={styles.date}>{posteInformation?.date_publish}</p>
        <div className={styles.userContent}>
            <div className={styles.user}>
        <FontAwesomeIcon icon={faUser}/><p>{posteInformation.author?.username}</p>
            </div>
            <div className={styles.numberComment}>
        <FontAwesomeIcon icon={faComment}/><p>{numberComments} commentaires</p>
            </div>
        </div>
        <FontAwesomeIcon icon={faQuoteLeft} className={styles.quote}/>
        <p className={styles.post}>{posteInformation?.text}</p>
        </div>
        <div className={styles.answers}>
            <h4 className={styles.titleAnswers}>Réponses</h4>
            {allanswers}
        <div className={styles.lign}></div>
         <div className={styles.comment}>
            <h4 className={styles.response}>Répondre</h4> 
            <p>Message</p>
        <input className={styles.input}>
        </input>
        <Button className={styles.button}>Répondre</Button>
        </div>
      </div>
    </div>
    )
}

export default posteBlog;