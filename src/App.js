import React from "react";
import styles from "./App.module.css";
import { MdArrowDropDown, MdBrightness2, MdBrightness5 } from "react-icons/md";

function App() {
  return (
    <>
      <div className={styles.headerTextGroup}>
        <p>jeremias marinho | 2026</p>
        <p>hope you enjoy it</p>
      </div>
      <h1 className={styles.title}>portfólio.</h1>

      <div className={styles.tagGroup}>
        <p className={styles.tag}>UI design</p>
        <p className={styles.tag}>design gráfico</p>
        <p className={styles.tag}>social media</p>
        <p className={styles.tag}>identidades visuais</p>
      </div>

      <div className={styles.homeButtonsGroup}>
        <div className={styles.homeButton}>
          idioma <MdArrowDropDown />
        </div>
        <div className={styles.homeButton}>
          <MdBrightness5 />
        </div>
      </div>
    </>
  );
}

export default App;
