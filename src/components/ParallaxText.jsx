/* eslint-disable react/prop-types */

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const ParallaxText = () => {
  const container = useRef();
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  return (
    <div className="overflow-hidden text-white">    
      <div ref={container}>
        <Slider
          text={" Front-end Developer -"}
          left={"-45%"}
          scrollYProgress={scrollYProgress}
          direction="left"
        ></Slider>
        <Slider
          text={" Creative Developer -"}
          left={"-15%"}
          scrollYProgress={scrollYProgress}
          direction="right"
        ></Slider>
        
      </div>
    </div>
  );
};

const Slider = ({  left, scrollYProgress,direction,text }) => {
  const directions=direction=="left"?1:-1
  const x = useTransform(scrollYProgress, [0, 1], [150*directions, -150*directions]);
  return (
    <motion.div
      className="relative flex flex-row gap-5"
      style={{ left, x }}
    >
      <Phrase  text={text}></Phrase>
      <Phrase  text={text}></Phrase>
      <Phrase  text={text}></Phrase>


     

    </motion.div>
  );
};
const Phrase = ({  text }) => {
  return (
    <div className=" flex flex-row px-2 gap-2 items-center text-nowrap">
      <p className=" text-[4rem] uppercase">{text}</p>
     
    </div>
  );
};
export default ParallaxText;
