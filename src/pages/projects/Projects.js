import styles from "./Projects.module.css";
import { projects } from "./projectsData";

import { useState } from "react";

function Projects() {
  const [filter, setFilter] = useState("todos");

  const filteredProjects = projects.filter((project) => {
    if (filter === "todos") return true;
    return project.category.toLowerCase() === filter.toLowerCase();
  });

  return (
    <section id="projects" className={styles.projectsContainer}>
      <div className={styles.projectsHeader}>
        <h1 className={styles.projectsTitle}>projetos</h1>
        <div className={styles.tagsGroup}>
          <p
            onClick={() => setFilter("todos")}
            className={filter === "todos" ? styles.activeTag : ""}
          >
            todos
          </p>
          <p
            onClick={() => setFilter("ux/ui")}
            className={filter === "ux/ui" ? styles.activeTag : ""}
          >
            ux/ui
          </p>
          <p
            onClick={() => setFilter("social-media")}
            className={filter === "social-media" ? styles.activeTag : ""}
          >
            social media
          </p>
          <p
            onClick={() => setFilter("graficos")}
            className={filter === "graficos" ? styles.activeTag : ""}
          >
            gráficos
          </p>
          <p
            onClick={() => setFilter("logos")}
            className={filter === "logos" ? styles.activeTag : ""}
          >
            logos
          </p>
        </div>
      </div>

      <div className={styles.projectsBoxesGroup}>
        {filteredProjects.map((project) => (
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
    </section>
  );
}

export default Projects;
