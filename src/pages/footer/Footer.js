import styles from "./Footer.module.css";
import { TbArrowUp } from "react-icons/tb";
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiBehanceFill,
} from "react-icons/ri";

function Footer() {
  return (
    <section id="footer" className={styles.footerContainer}>
      <div className={styles.footerLogo}>
        <p>jeremias marinho</p>
      </div>

      <div className={styles.footerContact}>
        <p className={styles.footerContactTitle}>contato</p>
        <p className={styles.footerContactItem}>(77) 99134-4077</p>
        <p className={styles.footerContactItem}>jeremiasmarinho05@gmail.com</p>
      </div>

      <div className={styles.footerFindMe}>
        <p className={styles.footerFindMeTitle}>onde me encontrar</p>
        <div className={styles.footerFindMeItemsGroup}>
          <a
            className={styles.footerFindMeItem}
            href="https://www.instagram.com/jvictdesign/"
          >
            <div className={styles.footerFindMeItemIcon}>
              <RiInstagramFill />
            </div>
            <p>@jvictdesign</p>
          </a>

          <a
            className={styles.footerFindMeItem}
            href="https://www.behance.net/jvictdesign"
          >
            <div className={styles.footerFindMeItemIcon}>
              <RiBehanceFill />
            </div>
            <p>@jvictdesign</p>
          </a>

          <a
            className={styles.footerFindMeItem}
            href="https://www.linkedin.com/in/jeremias-marinho-aa2b89379/"
          >
            <div className={styles.footerFindMeItemIcon}>
              <RiLinkedinBoxFill />
            </div>
            <p>Jeremias Marinho</p>
          </a>

          <a
            className={styles.footerFindMeItem}
            href="https://github.com/jeremiasvictor"
          >
            <div className={styles.footerFindMeItemIcon}>
              <RiGithubFill />
            </div>
            <p>jeremiasvictor</p>
          </a>
        </div>
      </div>

      <a href="#home" className={styles.footerBackButton}>
        <TbArrowUp strokeWidth={3} size={24} />
      </a>
    </section>
  );
}

export default Footer;
