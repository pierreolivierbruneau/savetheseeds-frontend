import styles from "../styles/Payment.module.css";
import { Button } from 'antd';
import { useState } from "react";

function Payment() {

    const [selectedOption, setSelectedOption] = useState(false);

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
        <Button className={styles.payment}>Payer</Button>
        <Button className={styles.paypal}>Paypal</Button>
        <Button className={styles.signUp}>Sign Up</Button>
      </div>
    );
   }
   
   export default Payment;