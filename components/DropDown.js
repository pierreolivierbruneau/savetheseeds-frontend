import { useState } from "react";
import styles from "../styles/DropDown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.icon} onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faUser} fontSize={30} />
      </div>
      {isOpen && <ul>{/* <li>Mon profil</li> */}</ul>}
    </div>
  );
};

export default DropDown;
