import { useState } from "react";
import styles from "../styles/DropDown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import Link from "next/link";

//si l utilisateur est connecté donc à un token il a acces au profil sinon non
const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { token } = useSelector((state) => state.user.value);

  if (!token) {
    //si le token n'est pas présent , ne rien afficher
    return null;
  }
  return (
    <div>
      <div
        className={`${styles.icon} ${styles.dropDown}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={faUser} />
        <Link href="/profils">
          <a style={{ textDecoration: 'none', color: "black" }}>Profils</a>
        </Link>
      </div>
      {isOpen && (
        <ul>
          <li>Mon profil</li>
          {/* <li>Déconnexion</li> */};
        </ul>
      )}
    </div>
  );
};

export default DropDown;
