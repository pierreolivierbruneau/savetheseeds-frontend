import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Modal.module.css';
import { Modal, Button } from 'antd';
import { login, logout } from '../reducers/user';

function Modale() {

   //Fonctions connexion
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.value)
  const [signInUsername, setSignInUsername] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  //UseState ouverture/fermeture Modale
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(false);

 
//Fonctions ouverture/fermeture Modale
  const handleClick= () => {
    setSelectedOption(!selectedOption);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  //Fonctions Connexion/déconnexion

  const handleConnection = () => {
    fetch('http://localhost:3000/users/signin', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username: signInUsername, password: signInPassword}),
    }).then(response => response.json())
    .then(data => {
      console.log('The result is', data)
      if(data.result){
        dispatch(login({username: signInUsername, token: data.token}));
        setSignInUsername('');
        setSignInPassword('');
        setIsOpen(false);
      }
    })
  }


  return (
    <div>
      <Button className={styles.bttn1} onClick={() =>openModal()}>
        Connection
      </Button>
      <Modal className={styles.modal} 
        title="Se connecter"
        open={isOpen}
        onOk={openModal}
        onCancel={closeModal} footer= {null}>
        <div>
          <div className={styles.username}>
          <p className={styles.text}>Nom d'utilisateur</p>
          <input className={styles.input} type ='text' placeholder='Francis Lalane' id='Nom utilisateur' onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername}></input>
          </div>
          <div className={styles.password}>
          <p className={styles.text}>Mot de passe</p>
          <input className={styles.input} type='password' id='Mot de passe' onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword}></input>
          </div>
        </div>
        <div className={styles.remember}>
          <div className={styles.rememberMe}>
            <input type="radio" checked={selectedOption} onClick={() => handleClick()}></input>
            <p>Se souvenir de moi</p>
            </div>
          <p className={styles.forgottenPassword} href=''>mot de passe oublié ?</p>
        </div>
        <div className={styles.click}>
            <Button className={styles.signInBttn} onClick={() => handleConnection()}>SE CONNECTER</Button>
          <Button className={styles.signUpBttn}>CRÉER UN COMPTE</Button>
        </div>
      </Modal>
    </div>
  );
};

export default Modale;
