import { useContext } from "react";
import ActiveSectionContext from "./ActiveSectionContextExperience";

/* Return a context with 'activeSection' and 'setActiveSection' from experience */
export function useActiveSection() {
    return useContext(ActiveSectionContext);
}