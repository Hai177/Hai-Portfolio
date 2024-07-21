import { HiOutlineDownload } from "react-icons/hi";
import { GoArrowRight } from "react-icons/go";
import { IoMdHand } from "react-icons/io";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import FlipButtonIcon from "../components/FlipButtonIcon";
import { useSectionInView } from "../hooks/useSectionInView.jsx";
const paragraph = `Hi, I'm Nguyen Phuoc Hai. I'm a Front-end Developer. I enjoy to
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
const skillVar = {
  initial: {
    y: 100,
  },
  animate: (index) => ({
    y: 0,
    transition: {
      delay: 0.3 + 0.05 * index,
      duration: 0.8,
      ease: [0.45, 0, 0.55, 1],
    },
  }),
};

const skillList3 = [
  "HTML",
  "CSS",
  "Scss",
  "Javascript",
  "Typescript",
  "React",
  "Redux",
  "Framer Motion",
  "Tailwind",
  "Bootstrap",
];
const bold = [0, 1, 2, 3, 4, 7, 8];
const About = () => {
  const paragraphContainer = useRef(null);

  const isInView = useInView(paragraphContainer, { once: true });
  const words = paragraph.split(" ");
  const { ref } = useSectionInView("About", 0.75);
  return (
    <div
      id="about"
      className="relative z-10 flex h-[90vh] w-full flex-col items-center justify-center gap-5 max-md:h-[80vh]"
      ref={ref}
    >
      <div className="mask2 max-md:text-[4rem]">about</div>
      <div className="flex w-1/2 flex-col items-center justify-center gap-5 px-[5%] text-center max-md:w-full">
        <div className="" ref={paragraphContainer}>
          <span>
            {" "}
            <IoMdHand className="size-9 text-yellow-500" />
          </span>
          {words.map((word, index) => (
            <span
              key={word + index}
              className="relative mr-2 inline-flex overflow-hidden"
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
        <motion.div className="flex flex-row gap-5">
          <FlipButtonIcon
            href={"#"}
            title={"Contact me here"}
            Icon={GoArrowRight}
          />
          <FlipButtonIcon
            href={"#"}
            title={"Download CV"}
            Icon={HiOutlineDownload}
          />
        </motion.div>
      </div>
      <div className="flex w-1/3 flex-col items-center gap-5 px-[5%] max-md:w-full">
        <div className="font-semibold">Explore my skills</div>
        <ul className="flex w-full flex-row flex-wrap items-center justify-center gap-2 overflow-hidden">
          {skillList3.map((skill, index) => (
            <motion.li
              key={skill}
              variants={skillVar}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              custom={index}
              className="rounded-lg border border-[#ff98a2] bg-transparent p-3 font-medium text-gray-400 duration-300 ease-in-out hover:scale-105 hover:text-gray-900"
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
