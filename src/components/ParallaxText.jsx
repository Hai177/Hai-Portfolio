/* eslint-disable react/prop-types */

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const ParallaxText = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  return (
    <div className="overflow-hidden text-white">
      <div ref={container}>
        <Slider
          text={" Front-end Developer -"}
          left={"-75%"}
          scrollYProgress={scrollYProgress}
          direction="left"
        ></Slider>
        <Slider
          text={" Creative Developer -"}
          left={"-35%"}
          scrollYProgress={scrollYProgress}
          direction="right"
        ></Slider>
      </div>
    </div>
  );
};

const Slider = ({ left, scrollYProgress, direction, text }) => {
  const directions = direction == "left" ? 1 : -1;
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [150 * directions, -150 * directions],
  );
  return (
    <motion.div
      className="relative flex flex-row flex-nowrap gap-5 max-md:gap-2"
      style={{ left, x }}
    >
      <Phrase text={text}></Phrase>
      <Phrase text={text}></Phrase>
      <Phrase text={text}></Phrase>
      <Phrase text={text}></Phrase>
    </motion.div>
  );
};
const Phrase = ({ text }) => {
  return (
    <div className="px-2">
      <p className="whitespace-nowrap text-nowrap text-[4rem] uppercase max-md:text-[3rem]">
        {text}
      </p>
    </div>
  );
};
export default ParallaxText;
