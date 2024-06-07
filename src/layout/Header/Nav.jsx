import FlipButton from "../../components/FlipButton";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useActiveSectionContext } from "../../hooks/useActiveSectionContext";
import { useState } from "react";
const navList = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Project", path: "#project" },
  { name: "Contact", path: "#contact" },
];
const navVar = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};
const Nav = () => {
  const [showNav, setShowNav] = useState(true);
  const { activeSection, setActiveSection } = useActiveSectionContext();
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 200) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  });
  return (
    <motion.div
      variants={navVar}
      initial="initial"
      animate={showNav ? "animate" : "exit"}
      className={`fixed bg-transparent top-12 left-1/2  flex items-center justify-around  -translate-x-1/2 ${
        activeSection === "About" || activeSection === "Project"
          ? "text-black"
          : "text-white"
      } z-[999] overflow-hidden`}
    >
      <ul className="h-full w-full flex flex-row items-center justify-center gap-10 uppercase pb-2">
        {navList.map((item) => (
          <li
            key={item.name}
            className="relative  px-2"
            onClick={() => setActiveSection(item.name)}
          >
            <FlipButton href={item.path} title={item.name} />
            {item.name === activeSection && (
              <motion.div
                layoutId="underline"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="bg-[#FF98A2] w-[100%] h-[2px] absolute bottom-[-6px] left-0 -z-10"
              ></motion.div>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Nav;
