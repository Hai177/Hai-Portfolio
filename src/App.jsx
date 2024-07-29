import "./App.css";
import About from "./pages/About";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import Home from "./pages/Home";
import Project from "./pages/Project";
import OverLay from "./components/OverLay";
import Contact from "./pages/Contact";
import PreLoader from "./pages/PreLoader";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const w = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <motion.div
      ref={ref}
      className="relative flex w-full flex-col items-center overflow-hidden"
    >
      <OverLay />
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence>
      {!isLoading && (
        <>
          {" "}
          <motion.div
            className="fixed left-0 top-0 z-[9999] h-[8px] bg-[#fb88a2]"
            style={{ width: w }}
          ></motion.div>
          <Home />
          <About />
          <Project />
          <Contact />
        </>
      )}
    </motion.div>
  );
}

export default App;
