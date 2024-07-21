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
    <header className="z-[100]">
      <motion.div
        {...nav}
        className="fixed left-1/2 top-8 flex h-12 w-[40%] -translate-x-1/2 items-center justify-around overflow-hidden rounded-full border border-gray-300 bg-white font-medium shadow-lg shadow-black/[0.06] backdrop-blur-[0.5rem]"
      ></motion.div>
      <motion.ul className="fixed left-1/2 top-8 flex h-12 w-[40%] -translate-x-1/2 items-center justify-around rounded-full bg-transparent">
        {headerList.map((item, index) => (
          <motion.li
            variants={liVar}
            initial="initial"
            animate="animate"
            custom={index}
            className="relative flex h-3/4 items-center justify-center font-semibold text-gray-400 duration-300 ease-linear hover:text-gray-950"
            key={item.name}
            onClick={() => setActiveSection(item.name)}
          >
            <a
              className={`flex h-full w-[60%] items-center justify-center rounded-full p-3 py-3 ${
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
                className="absolute bottom-0 -z-10 h-full w-full rounded-full bg-[#FF98A2]"
              ></motion.div>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </header>
  );
};

export default Header;
