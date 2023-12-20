// import { useState, useEffect } from "react";
// import { useParams } from "react-router";


// function Post() {
//     const{slug} = useParams();
//     const [post, setPost] = useState('');
//     const [answers, setAnswers] = useState([]);

//     useEffect(() => {
//         fetch(`http://localhost:3000/answers/allanswers`)
//         .then((response) => response.json())
//         .then((data) => {
//             console.log({slug})
//             for (let i = 0; i < data.length; i++){
//                 if(data[i].title)
//                 console.log(data.answers[i].title)
//                 setPost(data.answers[i].title)
//             }
//         })
//     }, [slug])

//     return (
      
//     );
//    }
   
//    export default Post;