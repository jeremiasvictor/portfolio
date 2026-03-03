import styles from "./AboutAndTecnologies.module.css";

function AboutandTecnologies() {
  return (
    <section
      id="aboutandtecnologies"
      className={styles.aboutAndTecnologiesContainer}
    >
      <div className={styles.aboutGroup}>
        <h1 className={styles.aboutTitle}>sobre mim</h1>
        <div className={styles.aboutTextGroup}>
          <p>
            Meu nome é Jeremias Santos, sou designer gráfico e estudante de
            Ciência da Computação, com interesse em UX/UI. Gosto de transitar
            entre essas áreas porque acredito que a sensibilidade visual e a
            lógica técnica se complementam na criação de soluções que realmente
            funcionam.
          </p>
          <p>
            Estou sempre em busca de aprender algo novo e de projetos que me
            tirem da zona de conforto, me ajudando a evoluir um pixel de cada
            vez.
          </p>
        </div>
      </div>
      <div className={styles.tecnologiesGroup}>
        <h1 className={styles.tecnologiesTitle}>tecnologias</h1>
        <div className={styles.TagsGroup}>
          <p>photoshop</p>
          <p>illustrator</p>
          <p>figma</p>
          <p>canva</p>
          <p>css</p>
          <p>html</p>
          <p>javascript</p>
          <p>angular</p>
          <p>react</p>
          <p>git</p>
          <p>github</p>
        </div>
      </div>
    </section>
  );
}

export default AboutandTecnologies;
