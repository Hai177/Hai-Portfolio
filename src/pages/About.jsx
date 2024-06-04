import { HiOutlineDownload } from "react-icons/hi";
import { GoArrowRight } from "react-icons/go";
import { IoMdHand } from "react-icons/io";
import { motion, useInView } from "framer-motion";
import Button from "../components/Button";
import OverLay from "../components/OverLay";
import { useRef } from "react";
import Title from "../components/Title";

const paragraph = `Hello, I'm Nguyen Phuoc Hai. I'm a Front-end Developer. I enjoy to
create a beautiful & functional UI for the website. My focus is ReactJS.`;
const wordVar = {
  initial: {
    y: 100,
  },
  animate: (index) => ({
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.8,
      ease: [0.45, 0, 0.55, 1],
    },
  }),
};

const bold = [0, 1, 2, 3, 4, 7, 8];
const About = () => {
  const paragraphContainer = useRef(null);
  const isInView = useInView(paragraphContainer, { once: true });
  const about = useRef();
  console.log(about);
  const words = paragraph.split(" ");
  return (
    <div
      className="h-[100vh] w-full z-10 flex items-center justify-center relative"
      ref={about}
    >
      <Title title={"About."} color={"text-gray-950"} />
      <OverLay />
      <div className="flex w-1/2 flex-col gap-5 items-center justify-center px-[5%] text-center">
        <div className="" ref={paragraphContainer}>
          <span>
            {" "}
            <IoMdHand className="size-9 text-yellow-500 " />
          </span>
          {words.map((word, index) => (
            <span
              key={word + index}
              className="overflow-hidden mr-2 relative inline-flex"
            >
              <motion.span
                className={`relative block ${
                  bold.includes(index) && "font-semibold text-[#FF98A2]"
                } ${index === 23 && "underline decoration-solid"}`}
                variants={wordVar}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                custom={index}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </div>
        <div className="flex w-full flex-row gap-5 items-center justify-center ">
          <Button>
            <span> Contact me here</span>{" "}
            <span>
              <GoArrowRight />
            </span>
          </Button>
          <Button>
            <span>Download CV</span>{" "}
            <span>
              <HiOutlineDownload />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
