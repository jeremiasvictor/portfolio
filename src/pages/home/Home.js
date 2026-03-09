import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <section id="home" className={styles.homeContainer}>
      <div className={styles.header}>
        <img className={styles.headerLogo} src="./logo-minha.png" alt="logo" />
        <nav className={styles.headerNav}>
          <a href="#aboutandtecnologies">sobre mim</a>
          <a href="#projects">projetos</a>
          <a href="#contact">contato</a>
        </nav>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.titleGroup}>
          <p className={styles.titleTag}>design gráfico • web design</p>
          <h1 className={styles.title}>portfólio</h1>
        </div>
      </div>

      <p className={styles.description}>
        Designer gráfico em formação e entusiasta de UI/UX. Este é o meu espaço
        para documentar minha evolução, meus projetos de estudo e tudo o que
        venho aprendendo.
      </p>

      <div className={styles.buttonsGroup}>
        <a href="#projects" className={styles.primaryButton}>
          veja meus trabalhos
        </a>
        <a href="#contact" className={styles.secondaryButton}>
          entre em contato
        </a>
      </div>
    </section>
  );
}

export default Home;
