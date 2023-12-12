import { useState } from "react";
import styles from '../styles/Modal.module.css';
import { Modal, Button } from 'antd';


function Modale() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(false);

  const handleClick= () => {
    setSelectedOption(!selectedOption);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
          <input className={styles.input} type ='text' placeholder='dzadaz' id='Nom utilisateur'></input>
          </div>
          <div className={styles.password}>
          <p className={styles.text}>Mot de passe</p>
          <input className={styles.input} type='password' id='Mot de passe'></input>
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
            <Button className={styles.signInBttn}>SE CONNECTER</Button>
          <Button className={styles.signUpBttn}>CRÉER UN COMPTE</Button>
        </div>
      </Modal>
    </div>
  );
};

export default Modale;
