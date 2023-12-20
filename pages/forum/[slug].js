import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/router';
import { useSelector } from "react-redux";
import { useEffect, useState, useRef } from 'react';
import styles from "../../styles/Post.module.css";
import { faUser, faComment, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from 'antd';


function posteBlog() {
    const user = useSelector((state) => state.user.value);
    //const slug= useSelector((state) => state.slug.value);
   
    //Function to fetch each post and display all the comments of the post in a slug page (1)
    const router = useRouter();
    const [posteInformation, setPosteInformation] = useState({});
    const [numberComments, setNumberComments] = useState('');
    const [answers, setAnswers] = useState([]);
    //Function to post a comment to the post
    const [newComment, setNewComment] = useState('');

    const handleClick = () => {
        console.log('Click')
        const commentData = {
            content: newComment,
           author: {username: user.username},
            date: new Date().toISOString()
            
          };
          console.log('comment is', commentData)
        fetch(`http://localhost:3000/answers/${posteInformation.slug}`, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({content: newComment, token: user.token})
        })
        .then((response) => response.json())
        .then((data) => {
            if(data.result === true){
                setAnswers([...answers, commentData])
                setNewComment('')               
            }
        })
        
    }

    const onChangeHandler = (e) => {
        setNewComment(e.target.value)
    }
    
    //Function to fetch each post and display all the comments of the post in a slug page (2)
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

    const formattedDate = new Date(posteInformation.date_publish).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });

      console.log('answers is', answers)
      const allanswers = answers.map((data, i) => {
        console.log('user is', data.author?.username)
          console.log('data is :', data?.date)
          const formattedDate2 = new Date(data.date).toLocaleDateString('en-GB', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric'
            }
          );       
        return(
            <div>
                <div>
                    <div className={styles.user2}>
                        <FontAwesomeIcon icon={faUser} size='3x'/>
                        <div>
                            <p>{data.author?.username}</p>
                            <p className={styles.date2}>{formattedDate2}</p>
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
        <p className={styles.date}>{formattedDate}</p>
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
        <input className={styles.input} onChange={onChangeHandler}>
        </input>
        <Button className={styles.button}onClick={handleClick}>Répondre</Button>
        </div>
      </div>
    </div>
    )
}

export default posteBlog;