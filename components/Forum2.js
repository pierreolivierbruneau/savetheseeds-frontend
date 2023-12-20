import styles from "../styles/Forum2.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { text } from "@fortawesome/fontawesome-svg-core";

function Forum2() {
  const user = useSelector((state) => state.user.value);
  console.log(user);
  const router = useRouter();
  const [comment, setComment] = useState("");
  const [title, setTitle] = useState("");

  const onClickHandler = () => {
    if (user.token === null) {
      //to not allow someone to submit a post ithout a token
      console.log("Utilisateur non connecté");
    } else {
      fetch("http://localhost:3000/message/newmessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          text: comment,
          token: user.token,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.result === true) {
            router.push("/forum");
          } else {
            console.log("Utilisateur non connecté");
          }
        });
    }
  };

  console.log("comment and title states:", comment, title);

  const onChangeTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const onChangeCommentHandler = (e) => {
    setComment(e.target.value);
  };

  return (
    <div>
      <div className={styles.title}>
        Forum{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="50"
          width="50"
          viewBox="0 0 512 512"
          className={styles.seedling}
        >
          <path
            fill="#224229"
            d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0h32c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64H64c123.7 0 224 100.3 224 224v32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320C100.3 320 0 219.7 0 96z"
          />
        </svg>
      </div>
      <div className={styles.container}>
        <div>
          <div className={styles.text}>Intitulé du poste</div>
          <input
            type="text"
            className={styles.textbox}
            value={title}
            onChange={onChangeTitleHandler}
          ></input>
        </div>
        <div>
          <div className={styles.text2}>Contenu du poste</div>
          <input
            type="text"
            value={comment}
            onChange={onChangeCommentHandler}
            className={styles.textbox2}
          ></input>
        </div>
      </div>
      <button type="submit" className={styles.submit} onClick={onClickHandler}>
        Submit
      </button>
    </div>
  );
}

export default Forum2;
