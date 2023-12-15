import styles from "../styles/Forum2.module.css";
import { useState } from "react";

function Forum2() {
  const [comment, setComment] = useState("");
  const [title, setTitle] = useState("");

  const onClickHandler = () => {
    fetch("http://localhost:3000/message/newmessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title, text: comment, username: "Kayla" }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === true) {
          string.link((href = "http://loccalhost:3001/forum"));
        }
      });
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
      <div className={styles.title}>Forum</div>
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
