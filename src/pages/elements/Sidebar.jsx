import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';


/* Rectangle next to the button in sidebar */
const Rectangle = styled.div`
    background-color: #9696A6;
    border-radius: 10px;
    width: 7px;
    height: 31px;
    transition: margin-top 0.3s ease-in-out;
    position: absolute;
`;


/* Centering the div in the page */
const CenterDiv = styled.div`
    color: #9696A6;
    position: fixed;
    top: 50%;
    transform: translate(150%, -50%);
    margin-left: 7.5vw;
    z-index: 1;
    opacity: 0;
    transition: opacity 1s ease-out, transform 0.8s ease-in-out;

    &.show {
        opacity: 1;
        transform: translate(-50%, -50%);
    }

`;


/* Default Button Settings */
const Button = styled.button`
    margin: 0;
    padding: 0;
    color: inherit;
    background-color: transparent;
    border: none;
    font-size: 30px;
    font-family: "Readex Pro", serif;
`;


/* Configuration of Active or Disabled Buttons */
const ActiveButton = styled(Button)`
    opacity: 1;
`;
const DisabledButton = styled(Button)`
    opacity: 0.15;
`;


export function Sidebar() {

    const sections = ["top", "portfolio", "experience", "contact"];
    const [activeSection, setActiveSection] = useState("top");
    const [marginTopValue, setMarginTopValue] = useState(6);
    const sidebarRef = useRef(null);


    // Function activated when a button is pressed
    const handleClick = section => {
        setActiveSection(section);
        document.getElementById(section)?.scrollIntoView({behavior: "smooth"});
        moveRectangle(section);
    }

    // Function to verify which section we are
    const handleScroll = () => {
        sections.forEach((section) => {

            const sectionElement = document.getElementById(section);
            if(sectionElement) {
                const rect = sectionElement.getBoundingClientRect();

                // If top is in the window
                if(rect.top <= window.innerHeight && rect.bottom >= 0) {
                    setActiveSection(section);
                    moveRectangle(section);
                }
            }

        });
    }

    useEffect(() => {

        // Add event to scroll
        window.addEventListener("scroll", handleScroll);

        // Clean the event
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }

    });

    /* Function to move the rectangle next to the pressed button */
    const moveRectangle = (section) => {
        const sectionRect = document.getElementById(`btn${section}`)?.getBoundingClientRect();
        const navRect = document.getElementById("divBtns")?.getBoundingClientRect();

        if (sectionRect && navRect) {
            const marginTop = sectionRect.top - navRect.top;
            setMarginTopValue(marginTop + 6);
        }
    }

    useEffect(() => {
        // Aplica a classe "show" após a montagem do componente
        setTimeout(() => {
            if (sidebarRef.current) {
                sidebarRef.current.classList.add("show");
            }
        }, 0);
    }, []);

    return (
        <div style={{ position: "relative", zIndex: "2" }}>
            <CenterDiv className="row p-0 hidden" ref={sidebarRef}>

                    <div className="d-flex justify-content-end col p-0">
                        <Rectangle style={{marginTop: `${marginTopValue}px`}}></Rectangle>
                    </div>
                    
                    {/* Initialize the buttons in the sidebar and apply the respective styled-components */}
                    <div id="divBtns" className="col pe-3">
                        {sections.map((section) => (
                            <Button 
                                className="d-flex justify-content-center align-items-center"
                                key={section}
                                id={`btn${section}`}
                                onClick={() => {
                                    handleClick(section);
                                }} as={activeSection === section ? ActiveButton : DisabledButton} 
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </Button>
                        ))}
                    </div>

            </CenterDiv>
        </div>

    );
}