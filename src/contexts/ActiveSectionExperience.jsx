import { useContext } from "react";
import ActiveExperienceContext from "./ActiveExperienceContext";

/* Return a context with 'activeExperience' and 'setActiveExperience' from experience section */
export function useActiveSection() {
    return useContext(ActiveExperienceContext);
}