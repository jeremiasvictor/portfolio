import styles from "./Footer.module.css";
import { TbArrowUp } from "react-icons/tb";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLogo}>
        <p>jeremias marinho</p>
      </div>

      <div className={styles.footerContact}>
        <p className={styles.footerContactTitle}>contact</p>
        <p className={styles.footerContactItem}>99 99999-9999</p>
        <p className={styles.footerContactItem}>jeremias@email.com</p>
        <p className={styles.footerContactItem}>jeremias@email.com</p>
      </div>

      <div className={styles.footerFollowMe}>
        <p className={styles.footerFollowMeTitle}>contact</p>
        <div className={styles.footerFollowMeItem}>
          <div className={styles.footerFollowMeItemIcon}></div>
          <p>@jeremiasmarinho</p>
        </div>

        <div className={styles.footerFollowMeItem}>
          <div className={styles.footerFollowMeItemIcon}></div>
          <p>@jeremiasmarinho</p>
        </div>

        <div className={styles.footerFollowMeItem}>
          <div className={styles.footerFollowMeItemIcon}></div>
          <p>@jeremiasmarinho</p>
        </div>
      </div>

      <div className={styles.footerBackButton}>
        <TbArrowUp strokeWidth={3} size={24} />
      </div>
    </div>
  );
}

export default Footer;
