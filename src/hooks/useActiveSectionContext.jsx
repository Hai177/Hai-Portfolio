import { useContext } from "react";
import { ActiveSectionProvider } from "../context/activeSection";

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionProvider);
  if (context === null) {
    throw new Error("null");
  }
  return context;
};
