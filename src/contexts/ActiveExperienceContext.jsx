import PropTypes from "prop-types";
import { createContext, useState } from "react";

// Create a new context to hold the active experience information.
const ActiveExperienceContext = createContext();

// ActiveExperienceProvider component which wraps its children with the context provider.
export function ActiveExperienceProvider({ children }) {
    // useState hook is used to manage the 'activeExperience' state.
    // Initially, it is set to "unisantosBachelorDegree" as the default active experience.
    const [activeExperience, setActiveExperience] = useState("unisantosBachelorDegree");

    return (
        // The Provider component provides the 'activeExperience' and 'setActiveExperience' values 
        // to all the child components that are inside this provider.
        <ActiveExperienceContext.Provider value={{ activeExperience, setActiveExperience }}>
            {children}  {/* The child components will have access to 'activeExperience' and 'setActiveExperience' */}
        </ActiveExperienceContext.Provider>
    );
}

// Export the ActiveExperienceContext for use in other components.
export default ActiveExperienceContext;

// PropTypes validation to ensure the 'children' prop passed to the provider is of type 'node' (i.e., any renderable content).
ActiveExperienceProvider.propTypes = {
    children: PropTypes.node.isRequired,  // 'children' prop is required and must be a valid React node.
};
