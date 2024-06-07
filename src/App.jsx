import "./App.css";
import About from "./pages/About";
import { useEffect } from "react";
import Lenis from "lenis";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Nav from "./layout/Header/Nav";
import OverLay from "./components/OverLay";
import Contact from "./pages/Contact";

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
    <div className=" flex flex-col items-center w-full overflow-hidden relative">
      <OverLay />
      <Nav />
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
