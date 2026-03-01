import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <section id="home" className={styles.homeContainer}>
      <div className={styles.headerGroup}>
        <p className={styles.headerLogo}>jeremias marinho</p>
        <div className={styles.headerNav}>
          <a href="#aboutandtecnologies">sobre mim</a>
          <a href="#projects">projetos</a>
          <a href="#footer">contato</a>
        </div>
      </div>

      <div className={styles.titleContainer}>
        <div className={styles.titleGroup}>
          {/* <p className={styles.titleTag}>meu</p> */}
          <h1 className={styles.title}>portfólio.</h1>
        </div>
      </div>

      <div className={styles.description}>
        <p>
          Designer gráfico em formação e entusiasta de UI/UX. Este é o meu
          espaço para documentar minha evolução, meus projetos de estudo e tudo
          o que venho aprendendo.
        </p>
      </div>

      <div className={styles.homeButtonsGroup}>
        <div className={styles.worksButton}>
          <a href="#projects">veja meus trabalhos</a>
        </div>
        <div className={styles.contactButton}>
          <a href="#footer">entre em contato</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
