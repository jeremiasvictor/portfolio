import styles from "./Contact.module.css";
import { TbArrowUp } from "react-icons/tb";
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiBehanceFill,
} from "react-icons/ri";

function Contact() {
  return (
    <section id="contact" className={styles.contactContainer}>
      <div className={styles.contactHeader}>
        <h1 className={styles.contactTitle}>entre em contato</h1>
        <div className={styles.contactInfo}>
          <p className={styles.contactSubtitle}>jeremiasmarinho05@gmail.com</p>
          <p className={styles.contactSubtitle}>(77) 99134-4077</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.socialIcons}>
          <a
            href="https://www.instagram.com/jvictdesign/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <RiInstagramFill />
          </a>
          <a
            href="https://www.behance.net/jvictdesign"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <RiBehanceFill />
          </a>
          <a
            href="https://www.linkedin.com/in/jeremias-marinho-aa2b89379/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <RiLinkedinBoxFill />
          </a>
          <a
            href="https://github.com/jeremiasvictor"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <RiGithubFill />
          </a>
        </div>
        <a href="#home" className={styles.backButton}>
          <TbArrowUp strokeWidth={3} size={26} />
        </a>
      </div>
    </section>
  );
}

export default Contact;
