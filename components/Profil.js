import styles from "../styles/Profil.module.css";

function Profil() {
  const handleClick = () => {
    console.log("Click detected")
};

  return (
    <div className={styles.mainContainer}>
      <div className={styles.fullContainer}>
        <h3 className={styles.title}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50"
            width="50"
            viewBox="0 0 512 512"
            className={styles.seedling}
          >
            <path
              fill="#224229"
              d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0h32c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64H64c123.7 0 224 100.3 224 224v32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320C100.3 320 0 219.7 0 96z"
            />
          </svg>
          Votre Profil
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50"
            width="50"
            viewBox="0 0 512 512"
            className={styles.seedling}
          >
            <path
              fill="#224229"
              d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0h32c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64H64c123.7 0 224 100.3 224 224v32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320C100.3 320 0 219.7 0 96z"
            />
          </svg>
        </h3>
        <div className={styles.vi}>
          <div>Votre impact: </div>
        </div>
        <div className={styles.impact}>
          <div className={styles.plants}>Plants: 10</div>
          <div className={styles.co2}>Co2 Absorbé: 500g</div>
        </div>
        <div className={styles.middleContainer}>
          <div className={styles.liste}>List des derniers semis : </div>
          <div className={styles.input}>
            <input type="text" placeholder="Semis..."></input>
            <img
              src="https://res.cloudinary.com/dt30jr39q/image/upload/v1702637124/slxtmmru1hmabbguowjf.avif"
              className={styles.plantbtn}
              onClick={() => handleClick()}
            ></img>
          </div>
        </div>

        <div className={styles.users}>
          <div>
            <div>User 1</div>
            <img
              src="https://res.cloudinary.com/dt30jr39q/image/upload/v1702466127/nj7pmv7lupeqs2ycmfbj.webp"
              className={styles.user}
            ></img>
          </div>

          <div>
            <div>User 2</div>
            <img
              src="https://res.cloudinary.com/dt30jr39q/image/upload/v1702466451/kz3zy5e8dpzxezrwxax3.jpg"
              className={styles.user}
            ></img>
          </div>

          <div>
            <div>User 3</div>
            <img
              src="https://res.cloudinary.com/dt30jr39q/image/upload/v1702466863/lulwabjafvxl6xlsxrd4.jpg"
              className={styles.user}
            ></img>
          </div>
          <div>
            <div>User 4</div>
            <img
              src="https://res.cloudinary.com/dt30jr39q/image/upload/v1702457967/xhubnkghe7wr70vfx04u.jpg"
              className={styles.user}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
