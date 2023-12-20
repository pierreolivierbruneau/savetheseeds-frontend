import styles from "../styles/Payment.module.css";
import { Button, Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";

function Payment() {
  const [selectedOption, setSelectedOption] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  //Ouverture/fermeture Modal ''Merci''
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setSelectedOption(!selectedOption);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Paiement</h2>
      <div className={styles.selectCard}>
        <input
          type="radio"
          checked={selectedOption}
          onClick={() => handleClick()}
        ></input>
        <p> Paiement par carte</p>
      </div>
      <div>Pay</div>
      <div className={styles.creditCard}>
        <div className={styles.numberCard}>
          <label>Numéro carte</label>
          <input
            type="text"
            className={styles.amount}
            placeholder="1234 1234 1234 1234"
          ></input>
        </div>
        <div className={styles.informationsCard}>
          <div className={styles.expirationDate}>
            <label>Date d'expiration</label>
            <input
              type="text"
              className={styles.date}
              placeholder="MM/AA"
            ></input>
          </div>
          <div className={styles.CVCNumber}>
            <label>CVV/CVN</label>
            <input type="text" className={styles.CVC} placeholder="CVC"></input>
          </div>
        </div>
      </div>
      <Button className={styles.payment} onClick={() => openModal()}>
        Payer
      </Button>
      <Modal
        className={styles.modal}
        open={isOpen}
        onCancel={closeModal}
        footer={null}
      >
        <img src="coeur.jpg" style={{ width: "450px", height: "350px" }} />
        <div className={styles.thanks}>
          <p>Merci !!!</p>
          <svg
            className={styles.semis}
            xmlns="http://www.w3.org/2000/svg"
            height="50"
            width="50"
            viewBox="0 0 512 512"
          >
            <path d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0h32c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64H64c123.7 0 224 100.3 224 224v32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320C100.3 320 0 219.7 0 96z" />
          </svg>
        </div>
      </Modal>
      <Link href="https://www.paypal.com/signin">
        <Button className={styles.paypal}>Paypal</Button>
      </Link>
      <Link href="/inscription">
        <Button className={styles.signUp}>Inscription</Button>
      </Link>
    </div>
  );
}

export default Payment;
