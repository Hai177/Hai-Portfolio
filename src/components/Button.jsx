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
      className="  border border-gray-300 relative mix-blend-difference shadow-lg shadow-black/[0.05] flex overflow-hidden flex-row items-center rounded-full bg-white p-4 gap-2"
    >
      {children}
      <motion.div
        {...slide}
        animate={slide1 ? "animate" : "exit"}
        className="absolute inset-0 bg-[#FF98A2] -z-10 w-full h-full rounded-full"
      ></motion.div>
    </motion.a>
  );
};

export default Button;
