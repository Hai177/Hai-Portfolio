import { useRef } from "react";
import FlipButton from "../components/FlipButton";
import { useScroll, useTransform, motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";

const socials = [
  {
    name: "Facebook",
    link: "#",
  },
  {
    name: "Instagram",
    link: "#",
  },
  {
    name: "GitHub",
    link: "#",
  },
  {
    name: "Linkedln",
    link: "#",
  },
];
const Contact = () => {
  const contactContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contactContainer,
    offset: ["start end", "0.02 start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [150, -50]);
  const x = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const fade = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const now = new Date().toLocaleString();
  const { ref } = useSectionInView("Contact", 0.75);
  return (
    <div
      ref={ref}
      id="contact"
      className="bg-gray-900 w-full h-[100vh] relative"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
    >
      <div className="w-full h-full relative" ref={contactContainer}>
        <div className="fixed h-[100vh] w-full bottom-0 text-white">
          <div className="w-full h-full flex flex-col relative gap-5">
            <motion.p
              className="text-[5rem] mt-[7%] ml-[10%] "
              style={{ fontFamily: "Playfair Display", x, opacity: fade }}
            >{`Let's work together.`}</motion.p>
            <div className="w-full pl-[10%] flex justify-between">
              <div className="w-[60%] relative">
                <section className="border-t-[1px] border-t-white/[0.2] p-5 px-7 w-full ">
                  <div className="text-[22px] ">{`What's your name?`}</div>
                  <input
                    type="text"
                    required
                    className="w-1/2 bg-transparent focus:outline-0"
                    placeholder="Hai Nguyen *"
                  />
                </section>
                <section className="border-t-[1px] border-t-white/[0.2] p-5 px-7 w-full">
                  <div className="text-[22px] ">{`What's your email?`}</div>
                  <input
                    type="email"
                    required
                    className="w-1/2 bg-transparent focus:outline-0"
                    placeholder="haihv177@gmail.com *"
                  />
                </section>{" "}
                <section className="border-t-[1px] border-t-white/[0.2] p-5 px-7 w-full">
                  <div className="text-[22px] ">{`Your message`}</div>
                  <textarea
                    required
                    name=""
                    id=""
                    rows={4}
                    cols={50}
                    className="w-1/2 bg-transparent focus:outline-0 max-h-32 resize-none overflow-hidden"
                    placeholder="Hello Hai, let's work together ... *"
                  ></textarea>
                </section>
              </div>
              <div className="w-1/3 flex flex-col relative">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  style={{ y }}
                  className="z-2 size-44 rounded-full uppercase absolute top-[0%] right-[50%] cursor-pointer bg-[#ff98a2] translate-x-[50%] translate-y-[-60%] flex items-center justify-center  text-black font-semibold"
                >
                  Send it!
                </motion.div>
              </div>
            </div>
            <div className="justify-items-end flex flex-row justify-between w-full absolute bottom-0 p-[2%]">
              <div className="">
                <div className="font-light uppercase text-[12px] mb-2">
                  Local time
                </div>
                <div className="font-semibold">{now}</div>
              </div>
              <div className="">
                <div className="font-light uppercase text-[12px] mb-2">
                  Contact Details
                </div>
                <div>
                  <div className="font-semibold">haihv177@gmail.com</div>
                  <div className="font-semibold">+84 935 647 651</div>
                </div>
              </div>
              <div>
                <div className="font-light  uppercase text-[12px] mb-2">
                  Socials
                </div>
                <div className="flex flex-row gap-4 font-semibold">
                  {socials.map((social) => (
                    <FlipButton
                      key={social.name}
                      title={social.name}
                      href={social.link}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
