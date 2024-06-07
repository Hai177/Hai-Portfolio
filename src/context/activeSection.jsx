import { createContext,  useState } from "react";

export const ActiveSectionProvider = createContext(null);
// eslint-disable-next-line react/prop-types
const ActiveSectionContextProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("Home");
  return (
    <ActiveSectionProvider.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ActiveSectionProvider.Provider>
  );
};

export default ActiveSectionContextProvider;
