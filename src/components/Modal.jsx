/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";
const scaleVar = {
  initial: {
    scale: 0,
    x: "-50%",
    y: "-50%",
  },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 1] },
  },
};
const Modal = ({ projects, modal }) => {
  const { active, index } = modal;
  const container = useRef(null);

  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    const moveCursorX = gsap.quickTo(cursor.current, "left", {
      duration: 0.4,
      ease: "power3",
    });
    const moveCursorY = gsap.quickTo(cursor.current, "top", {
      duration: 0.4,
      ease: "power3",
    });
    const moveCursorLabelX = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.3,
      ease: "power3",
    });
    const moveCursorLabelY = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.3,
      ease: "power3",
    });
    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      moveContainerX(pageX);
      moveContainerY(pageY);
      moveCursorX(pageX);
      moveCursorY(pageY);
      moveCursorLabelX(pageX);
      moveCursorLabelY(pageY);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={container}
        variants={scaleVar}
        initial={"initial"}
        animate={active ? "open" : "close"}
        className="pointer-events-none absolute flex h-[300px] w-[400px] items-center justify-center overflow-hidden"
      >
        <div
          style={{
            top: index * -100 + "%",
            transition: " top 0.5s cubic-bezier(0.76, 0, 0.24, 1) ",
          }}
          className="absolute h-full w-full"
        >
          {projects.map((project, index) => (
            <div
              className="flex h-full w-full items-center justify-center"
              key={`modal${index}`}
              style={{ backgroundColor: project.color }}
            >
              <img
                src={`/img/${project.src}`}
                alt=""
                style={{ objectFit: "cover" }}
                className="h-auto w-[250px]"
              />
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={scaleVar}
        initial={"initial"}
        animate={active ? "open" : "close"}
        ref={cursor}
        className="pointer-events-none absolute flex size-[60px] cursor-pointer items-center justify-center rounded-full bg-[#ff98a2] font-semibold text-white"
      ></motion.div>
      <motion.div
        variants={scaleVar}
        initial={"initial"}
        animate={active ? "open" : "close"}
        ref={cursorLabel}
        className="pointer-events-none absolute flex size-[60px] cursor-pointer items-center justify-center rounded-full bg-[#ff98a2] text-[12px] font-semibold uppercase text-black"
      >
        View
      </motion.div>
    </>
  );
};

export default Modal;
