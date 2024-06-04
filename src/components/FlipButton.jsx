/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";

const slideFirst = {
  initial: {
    y: 0,
  },
  animate: {
    y: -40,
    transition: {
      duration: 0.3,
      ease: [0.76, 0, 0.24, 1],
      type: "tween",
    },
  },
};
const slideSecond = {
  initial: {
    y: 40,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.76, 0, 0.24, 1],
      type: "tween",
    },
  },
};
const FlipButton = ({ title, href }) => {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={href}
      className="relative cursor-pointer overflow-hidden rounded-full"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <FlipRow
        title={title}
        variants={slideFirst}
        hover={hover}
       
      />
      <div className="absolute top-0">
        <FlipRow
          title={title}
          variants={slideSecond}
          hover={hover}
          bg={"bg-[#FF98A2]"}
        />
      </div>
    </a>
  );
};

const FlipRow = ({ title, variants, hover }) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate={hover ? "animate" : "initial"}
      className={`h-4 leading-4 whitespace-nowrap relative  `}
    >
      {title}
    </motion.div>
  );
};
export default FlipButton;
