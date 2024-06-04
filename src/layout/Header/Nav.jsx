import { useState } from "react";
import FlipButton from "../../components/FlipButton";
import { motion } from "framer-motion";
const navList = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];
const Nav = () => {
  const [activeSection, setActiveSection] = useState("Home");
  console.log(activeSection);
  return (
    <div className="fixed bg-transparent top-12 left-1/2  flex items-center justify-around  -translate-x-1/2 text-white z-[999] overflow-hidden">
      <ul className="h-full w-full flex flex-row items-center justify-center gap-10 uppercase pb-2">
        {navList.map((item) => (
          <li
            key={item.name}
            className="relative font-extralight px-2"
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
    </div>
  );
};

export default Nav;
