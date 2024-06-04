import { motion } from "framer-motion";
import ParallaxText from "../components/ParallaxText";
import anim from "../utils/animate";
import OverLay from "../components/OverLay";
const titleFirstVar = {
  initial: {
    y: 100,
  },
  animate: {
    y: 0,
    transition: {
      delay: 0.05,
      duration: 1,
      ease: [0.45, 0, 0.55, 1],
    },
  },
};

const Home = () => {
  return (
    <div
      className="h-[120vh] w-full relative bg-gray-900 py-[12%] p-[5%]"
    >
      <OverLay />
      <div className="flex items-end flex-col gap-10">
        <div className="overflow-hidden uppercase">
          <motion.div
            {...anim(titleFirstVar)}
            className="whitespace-nowrap text-[6rem] leading-[6rem] font-bold text-[#ff98a2]"
            style={{
              fontFamily: "Bodoni Moda",
            }}
          >
            From Code to Creation
          </motion.div>
        </div>
        <div className="overflow-hidden text-[2.8rem] leading-[2.8rem] uppercase font-semibold">
          <motion.div {...anim(titleFirstVar)} className="text-white">
            A Portfolio by <span className="text-[#ff98a2]">Hai</span>.
          </motion.div>
        </div>
        <div className="flex flex-row text-white gap-[6rem]">
          <div>
            <div className="text-[14px] font-light">Base in</div>
            <div className="font-semibold">Viet Nam</div>
          </div>
          <div>
            <div className="text-[14px] font-light">Get in touch</div>
            <div className=" font-semibold">haihv@gmail.com</div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-[6%] left-0 w-full"
        style={{
          fontFamily: "Bodoni Moda",
        }}
      >
        <ParallaxText />
      </div>
    </div>
  );
};

export default Home;
