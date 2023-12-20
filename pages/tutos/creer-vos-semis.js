import styles from "../../styles/Tutos.module.css";
function CreerVosSemis() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.containerTitle}>
          <h3 className={styles.title}>Créer Vos Semis</h3>
        </div>

        <div className={styles.containerSousTitle}>
          <div className={styles.section}>
            <div className={styles.textSection}>
              <h4 className={styles.sousTitle}>
                Comment récupérer des graines
              </h4>
              <p className={styles.paragraph}>
                <p style={{ textIndent: 30 }}>
                  Les graines de fruits se trouvent enfermées dans une coque ou
                  une enveloppe.
                </p>
                <p>
                  Elles peuvent être récupérées pour être replantées et produire
                  de nouveaux fruits.
                </p>
                <p>
                  La récupération des graines de fruits est un excellent moyen
                  d'économiser de l'argent et de réduire votre impact
                  environnemental.
                </p>
                <p>
                  Elle vous permet également de choisir les variétés de fruits
                  que vous souhaitez cultiver.
                </p>

                <p className={styles.materiel}>Matériel nécessaire :</p>
                <ul className={styles.List}>
                  <li>Sac en papier,</li>
                  <li>Boîte de conservation,</li>
                  <li>Ciseaux ou couteau</li>
                </ul>
                <p>
                  <p style={{ fontWeight: "bold" }}> Choisissez les fruits</p>{" "}
                  dont vous souhaitez récupérer les graines. Veillez à choisir
                  des fruits qui sont bien mûrs.
                </p>
                <p>
                  Les graines doivent être sèches et prêtes à tomber du fruit.
                </p>
              </p>
            </div>
            <img src="/recuper.jpg" className={styles.imageStyle} />
          </div>

          <div className={styles.section}>
            <div className={styles.textSection}>
              <h4 className={styles.sousTitle}>Préparer les graines</h4>
              <p className={styles.paragraph}>
                <p style={{ textIndent: 30 }}>
                  La méthode de récolte des graines dépend du type de fruit.
                </p>
                <p>
                  Pour les fruits à coques, comme les noix, les amandes ou les
                  pistaches, il suffit de casser la coque pour récupérer les
                  grianes.
                </p>
                <p>
                  Pour les fruits à enveloppe, comme les cerises, les abricots
                  ou les pêches, il suffit d'ouvrir le fruit pour retirer les
                  graines.
                </p>{" "}
                <p>
                  {" "}
                  <p style={{ fontWeight: "bold" }}>Trier les graines.</p> Une
                  fois que les grianes sont sèches, il est important de les
                  trier pour enlever les impuretés, comme les brindilles ou les
                  petits insectes.
                </p>
                <p>
                  <p style={{ fontWeight: "bold" }}></p>Conserver les graines.
                </p>{" "}
                Les graines doivent être conservées dans un endroit frais et
                sec, à l'abri de la lumière. Vous pouvez les conserver dans un
                sac en papier ou dans une boîte de conservation.
              </p>{" "}
            </div>
            <img src="/preparer.jpg" className={styles.imageStyle} />
          </div>

          <div className={styles.section}>
            <div className={styles.textSection}>
              <h4 className={styles.sousTitle}>Faire germer les graines</h4>
              <p className={styles.paragraph}>
                <p>Conseils Pour améliorer la germination </p>
                <p> des graines, il est recommandé de les stratifier.</p>
                <p style={{ fontWeight: "bold" }}> La stratification</p>
                <p>
                  Consiste à exposer les graines à un froid humide pendant une
                  période donnée.
                </p>{" "}
                <p>
                  Si vous ne prévoyez pas de planter les graines immédiatement,
                  vous pouvez les conserver au congélateur. Cela permettra de
                  prolonger leur durée de conservation.
                </p>{" "}
                <p style={{ fontWeight: "bold" }}> Conclusion </p>
                <p>
                  Récupérer des graines de fruits est un processus simple et
                  gratifiant.
                </p>
                <p>
                  En suivant ces quelques conseils, vous réussirez à récolter
                  des graines de qualité qui vous permettront de cultiver de
                  beaux fruits
                  <p style={{ fontWeight: "bold" }}>
                    Voici quelques exemples de fruits qui produisent des graines
                    :
                  </p>
                  <ul className={styles.List}>
                    <li>
                      {" "}
                      Fruits à coques : noix, amandes, pistaches, noisettes,
                      cacahuètes, noix de cajou, etc.
                    </li>
                    <li>
                      Fruits à enveloppe : cerises, abricots, pêches, prunes,
                      mirabelles, figues, etc.
                    </li>
                    <li>
                      Fruits à pépins : pommes, poires, prunes, framboises,
                      fraises, etc.
                    </li>
                    <li>
                      Fruits à baies : myrtilles, framboises, fraises,
                      groseilles, cassis, etc.
                    </li>
                  </ul>
                </p>
              </p>
            </div>
            <img src="/germer.jpg" className={styles.imageStyle} />
          </div>

          <div className={styles.section}>
            <div className={styles.textSection}>
              <h4 className={styles.sousTitle}>Planter dans la nature</h4>
              <p className={styles.paragraph}>
                <p>
                  {" "}
                  <p style={{ fontWeight: "bold" }}>
                    Pour planter des graines de fruits
                  </p>{" "}
                  Il suffit de les mettre en terre à la profondeur d'environ 2
                  cm.
                </p>
                <p>
                  Gardez le sol humide et attendez que les graines germent. La
                  germination des graines de fruits peut prendre quelques
                  semaines ou quelques mois, selon le type de fruit :
                </p>
                <ol className="Conseils pour la plantation des graines de fruits">
                  <li>
                    Choisissez un endroit ensoleillé et bien drainé pour planter
                    vos graines.
                  </li>
                  <li>
                    Arrosez régulièrement vos plants, surtout pendant les
                    premières semaines après la plantation.{" "}
                  </li>
                </ol>
                Résultats Avec un peu de patience et de soins, vous pourrez
                cultiver de beaux fruits à partir de vos propres graines.
              </p>
            </div>
            <img src="/planter.jpg" className={styles.imageStyle} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default CreerVosSemis;
