import "./App.css";
import About from "./pages/About";
import { useEffect } from "react";
import Lenis from "lenis";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Nav from "./layout/Header/Nav";

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="  flex flex-col items-center w-full  overflow-hidden">
      <div className="fixed w-full h-[100vh] top-0"></div>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
