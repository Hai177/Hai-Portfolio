import { HiOutlineDownload } from "react-icons/hi";
import { GoArrowRight } from "react-icons/go";
import { IoMdHand } from "react-icons/io";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Title from "../components/Title";
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
  const { ref } = useSectionInView("About",0.75);
  return (
    <div
      id="about"
      className="h-[100vh] w-full z-10 flex flex-col gap-5 items-center justify-center relative"
      ref={ref}
    >
      <Title title={"About."} color={"text-gray-950"} />

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
      <div className="flex flex-col gap-5 w-1/3 items-center">
        <div className="font-semibold">Explore my skills</div>
        <ul className="flex flex-row flex-wrap gap-2 w-full items-center justify-center overflow-hidden">
          {skillList3.map((skill, index) => (
            <motion.li
              key={skill}
              variants={skillVar}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              custom={index}
              className=" bg-transparent border border-[#ff98a2] rounded-lg p-3"
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
