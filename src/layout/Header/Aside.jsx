import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { bgAside } from "../../utils/animate";
const socialLink = [
  {
    icon: <FaFacebook />,
    link: "#4",
  },
  {
    icon: <FaGithub />,
    link: "#5",
  },
  {
    icon: <FaLinkedin />,
    link: "#6",
  },
];
const iconVar = {
  initial: {
    scale: 0,
  },
  animate: (index) => ({
    scale: 1,
    transition: {
      delay: 1 + 0.06 * index,
      type: "spring",
      stiffness: 250,
      damping: 40,
    },
  }),
};

const Aside = () => {
  return (
    <motion.div
      {...bgAside}
      className="fixed top-1/2  left-3 flex flex-col gap-3 bg-[#FF98A2] rounded-full p-2 text-[black] z-[999] shadow-lg shadow-black/[0.1]"
    >
      {socialLink.map((item, index) => (
        <motion.a
          variants={iconVar}
          initial="initial"
          animate="animate"
          custom={index}
          href={item.link}
          key={item.link}
          className="text-[22px] cursor-pointer"
          whileHover={{
            scale: 1.2,
            transition: {
              type: "spring",
              stiffness: 280,
              damping: 40,
            },
          }}
        >
          {item.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Aside;
