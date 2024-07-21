/* eslint-disable react/prop-types */

const RowProject = ({ title, index, setModal }) => {
  return (
    <div
      style={{ transition: "all 0.2s linear" }}
      className="group flex items-center justify-between border border-x-0 border-b-gray-400 p-7 hover:opacity-[0.4]"
      onMouseEnter={() => {
        setModal({ active: true, index: index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index: index });
      }}
    >
      <h2
        className="text-[2rem] font-semibold uppercase group-hover:translate-x-[10px] max-md:text-[1rem]"
        style={{ transition: "all 0.2s linear" }}
      >
        {title}
      </h2>
      <span
        className="items-end text-center text-[14px] group-hover:translate-x-[-10px]"
        style={{ transition: "all 0.2s linear" }}
      >
        Design & Development
      </span>
    </div>
  );
};

export default RowProject;
