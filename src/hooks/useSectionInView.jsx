import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "./useActiveSectionContext";

export const useSectionInView = ( sectionName,threshold ) => {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection } = useActiveSectionContext();
  useEffect(() => {
    if (inView) {
      setActiveSection(sectionName);
    }
  }, [inView,sectionName,setActiveSection]);
  return {ref};
};

