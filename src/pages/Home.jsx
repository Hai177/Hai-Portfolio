import { motion } from "framer-motion";
import ParallaxText from "../components/ParallaxText";
import anim from "../utils/animate";
import OverLay from "../components/OverLay";
import { useSectionInView } from "../hooks/useSectionInView";
import { memo } from "react";
const titleFirstVar = {
  initial: {
    y: 100,
  },
  animate: {
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
      ease: [0.45, 0, 0.55, 1],
    },
  },
};

const Home = () => {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <div
      id="home"
      className="relative h-[120vh] w-full bg-gray-900 p-[5%] py-[12%] max-md:h-[100vh]"
      ref={ref}
    >
      <OverLay />
      <div className="flex flex-col items-end gap-10 max-md:gap-5">
        <div className="overflow-hidden uppercase">
          <motion.div
            {...anim(titleFirstVar)}
            className="mask3 text-wrap font-bold leading-[6rem] max-md:text-[4rem]"
            style={{
              fontFamily: "Bodoni Moda",
            }}
          >
            From Code to Creation
          </motion.div>
        </div>
        <div className="overflow-hidden text-[2.8rem] font-semibold uppercase leading-[2.8rem] max-[768px]:text-[2rem]">
          <motion.div {...anim(titleFirstVar)} className="text-white">
            A Portfolio by <span className="text-[#ff98a2]">Hai</span>.
          </motion.div>
        </div>
        <div className="flex flex-row gap-[6rem] text-white">
          <div className="overflow-hidden">
            <motion.div
              className="text-[14px] font-light"
              {...anim(titleFirstVar)}
            >
              Base in
            </motion.div>
            <motion.div className="font-semibold" {...anim(titleFirstVar)}>
              Viet Nam
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              className="text-[14px] font-light"
              {...anim(titleFirstVar)}
            >
              Get in touch
            </motion.div>
            <motion.div className="font-semibold" {...anim(titleFirstVar)}>
              haihv@gmail.com
            </motion.div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-[6%] left-0 w-full max-md:bottom-0"
        style={{
          fontFamily: "Bodoni Moda",
        }}
      >
        <ParallaxText />
      </div>
    </div>
  );
};

export default memo(Home);
