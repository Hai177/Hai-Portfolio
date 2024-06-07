import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../components/Modal";
import RowProject from "../components/RowProject";
import { useSectionInView } from "../hooks/useSectionInView";
const projects = [
  {
    title: "Auvers Sur Oise",
    src: "auvers-sur-oise.jpg",
    color: "#000000",
  },
  {
    title: "Starry Night",
    src: "starry-night.jpg",
    color: "#8C8C8C",
  },
  {
    title: "View Of Arles",
    src: "view-of-arles.jpg",
    color: "#EFE8D3",
  },
  {
    title: "Wheate Field",
    src: "wheat-field.jpg",
    color: "#706D63",
  },
];
const Project = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { ref } = useSectionInView("Project",0.3);
  
  return (
    <div id="project" className="h-[100vh] w-full z-10  flex flex-col gap-5 overflow-hidden " ref={ref}>
      <motion.p
        whileInView={{
          y: 0,
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        style={{
          y: 0,
          x: -100,
          opacity: 0,
          fontFamily: "Playfair Display",
        }}
        transition={{ duration: 1, ease: [0.17, 0.55, 0.55, 1], delay: 0.4 }}
        className="text-[3rem] mt-[5%] ml-[2%] "
      >
        Project.
      </motion.p>
      <p className="self-center font-semibold">Recent work</p>
      <div>
        <div className=" w-[80%] h-auto overflow-hidden mx-auto ">
          {projects.map((project, index) => (
            <RowProject
              key={project.title}
              title={project.title}
              index={index}
              setModal={setModal}
            />
          ))}
        </div>
        <Modal modal={modal} projects={projects} />
      </div>
    </div>
  );
};

export default Project;
