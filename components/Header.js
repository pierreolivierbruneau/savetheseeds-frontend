import styles from "../styles/Header.module.css";
import Modale from "./Modal";
import React, { useState } from "react";

import Link from "next/link";

import DropDown from "./DropDown";

function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.mainContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="150"
          width="150"
          viewBox="0 0 512 512"
          className={styles.seedling}
        >
          <path
            fill="#224229"
            d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0h32c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64H64c123.7 0 224 100.3 224 224v32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320C100.3 320 0 219.7 0 96z"
          />
        </svg>

        <div>
          <div className={styles.title}>Save the Seeds</div>
          <div className={styles.navbar}>
            <Link href="/">
              <span className={styles.accueil}>Accueil</span>
            </Link>
            <Link href="/maps">
              <span className={styles.accueil}>Geolocalisation</span>
            </Link>
            <Link href="/forum">
              <span className={styles.accueil}>Forum</span>
            </Link>
            <Link href="/galerie">
              <span className={styles.accueil}>Galerie Photos</span>
            </Link>
            <Link href="/tutos">
              <span className={styles.accueil}>Tutos</span>
            </Link>
            <button className={styles.accueil}>Dons</button>
            <Link href="/about">
              <span className={styles.accueil}>About US</span>
            </Link>
          </div>
        </div>

        <div className={styles.buttons}>
          {/* <p><button className={styles.inscription}>Inscription</button></p> */}
          <Modale />
          <DropDown />
          <Link href="/profils">
            <a>Profils</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
