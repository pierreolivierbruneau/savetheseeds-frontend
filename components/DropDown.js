import { useState } from "react";
import styles from "../styles/DropDown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className={styles.icon} onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faUser} />
      </div>
      {isOpen && (
        <ul>
          <li>Mon profil</li>
          <li>Déconnexion</li>
        </ul>
      )}
    </div>
  );
};

export default DropDown;
