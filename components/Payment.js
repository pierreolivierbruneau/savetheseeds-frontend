import styles from "../styles/Payment.module.css";
import { Button, Modal } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import Link from 'next/link';

function Payment() {

    const [selectedOption, setSelectedOption] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    //Ouverture/fermeture Modal ''Merci''
    const openModal = () => {
      setIsOpen(true)
    }
    const closeModal = () => {
      setIsOpen(false)
    }

    const handleClick= () => {
        setSelectedOption(!selectedOption);
      };

    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Paiement</h2>
        <div className={styles.selectCard}>
        <input type="radio" checked={selectedOption} onClick={() => handleClick()}></input>
        <p> Paiement par carte</p>
        </div>
        <div className={styles.creditCard}>
            <div className={styles.numberCard}>
                <label>Numéro carte</label>
                <input type='text' className={styles.amount} placeholder="1234 1234 1234 1234"></input>
            </div>
            <div className={styles.informationsCard}>
                <div className={styles.expirationDate}>
                    <label>Date d'expiration</label>
                    <input type='text' className={styles.date} placeholder="MM/AA"></input>
                </div>
                <div className={styles.CVCNumber}>
                    <label>CVV/CVN</label>
                    <input type='text' className={styles.CVC} placeholder="CVC"></input>
                    </div>
                </div>
        </div>
        <Button className={styles.payment} onClick={() => openModal()}>Payer</Button>
        <Modal className={styles.modal} open={isOpen} onCancel={closeModal} footer ={null}> 
        <img src='arbre.jpg'/>
        <div className={styles.thanks}>
        <p>Merci !!!</p>
        <FontAwesomeIcon icon={faHeart} />
        </div>
        </Modal>
        <Button className={styles.paypal}>Paypal</Button>
        <Link href='/inscription'>
        <Button className={styles.signUp}>Inscription</Button>
        </Link>
      </div>
    );
   }
   
   export default Payment;