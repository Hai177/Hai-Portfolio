import { memo, useRef } from "react";
import FlipButton from "../components/FlipButton";
import { useScroll, useTransform, motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";

const socials = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100009950355700",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_ha1_______/",
  },
  {
    name: "GitHub",
    link: "https://github.com/Hai177",
  },
  {
    name: "Linkedln",
    link: "https://www.linkedin.com/in/h%E1%BA%A3i-nguy%E1%BB%85n-419668323/",
  },
];
const Contact = () => {
  const contactContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contactContainer,
    offset: ["start end", "0.02 start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [150, -50]);

  const now = new Date().toLocaleString();
  const { ref } = useSectionInView("Contact", 0.75);
  return (
    <div
      ref={ref}
      id="contact"
      className="relative h-[100vh] w-full bg-gray-900"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
    >
      <div className="relative h-full w-full" ref={contactContainer}>
        <div className="fixed bottom-0 h-[100vh] w-full text-white">
          <div className="relative flex h-full w-full flex-col gap-5">
            <div className="mask3 mt-[5%] text-center max-md:px-[5%] max-md:text-[4rem]">
              Get in touch
            </div>
            <div className="flex w-full justify-between pl-[10%] max-md:px-[5%]">
              <div className="relative w-[60%] max-md:w-full">
                <section className="w-full border-t-[1px] border-t-white/[0.2] p-5 px-7">
                  <div className="">{`What's your name?`}</div>
                  <input
                    type="text"
                    required
                    className="w-1/2 bg-transparent focus:outline-0 max-md:w-full"
                    placeholder="Hai Nguyen *"
                  />
                </section>
                <section className="w-full border-t-[1px] border-t-white/[0.2] p-5 px-7">
                  <div className="">{`What's your email?`}</div>
                  <input
                    type="email"
                    required
                    className="w-1/2 bg-transparent focus:outline-0 max-md:w-full"
                    placeholder="haihv177@gmail.com *"
                  />
                </section>{" "}
                <section className="w-full border-t-[1px] border-t-white/[0.2] p-5 px-7">
                  <div className="">{`Your message`}</div>
                  <textarea
                    required
                    name=""
                    id=""
                    rows={4}
                    cols={50}
                    className="max-h-32 w-1/2 resize-none overflow-hidden bg-transparent focus:outline-0 max-md:w-full"
                    placeholder="Hello Hai, let's work together ... *"
                  ></textarea>
                </section>
              </div>
              <div className="relative flex w-1/3 flex-col">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  style={{ y }}
                  className="z-2 absolute right-[50%] top-[0%] flex size-44 translate-x-[50%] translate-y-[-60%] cursor-pointer items-center justify-center rounded-full bg-[#ff98a2] font-semibold uppercase text-black max-md:right-[20%] max-md:top-[20%] max-md:size-32"
                >
                  Send it!
                </motion.div>
              </div>
            </div>
            <div className="absolute bottom-0 mt-10 flex w-full flex-row justify-between justify-items-end gap-2 p-[2%] text-[14px] max-md:px-[5%]">
              <div className="">
                <div className="mb-2 font-light uppercase">Local time</div>
                <div className="font-semibold">{now}</div>
              </div>
              <div className="">
                <div className="mb-2 font-light uppercase">Contact Details</div>
                <div className="flex flex-col">
                  <a href="mailto:haihv177@gmail.com" target="_blank" className="font-semibold cursor-pointer">haihv177@gmail.com</a>
                  <a href="tel:+84935647651" className="font-semibold cursor-pointer">+84 935 647 651</a>
                </div>
              </div>
              <div>
                <div className="mb-2 font-light uppercase">Socials</div>
                <div className="flex flex-row gap-4 font-semibold max-md:flex-col">
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

export default memo(Contact);
