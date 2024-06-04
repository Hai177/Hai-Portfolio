import "./App.css";
import Home from "./pages/Home";
import Aside from "./layout/Header/Aside";
import Header from "./layout/Header/Header";
import { useEffect } from "react";
import Lenis from "lenis";
import About from "./pages/About";
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
    <div
      className="  flex flex-col items-center w-full  overflow-hidden"
      // style={{
      //   background:
      //     "linear-gradient(180deg, rgba(238,238,238,1) 85%, rgba(255,152,162,0.1966036414565826) 100%)",
      // }}
    >
      <div
        className="fixed w-full h-[100vh] top-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(238,238,238,1) 85%, rgba(255,152,162,0.1966036414565826) 100%)",
        }}
      ></div>
      {/* <Header /> */}
      {/* <Aside /> */}
      <Nav />
      <About />
      <Home />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
