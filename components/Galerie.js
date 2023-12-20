import styles from "../styles/Galerie.module.css";

function Galerie() {
  return (
    <div>
      <div className={styles.title}>
        Galerie photos
        <div>
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
        </div>
      </div>
      <div className={styles.fruitContainer}>
        <div className={styles.fruits}> Des Fruits</div>

        <div className={styles.image}>
          <div>
            <img
              src="https://res.cloudinary.com/dt30jr39q/image/upload/v1702457953/nwnqxepuidjyrhz3sist.jpg"
              width="150px"
              height="120px"
              className={styles.pic}
            ></img>
            <div>Des Poires</div>
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/dt30jr39q/image/upload/v1702457953/nwnqxepuidjyrhz3sist.jpg"
              width="150px"
              height="120px"
              className={styles.pic}
            ></img>
            <div>Clementines</div>
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/dt30jr39q/image/upload/v1702457954/bajpujins2huzyqwonxo.png"
              width="150px"
              height="120px"
              className={styles.pic}
            ></img>
            <div>Des Prunes</div>
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/dt30jr39q/image/upload/v1702457575/dhkcwrexjsudiimrolc8.webp"
              width="150px"
              height="120px"
              className={styles.pic}
            ></img>
            <div>Des Mangues</div>
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/dt30jr39q/image/upload/v1702457954/melro1smzirmajeti82w.jpg"
              width="150px"
              height="120px"
              className={styles.pic}
            ></img>
            <div>Des Pommes Rouges</div>
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/dt30jr39q/image/upload/v1702457967/xhubnkghe7wr70vfx04u.jpg"
              width="150px"
              height="120px"
              className={styles.pic}
            ></img>
            <div>Des Pommes Verts</div>
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/dt30jr39q/image/upload/v1702309751/avocatier_nweuqk.jpg"
              width="150px"
              height="120px"
              className={styles.pic}
            ></img>
            <div>Des Avocats</div>
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/dt30jr39q/image/upload/v1702457560/bxuytglonvvtgci4e8mg.webp"
              width="150px"
              height="120px"
              className={styles.pic}
            ></img>
            <div>Des Abricots</div>
          </div>
        </div>
      </div>

      <div className={styles.fruitContainer2}>
        <div className={styles.image}>
          <div>
            <img
              src="https://res.cloudinary.com/dt30jr39q/image/upload/v1702465835/afn2mhe3phmzvgtdgaig.webp"
              width="150px"
              height="120px"
              className={styles.pic}
            ></img>
            <div>Des Grenades</div>
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/dt30jr39q/image/upload/v1702466314/b7ze7jyiqqqftzhmj0nd.jpg"
              width="150px"
              height="120px"
              className={styles.pic}
            ></img>
            <div>Citron verts</div>
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/dt30jr39q/image/upload/v1702466127/nj7pmv7lupeqs2ycmfbj.webp"
              width="150px"
              height="120px"
              className={styles.pic}
            ></img>
            <div>Citrons</div>
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/dt30jr39q/image/upload/v1702466863/lulwabjafvxl6xlsxrd4.jpg"
              width="150px"
              height="120px"
              className={styles.pic}
            ></img>
            <div>Oranges</div>
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/dt30jr39q/image/upload/v1702466451/kz3zy5e8dpzxezrwxax3.jpg"
              width="150px"
              height="120px"
              className={styles.pic}
            ></img>
            <div>Necterines</div>
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/dt30jr39q/image/upload/v1702466698/cexo624jltajwnirxmhu.jpg"
              width="150px"
              height="120px"
              className={styles.pic}
            ></img>
            <div>Cerises</div>
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/dt30jr39q/image/upload/v1702466561/pjmqhrykkktzn2neienw.jpg"
              width="150px"
              height="120px"
              className={styles.pic}
            ></img>
            <div>Les Pêches</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Galerie;
