import styles from "./Projects.module.css";
import { projects } from "./projectsData";
import { useState } from "react";

function Projects() {
  const [filter, setFilter] = useState("todos");

  const filteredProjects = projects.filter((project) => {
    if (filter === "todos") return true;
    return project.category.toLowerCase() === filter.toLowerCase();
  });

  const categories = ["todos", "ux/ui", "social-media", "graficos", "logos"];

  return (
    <section id="projects" className={styles.projectsContainer}>
      <div className={styles.projectsHeader}>
        <h1 className={styles.projectsTitle}>projetos</h1>
        <div className={styles.tagsGroup}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`${styles.tag} ${
                filter === category ? styles.activeTag : ""
              }`}
            >
              {category === "ux/ui"
                ? "ux/ui"
                : category === "social-media"
                  ? "social media"
                  : category}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.projectsBoxesGroup}>
        {filteredProjects.map((project) => (
          <div key={project.id} className={styles.projectBox}>
            <h2 className={styles.projectBoxTitle}>{project.title}</h2>
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
