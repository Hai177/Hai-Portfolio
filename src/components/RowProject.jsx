/* eslint-disable react/prop-types */

const RowProject = ({ title, index, setModal }) => {
  return (
    <div
      style={{ transition: "all 0.4s ease" }}
      className="group hover:opacity-[0.4] border border-black border-x-0 p-5 flex justify-between items-center "
      onMouseEnter={() => {
        setModal({ active: true, index: index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index: index });
      }}
    >
      <h2
        className="text-[2rem] group-hover:translate-x-[10px]"
        style={{ transition: "all 0.4s ease" }}
      >
        {title}
      </h2>
      <span
        className="text-[14px] group-hover:translate-x-[-10px]"
        style={{ transition: "all 0.4s ease" }}
      >
        Design & Development
      </span>
    </div>
  );
};

export default RowProject;
