import { motion } from "framer-motion";
import { useState } from "react";
import { nav } from "../../utils/animate";

const headerList = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

const liVar = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8 + 0.05 * index,
      ease: [0.45, 0, 0.55, 1],
      damping: 40,
    },
  }),
};

const Header = () => {
  const [activeSection, setActiveSection] = useState("Home");
  return (
    <header className="z-[9999]">
      <motion.div
        {...nav}
        className=" border  border-gray-300 fixed top-8 left-1/2 h-12 w-[40%] flex items-center justify-around rounded-full -translate-x-1/2 shadow-lg shadow-black/[0.06] overflow-hidden backdrop-blur-[0.5rem] bg-white font-medium "
      ></motion.div>
      <motion.ul className=" fixed bg-transparent top-8 left-1/2 h-12 w-[40%] flex items-center justify-around rounded-full -translate-x-1/2 ">
        {headerList.map((item, index) => (
          <motion.li
            variants={liVar}
            initial="initial"
            animate="animate"
            custom={index}
            className="font-semibold relative h-3/4 flex items-center justify-center text-gray-400 hover:text-gray-950 ease-linear duration-300"
            key={item.name}
            onClick={() => setActiveSection(item.name)}
          >
            <a
              className={`flex  justify-center p-3 py-3 items-center h-full w-[60%] rounded-full ${
                activeSection === item.name ? "text-black" : ""
              }`}
              href={item.path}
            >
              {item.name}
            </a>
            {item.name === activeSection && (
              <motion.div
                layoutId="under"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="bg-[#FF98A2] rounded-full w-full h-full absolute bottom-0 -z-10"
              ></motion.div>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </header>
  );
};

export default Header;
