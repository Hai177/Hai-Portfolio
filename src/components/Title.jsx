/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Title = ({ title, color }) => {
  return (
    <motion.div
      whileInView={{
        y: 0,
        x: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      className={`text-[3rem] ${color} absolute left-[2%] top-[10%]`}
      style={{
        y: 0,
        x: -100,
        opacity: 0,
        fontFamily: "Playfair Display",
      }}
      transition={{ duration: 1, ease: [0.17, 0.55, 0.55, 1], delay: 0.4 }}
    >
      {title}
    </motion.div>
  );
};

export default Title;
