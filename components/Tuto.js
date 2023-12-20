import styles from "../styles/Cards.module.css";
import TutoCard from "./TutoCard";

function Tuto() {
  return (
    <div className={styles.cardContainer}>
      <TutoCard
        sousTitle="Planter au printemps"
        desc="  Le printemps est la saison idéale pour planter la plupart des
        fruits et légumes. Les températures commencent à augmenter et
        les jours sont plus longs, ce qui est propice à la germination
        et à la croissance des plantes."
        img="/printemps.jpg"
        pagename="planter-au-printemps"
      />
      <TutoCard
        sousTitle="Panter en été"
        desc=" L'été est une saison chaude et ensoleillée, idéale pour la
        croissance des plantes. Cependant, il est important de veiller
        à ce que les plantes aient suffisamment d'eau, car le sol peut
        se dessécher rapidement."
        img="/été.jpg"
        pagename="planter-en-ete"
      />
      <TutoCard
        sousTitle="Planter à l'automne"
        desc=" L'automne est une saison idéale pour planter des arbres
        fruitiers et des arbustes fruitiers. Les températures
        commencent à baisser, ce qui permet aux plantes de développer
        un système racinaire solide avant l'hiver."
        img="/automne.jpg"
        pagename="planter-en-automne"
      />
      <TutoCard
        sousTitle="Panter en hiver"
        desc=" L'hiver est une saison difficile pour la culture des fruits et
        légumes. Les températures sont basses et les jours sont
        courts, ce qui peut ralentir la croissance des plantes.
        Cependant, il est possible de cultiver certaines plantes en
        hiver, notamment sous abri."
        img="/hiver.jpg"
        pagename="planter-en-hiver"
      />

      <TutoCard
        sousTitle="Créer vos semis"
        desc="Les graines de fruits se trouvent enfermées dans une coque ou
        une enveloppe.
        Elles peuvent être récupérées pour être replantées et produire
        de nouveaux fruits.
        La récupération des graines de fruits est un excellent moyen
        d'économiser de l'argent et de réduire votre impact
        environnemental."
        img="/hiver.jpg"
        pagename="creer-vos-semis"
      />
    </div>
  );
}

export default Tuto;
