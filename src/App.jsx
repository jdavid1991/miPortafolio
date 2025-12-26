import { useEffect } from "react";

import { Header } from "./components/Header";
import { Experiencia } from "./components/Experiencia";
import { Academico } from "./components/Academico";
import { Tecnologias } from "./components/Tecnologias";
import { Footer } from "./components/Footer";

function App() {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Header />
      <Experiencia />
      <Academico />
      <Tecnologias />
      <Footer />
    </>
  );
}

export default App;
