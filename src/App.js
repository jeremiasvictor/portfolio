import styles from "./App.module.css";

import Home from "./pages/home/Home";
import AboutAndTechnologies from "./pages/aboutAndTechnologies/AboutAndTechnologies";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div className={styles.mainWrapper}>
      <Home />
      <AboutAndTechnologies />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
