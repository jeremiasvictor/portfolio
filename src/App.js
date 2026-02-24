import React from "react";
import styles from "./App.module.css";

import Home from "./pages/home/Home";
import AboutAndTecnologies from "./pages/aboutAndTecnologies/AboutAndTecnologies";
import Projects from "./pages/projects/Projects";

function App() {
  return (
    <>
      <Home />;
      <AboutAndTecnologies />
      <Projects />
    </>
  );
}

export default App;
