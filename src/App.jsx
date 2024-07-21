import "./App.css";
import About from "./pages/About";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Nav from "./layout/Header/Nav";
import OverLay from "./components/OverLay";
import Contact from "./pages/Contact";
import PreLoader from "./pages/PreLoader";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    document.body.style.cursor = "none";

    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "";
    }, 2500);
  }, [isLoading]);
  return (
    <div className=" flex flex-col items-center w-full overflow-hidden relative">
      <OverLay />
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence>
      {!isLoading && (
        <>
          {" "}
          <Nav />
          <Home />
          <About />
          <Project />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
