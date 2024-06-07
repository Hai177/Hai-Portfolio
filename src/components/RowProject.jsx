/* eslint-disable react/prop-types */

const RowProject = ({ title, index, setModal }) => {
  return (
    <div
      style={{ transition: "all 0.2s linear" }}
      className="group hover:opacity-[0.4] border border-x-0 p-7 flex justify-between items-center border-b-gray-400 "
      onMouseEnter={() => {
        setModal({ active: true, index: index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index: index });
      }}
    >
      <h2
        className="text-[2rem] group-hover:translate-x-[10px] uppercase font-semibold"
        style={{ transition: "all 0.2s linear" }}
      >
        {title}
      </h2>
      <span
        className="text-[14px] group-hover:translate-x-[-10px]"
        style={{ transition: "all 0.2s linear" }}
      >
        Design & Development
      </span>
    </div>
  );
};

export default RowProject;
