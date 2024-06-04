import { useState } from "react";
import Modal from "../components/Modal";
import RowProject from "../components/RowProject";

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

  return (
    <div className="h-[100vh] w-full z-10">
      <div>
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
  );
};

export default Project;
