
const popupVar = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      delay:0.4,
      type: "spring",
      stiffness: 100,
      damping: 30,
    },
  },
};
const slideVar = {
  animate: {
    y: 0,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  exit: {
    y: 100,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 200,
      damping: 40,
    },
  },
};
const navVar = {
  initial: {
    x: "-50%",
    opacity: 0,
    y: -100,
  },
  animate: {
    x: "-50%",
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.45, 0, 0.55, 1],
    },
  },
};
const bgVar = {
  initial: {
    y: "-50%",
    opacity: 0,
  },
  animate: {
    y: "-50%",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.45, 0, 0.55, 1],
    },
  },
};
const anim = (variants) => {
  return {
    variants,
    initial: "initial",
    animate: "animate",
    exit: "exit",
  };
};
export const popup = anim(popupVar);
export const slide = anim(slideVar);
export const nav = anim(navVar);
export const bgAside = anim(bgVar);

export default anim;
