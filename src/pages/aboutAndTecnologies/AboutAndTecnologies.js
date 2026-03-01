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
            Para mim, design não é só "deixar bonito" e computação não é só
            "fazer funcionar", o que me fascina é o desafio de unir as duas
            coisas em cada projeto.
          </p>
          <p>
            Estou sempre em busca de aprender algo novo e de projetos que me
            tirem da zona de conforto, me ajudando a evoluir um pixel de cada
            vez.
          </p>
        </div>
      </div>
      <div className={styles.tecnologiesGroup}>
        <h1 className={styles.tecnologiesTitle}>tecnologias e habilidades</h1>
        <div className={styles.tecnologiesTagsGroups}>
          <div className={styles.TagsGroup}>
            <p>photoshop</p>
            <p>illustrator</p>
            <p>figma</p>
            <p>canva</p>
          </div>
          <div className={styles.TagsGroup}>
            <p>css</p>
            <p>html</p>
            <p>javascript</p>
            <p>angular</p>
            <p>typescript</p>
            <p>react</p>
            <p>git</p>
            <p>github</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutandTecnologies;
