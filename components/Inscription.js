import styles from "../styles/Inscription.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { login, logout } from "../reducers/user";
import Link from 'next/link';

function Inscription() {
  
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpPasswordCheck, setSignUpPasswordCheck] = useState("");
  const [signUpFirstname, setSignUpFirstname] = useState("");
  const [signUpLastname, setSignUpLastname] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpBirthday, setSignUpBirthday] = useState("");
  const [signUpPhone, setSignUpPhone] = useState("");
  const dispatch = useDispatch();

  const router = useRouter();

  const handleRegister = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signUpUsername,
        password: signUpPassword,
        passwordCheck: signUpPasswordCheck,
        firstname: signUpFirstname,
        lastname: signUpLastname,
        email: signUpEmail,
        birthday: signUpBirthday,
        phone: signUpPhone,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result) {
          console.log(data);
          dispatch(login({ username: signUpUsername, token: data.token }));
          setSignUpUsername("");
          setSignUpPassword("");
          setSignUpBirthday("");
          setSignUpEmail("");
          setSignUpFirstname("");
          setSignUpLastname("");
          setSignUpPasswordCheck("");
          setSignUpPhone(""); 
          router.push('/');
      
        }
      });
  };

  const loader = async () => {
    const user = await getUser();
    if (user) {
      return redirect("/");
    }
    return null;
  };

  return (
    <div>
      <h1 className={styles.title}>CRÉER UN COMPTE</h1>

      <div className={styles.container}>
        <div className={styles.fullContainer}>
          <label for="username">Nom d'utilisateur</label>
          <input
            className={styles.input}
            id="username"
            onChange={(e) => setSignUpUsername(e.target.value)}
            value={signUpUsername}
            type="text"
          />
        </div>

        <div className={styles.halfContainer}>
          <div>
            <label for="firstname">Prénom</label>
            <input
              className={styles.input}
              id="firstname"
              onChange={(e) => setSignUpFirstname(e.target.value)}
              value={signUpFirstname}
              type="text"
            />
          </div>
          <div>
            <label for="lastname">Nom</label>
            <input
              className={styles.input}
              id="lastname"
              onChange={(e) => setSignUpLastname(e.target.value)}
              value={signUpLastname}
              type="text"
            />
          </div>
        </div>

        <div className={styles.halfContainer}>
          <div>
            <label for="birthday">Date de naissance</label>
            <input
              className={styles.input}
              id="birthday"
              onChange={(e) => setSignUpBirthday(e.target.value)}
              value={signUpBirthday}
              type="date"
            />
          </div>
          <div>
            <label for="phone">Téléphone</label>
            <input
              className={styles.input}
              id="phone"
              onChange={(e) => setSignUpPhone(e.target.value)}
              value={signUpPhone}
              type="number"
            />
          </div>
        </div>

        <div className={styles.fullContainer}>
          <label for="email">E-mail</label>
          <input
            className={styles.input}
            id="email"
            onChange={(e) => setSignUpEmail(e.target.value)}
            value={signUpEmail}
            type="email"
          />
        </div>

        <div className={styles.halfContainer}>
          <div>
            <label for="password">Password</label>
            <input
              className={styles.input}
              id="password"
              onChange={(e) => setSignUpPassword(e.target.value)}
              value={signUpPassword}
              type="password"
            />
          </div>
          <div>
            <label for="passwordcheck">Confirmation du password</label>
            <input
              className={styles.input}
              id="passwordcheck"
              onChange={(e) => setSignUpPasswordCheck(e.target.value)}
              value={signUpPasswordCheck}
              type="password"
            />
          </div>
        </div>

        <div>
          <button className={styles.photo}>
            <input type="file" accept="image/png, image/jpeg" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.clip}
              height="22"
              width="20"
              viewBox="0 0 448 512"
            >
              <path d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z" />
            </svg>
          </button>
        </div>
        <div>          
            <button className={styles.creer} onClick={() => handleRegister()}>
              Créer son compte
            </button>                
                  
        </div>
      </div>

      <div className={styles.bottom}></div>
    </div>
  );
}

export default Inscription;
