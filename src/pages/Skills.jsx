import OverLay from "../components/OverLay";

const skillList = [
  "HTML",
  "CSS",
  "Scss",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind",
  "Bootstrap",
  "Framer Motion",
  "Redux",
];
const Skills = () => {
  return (
    <div
      className=" w-full h-[100vh] flex flex-col items-center p-[10%] gap-[3rem] z-[10] bg-gray-900 relative overflow-hidden"
      
    >
      <OverLay />
      <h1 className="font-bold text-[3rem] text-[#ff89a2]">My Skills</h1>
      <ul className="flex flex-row w-full gap-3 items-center justify-center">
        {skillList.map((skill) => (
          <li
            key={skill}
            className="border p-5 border-black/[0.1] rounded-xl bg-white"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
