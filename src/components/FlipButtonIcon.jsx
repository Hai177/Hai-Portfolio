/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";

const slideFirst = {
  initial: {
    scaleY: 1,
    scale: 1,
    opacity: 1,
  },
  animate: {
    scaleY: 0,
    scale: 1,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};
const slideSecond = {
  initial: {
    scaleY: 0,
    scale: 1,

    opacity: 0,
  },
  animate: {
    scaleY: 1,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};
const FlipButtonIcon = ({ href, title, Icon }) => {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      className="relative cursor-pointer uppercase font-semibold text-[12px] rounded-lg overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        variants={slideFirst}
        initial="initial"
        animate={hover ? "animate" : "initial"}
        className="h-full p-3 bg-[#ff98a2] w-full flex items-center gap-3 origin-top"
      >
        <span>{title}</span> <Icon />
      </motion.div>
      <motion.div
        variants={slideSecond}
        initial="initial"
        animate={hover ? "animate" : "initial"}
        className="absolute bg-black text-white p-3 top-0 left-0 h-full w-full flex items-center gap-3 origin-bottom"
      >
        <span>{title}</span> <Icon />
      </motion.div>
    </a>
  );
};

export default FlipButtonIcon;
