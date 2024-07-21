/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import { popup, slide } from "../utils/animate";

const Button = ({ children }) => {
  const [slide1, setSlide] = useState(false);
  return ( 
    <motion.a
      onMouseEnter={() => setSlide(true)}
      onMouseLeave={() => setSlide(false)}
      {...popup}
      href="#1"
      className="relative flex flex-row items-center gap-2 overflow-hidden rounded-full border border-gray-300 bg-white p-4 mix-blend-difference shadow-lg shadow-black/[0.05]"
    >
      {children}
      <motion.div
        {...slide}
        animate={slide1 ? "animate" : "exit"}
        className="absolute inset-0 -z-10 h-full w-full rounded-full bg-[#FF98A2]"
      ></motion.div>
    </motion.a>
  );
};

export default Button;
