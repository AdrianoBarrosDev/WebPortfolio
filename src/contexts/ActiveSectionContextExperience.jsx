import PropTypes from "prop-types";
import { createContext, useState } from "react";

// Create a new context to hold the active section information.
const ActiveSectionContext = createContext();

// ActiveSectionProvider component which wraps its children with the context provider.
export function ActiveSectionProvider({ children }) {
    // useState hook is used to manage the 'activeSection' state.
    // Initially, it is set to "unisantosBachelorDegree".
    const [activeSection, setActiveSection] = useState("unisantosBachelorDegree");

    return (
        // The Provider component provides the 'activeSection' and 'setActiveSection' values 
        // to all the child components that are inside this provider.
        <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
            {children}  {/* The children components will have access to 'activeSection' and 'setActiveSection' */}
        </ActiveSectionContext.Provider>
    );
}

// Export the ActiveSectionContext for use in other components.
export default ActiveSectionContext;

// PropTypes validation to ensure the 'children' prop passed to the provider is of type 'node' (i.e., any renderable content).
ActiveSectionProvider.propTypes = {
    children: PropTypes.node.isRequired,  // children prop is required and must be a valid React node.
};