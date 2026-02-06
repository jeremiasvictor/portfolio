import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <div className={styles.headerGroup}>
        <p className={styles.headerLogo}>jeremias marinho</p>
        <div className={styles.headerNav}>
          <p>home</p>
          <p>sobre mim</p>
          <p>projetos</p>
          <p>contato</p>
        </div>
      </div>

      <div className={styles.titleContainer}>
        <div className={styles.titleGroup}>
          <p className={styles.titleTag}>design gráfico</p>
          <h1 className={styles.title}>portfólio.</h1>
        </div>
      </div>

      <div className={styles.description}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
          sem augue. Cras vitae mauris sapien. Praesent cursus leo sit. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. auris sapien.
        </p>
      </div>

      <div className={styles.homeButtonsGroup}>
        <div className={styles.worksButton}>
          <p>veja meus trabalhos</p>
        </div>
        <div className={styles.contactButton}>
          <p>entre em contato</p>
        </div>
      </div>
    </>
  );
}

export default Home;
