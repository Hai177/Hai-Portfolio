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
      className="relative cursor-pointer overflow-hidden rounded-lg text-[12px] font-semibold uppercase"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        variants={slideFirst}
        initial="initial"
        animate={hover ? "animate" : "initial"}
        className="flex h-full w-full origin-top items-center gap-3 bg-[#ff98a2] p-3"
      >
        <span>{title}</span> <Icon />
      </motion.div>
      <motion.div
        variants={slideSecond}
        initial="initial"
        animate={hover ? "animate" : "initial"}
        className="absolute left-0 top-0 flex h-full w-full origin-bottom items-center gap-3 bg-black p-3 text-white"
      >
        <span>{title}</span> <Icon />
      </motion.div>
    </a>
  );
};

export default FlipButtonIcon;
