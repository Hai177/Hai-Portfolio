import { useScroll, useTransform, motion } from "framer-motion";
import OverLay from "../components/OverLay";
import Title from "../components/Title";
import { FaSass } from "react-icons/fa";
import {
  SiBootstrap,
  SiCss3,
  SiFramer,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { useRef } from "react";
const skillList = [
  {
    name: "HTML",
    icon: <SiHtml5 />,
  },
  {
    name: "CSS",
    icon: <SiCss3 />,
  },
  {
    name: "Sass",
    icon: <FaSass />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
];
const skillList2 = [
  {
    name: "React",
    icon: <SiReact />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },
  {
    name: "Framer Motion",
    icon: <SiFramer />,
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap />,
  },
  {
    name: "Redux",
    icon: <SiRedux />,
  },
];
const Skills = () => {
  const techContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: techContainer,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  return (
    <div
      className=" w-full h-[100vh] flex flex-col z-[10] relative overflow-hidden"
      ref={techContainer}
    >
      <OverLay />
      <Title title={"Tech."} color={"text-[[#ff98a2]]"} />
      <ul className="flex flex-row w-full gap-5 items-center h-full ">
        {skillList.map((skill) => (
          <motion.li
            style={{ x }}
            key={skill.name}
            className="min-w-[6rem] bg-transparent h-[6rem] rounded-lg flex flex-col gap-5 items-center justify-center border border-[#ff98a2] "
          >
            <div className=" text-black">{skill.icon}</div>
            <div className=" text-sm">{skill.name}</div>
          </motion.li>
        ))}
      </ul>
      <ul className="flex flex-row w-full gap-5 items-center h-full ">
        {skillList2.map((skill) => (
          <motion.li
            style={{ x }}
            key={skill.name}
            className="min-w-[6rem] bg-transparent h-[6rem] rounded-lg flex flex-col gap-5 items-center justify-center border border-[#ff98a2] "
          >
            <div className=" text-black">{skill.icon}</div>
            <div className=" text-sm">{skill.name}</div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
