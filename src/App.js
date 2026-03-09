import React from "react";
import styles from "./App.module.css";

import Home from "./pages/home/Home";
import AboutAndTecnologies from "./pages/aboutAndTecnologies/AboutAndTecnologies";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div className={styles.mainWrapper}>
      <Home />
      <AboutAndTecnologies />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
