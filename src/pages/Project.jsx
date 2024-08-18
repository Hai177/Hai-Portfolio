import { memo, useState } from "react";

import Modal from "../components/Modal";
import RowProject from "../components/RowProject";
import { useSectionInView } from "../hooks/useSectionInView";

const projects = [
  {
    title: "Homie Hava Homestay",
    src: "/img/hana.png",
    color: "#000000",
    link: "https://github.com/Hai177/homie-hava-homestay",
  },
  {
    title: "VTI Management",
    src: "/img/vti.png",
    color: "#8C8C8C",
    link: "https://github.com/Hai177/vti-user-management",
  },
  {
    title: "Hoang Profile",
    src: "/img/hoangcv.png",
    color: "#EFE8D3",
    link: "https://github.com/Hai177/hoang-profile",
  },
  {
    title: "Pod Management",
    src: "/img/pod.png",
    color: "#706D63",
    link: "https://github.com/Hai177/homie-hava-homestay",
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
              link={project.link}
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
