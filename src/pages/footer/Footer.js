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

      <div className={styles.footerFollowMe}>
        <p className={styles.footerFollowMeTitle}>onde me encontrar</p>
        <div className={styles.footerFollowMeItem}>
          <div className={styles.footerFollowMeItemIcon}>
            <RiInstagramFill />
          </div>
          <p>@jvictdesign</p>
        </div>

        <div className={styles.footerFollowMeItem}>
          <div className={styles.footerFollowMeItemIcon}>
            <RiBehanceFill />
          </div>
          <p>@jvictdesign</p>
        </div>

        <div className={styles.footerFollowMeItem}>
          <div className={styles.footerFollowMeItemIcon}>
            <RiLinkedinBoxFill />
          </div>
          <p>Jeremias Marinho</p>
        </div>

        <div className={styles.footerFollowMeItem}>
          <div className={styles.footerFollowMeItemIcon}>
            <RiGithubFill />
          </div>
          <p>jeremiasvictor</p>
        </div>
      </div>

      <a href="#home" className={styles.footerBackButton}>
        <TbArrowUp strokeWidth={3} size={24} />
      </a>
    </section>
  );
}

export default Footer;
