import styles from "./AboutAndTecnologies.module.css";

import {
  DiPhotoshop,
  DiIllustrator,
  DiCss3,
  DiHtml5,
  DiPython,
} from "react-icons/di";
import { SiCanva, SiJavascript, SiGit, SiFigma } from "react-icons/si";
import { RiReactjsLine, RiAngularjsFill, RiGithubFill } from "react-icons/ri";

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
        <div className={styles.iconsGroup}>
          <DiPhotoshop size={50} />
          <DiIllustrator size={50} />
          <SiFigma size={40} />
          <SiCanva size={40} />
          <DiCss3 size={50} />
          <DiHtml5 size={50} />
          <SiJavascript size={30} />
          <RiAngularjsFill size={40} />
          <RiReactjsLine size={38} />
          <SiGit size={32} />
          <RiGithubFill size={38} />
          <DiPython size={40} />
        </div>
      </div>
    </section>
  );
}

export default AboutandTecnologies;
