import { memo, useState } from "react";

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
  const { ref } = useSectionInView("Project", 0.3);

  return (
    <div
      id="project"
      className="z-10 mb-[10%] flex w-full flex-col items-center gap-5 overflow-hidden"
      ref={ref}
    >
      <div className="mask2 max-md:text-[4rem]">project</div>
      <p className="self-center font-semibold">Recent work</p>
      <div className="w-full">
        <div className="mx-auto h-auto w-[90%] overflow-hidden">
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

export default memo(Project);
