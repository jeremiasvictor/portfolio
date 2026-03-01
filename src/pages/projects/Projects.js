import styles from "./Projects.module.css";
import { projects } from "./projectsData";
import { TbMaximize } from "react-icons/tb";

function Projects() {
  return (
    <section id="projects" className={styles.projectsContainer}>
      <div className={styles.projectsHeader}>
        <h1 className={styles.projectsTitle}>projetos</h1>
        <div className={styles.tagsGroup}>
          <p>todos</p>
          <p>ux/ui</p>
          <p>social media</p>
          <p>gráficos</p>
        </div>
      </div>

      <div className={styles.projectsBoxesGroup}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectBox}>
            <h1 className={styles.projectBoxTitle}>{project.title}</h1>
            <p className={styles.projectBoxDescription}>
              {project.description}
            </p>
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectBoxImage}
            />
            <a href={project.link} className={styles.projectBoxButton}>
              Saiba mais
            </a>
          </div>
        ))}
      </div>

      {/* <div className={styles.projectsBoxesGroup}>
        <div className={styles.projectBox}>
          <div className={styles.projectBoxHeader}>
            <h1 className={styles.projectBoxTitle}>GestUp</h1>
            <div className={styles.projectBoxIcon}>
              <TbMaximize strokeWidth={3} size={24} />
            </div>
          </div>
          <p className={styles.projectBoxDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            sem augue. Cras vitae mauris sapien. Praesent cursus leo sit.
          </p>
          <img src="/kurapika.jpg" className={styles.projectBoxImage}></img>
        </div>

        <div className={styles.projectBox}>
          <div className={styles.projectBoxHeader}>
            <h1 className={styles.projectBoxTitle}>project name</h1>
            <div className={styles.projectBoxIcon}>
              <TbMaximize strokeWidth={3} size={24} />
            </div>
          </div>
          <p className={styles.projectBoxDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            sem augue. Cras vitae mauris sapien. Praesent cursus leo sit.
          </p>
          <img src="/kurapika.jpg" className={styles.projectBoxImage}></img>
        </div>

        <div className={styles.projectBox}>
          <div className={styles.projectBoxHeader}>
            <h1 className={styles.projectBoxTitle}>project name</h1>
            <div className={styles.projectBoxIcon}>
              <TbMaximize strokeWidth={3} size={24} />
            </div>
          </div>
          <p className={styles.projectBoxDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            sem augue. Cras vitae mauris sapien. Praesent cursus leo sit.
          </p>
          <img src="/kurapika.jpg" className={styles.projectBoxImage}></img>
        </div>

        <div className={styles.projectBox}>
          <div className={styles.projectBoxHeader}>
            <h1 className={styles.projectBoxTitle}>project name</h1>
            <div className={styles.projectBoxIcon}>
              <TbMaximize strokeWidth={3} size={24} />
            </div>
          </div>
          <p className={styles.projectBoxDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            sem augue. Cras vitae mauris sapien. Praesent cursus leo sit.
          </p>
          <img src="/kurapika.jpg" className={styles.projectBoxImage}></img>
        </div>
      </div> */}
    </section>
  );
}

export default Projects;
