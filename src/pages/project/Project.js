import styles from "./Project.module.css";
import { CiSquarePlus } from "react-icons/ci";

function Project() {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectImage}>
        <img src="/kurapika.jpg"></img>
      </div>

      <div className={styles.projectInfo}>
        <h1 className={styles.projectTitle}>project name</h1>
        <div className={styles.projectTagsGroup}>
          <p className={styles.projectTag}>branding</p>
          <p className={styles.projectTag}>social media</p>
          <p className={styles.projectTag}>ux/ui</p>
        </div>
        <p className={styles.projectDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
          sem augue. Cras vitae mauris sapien. Praesent cursus leo sit. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Quisque ac sem augue. Cras
          vitae mauris sapien. Praesent cursus leo sit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
        <div className={styles.discoverButton}>
          <p className={styles.discoverButtonText}>discover more</p>
          <CiSquarePlus className={styles.discoverButtonIcon} />
        </div>
      </div>
    </div>
  );
}

export default Project;
