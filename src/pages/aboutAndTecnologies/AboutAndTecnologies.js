import styles from "./AboutAndTecnologies.module.css";

function About() {
  return (
    <div className={styles.aboutAndTecnologiesContainer}>
      <div className={styles.aboutGroup}>
        <h1 className={styles.aboutTitle}>sobre mim</h1>
        <div className={styles.aboutTextGroup}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            sem augue. Cras vitae mauris sapien. Praesent cursus leo sit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
            sit amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            sem augue. Cras vitae mauris sapien. Praesent cursus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            sem augue. Cras vitae mauris sapien. Praesent cursus leo sit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
            sit amet.
          </p>
        </div>
      </div>
      <div className={styles.tecnologiesGroup}>
        <h1 className={styles.tecnologiesTitle}>tecnologias</h1>
        <div className={styles.tecnologiesTagsGroups}>
          <div className={styles.graphicDesignTags}>
            <p>photoshop</p>
            <p>figma</p>
            <p>canva</p>
            <p>photoshop</p>
            <p>illustrator</p>
            <p>canva</p>
          </div>
          <div className={styles.codingTags}>
            <p>css</p>
            <p>javascript</p>
            <p>angular</p>
            <p>typescript</p>
            <p>react</p>
            <p>html</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
