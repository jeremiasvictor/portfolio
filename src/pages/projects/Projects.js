import styles from "./Projects.module.css";

function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.projectsHeader}>
        <h1 className={styles.projectsTitle}>projetos</h1>
        <div className={styles.tagsGroup}>
          <p>todos</p>
          <p>ux/ui</p>
          <p>social media</p>
          <p>gráficos</p>
        </div>
      </div>

      <div className={styles.projectsBoxesGroup}>
        <div className={styles.projectBox}>
          <div className={styles.projectBoxHeader}>
            <h1 className={styles.projectBoxTitle}>project name</h1>
            <div className={styles.projectBoxIcon}></div>
          </div>
          <p className={styles.projectBoxDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            sem augue. Cras vitae mauris sapien. Praesent cursus leo sit.
          </p>
          <img src="/kurapika.jpg" className={styles.projectBoxImage}></img>
        </div>

        <div className={styles.projectBox}>
          <div className={styles.projectBoxHeader}>
            <h1 className={styles.projectBoxTitle}>project name</h1>
            <div className={styles.projectBoxIcon}></div>
          </div>
          <p className={styles.projectBoxDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            sem augue. Cras vitae mauris sapien. Praesent cursus leo sit.
          </p>
          <img src="/kurapika.jpg" className={styles.projectBoxImage}></img>
        </div>

        <div className={styles.projectBox}>
          <div className={styles.projectBoxHeader}>
            <h1 className={styles.projectBoxTitle}>project name</h1>
            <div className={styles.projectBoxIcon}></div>
          </div>
          <p className={styles.projectBoxDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            sem augue. Cras vitae mauris sapien. Praesent cursus leo sit.
          </p>
          <img src="/kurapika.jpg" className={styles.projectBoxImage}></img>
        </div>

        <div className={styles.projectBox}>
          <div className={styles.projectBoxHeader}>
            <h1 className={styles.projectBoxTitle}>project name</h1>
            <div className={styles.projectBoxIcon}></div>
          </div>
          <p className={styles.projectBoxDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            sem augue. Cras vitae mauris sapien. Praesent cursus leo sit.
          </p>
          <img src="/kurapika.jpg" className={styles.projectBoxImage}></img>
        </div>
      </div>
    </div>
  );
}

export default Projects;
