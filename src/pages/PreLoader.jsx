import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
const slideUp = {
  initial: {
    y: 0,
  },
  exit: {
    y: "-100vh",
    transition: {
      duration: 0.8,
      ease: [0.45, 0, 0.55, 1],
    },
  },
};
const text = [
  "Exploring",
  "Seeking",
  "Discussing",
  "Developing",
  "Sharing",
  "Inspiring",
];
const opacity = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "linear",
    },
  },
};
const PreLoader = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index == text.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 250,
    );
  }, [index]);
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 top-0 z-[9999] flex h-[100vh] w-[full] items-center justify-center gap-5 bg-gray-50 text-[3rem] font-medium text-[#ff98a2] max-md:gap-2 max-md:text-[2rem]"
      variants={slideUp}
      initial="initial"
      exit={"exit"}
    >
      <motion.div
        variants={opacity}
        initial="initial"
        animate="animate"
        className="flex flex-row items-center gap-2"
      >
        <span className="text-[2rem] max-md:text-[1rem]">
          <GoDotFill />
        </span>
        <span className="underline">{text[index]}</span>
        <span>ideas</span>
      </motion.div>
    </motion.div>
  );
};

export default PreLoader;
