import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useActiveSection } from '../contexts/ActiveSectionExperience';
import { InfoButtonExperience } from './InfoButtonExperience';


/* Rectangle next to the buttons */
const Rectangle = styled.div`
    background-color: #2D2E4D;
    border-radius: 10px;
    width: 10px;
    height: 120px;
    transition: margin-top 0.3s ease-in-out;
    position: absolute;
`;

const ButtonsDiv = styled.div`
    width: 500px;
    color: #9696A6;
`;

/* Default Button Settings */
const Button = styled.button`
    width: 500px;
    height: 120px;
    margin: 0;
    padding: 0;
    color: inherit;
    background-color: transparent;
    border: none;
    transition: padding 0.3s ease-in-out;

    &:hover {
        padding-left: 30px;
    }
`;

/* Configuration of Active or Disabled Buttons */
const ActiveButton = styled(Button)`
    opacity: 1;
`;
const DisabledButton = styled(Button)`
    opacity: 0.15;
`;

/* Styled dropdown */
const Dropdown = styled.select`
    width: 100%;
    height: 40px;
    background-color: transparent;
    color: #9696A6;
    margin: 40px 0px 40px 0px;
    border: none;
    border-radius: 3px;
    border-left: 3px solid #2D2E4D;
    padding: 10px;
    appearance: none; // Remove the default browser arrow
    background-image: url(./images/Arrow.png); // Add an custom arrow image 
    background-position: 97%;
    background-repeat: no-repeat;

    &:focus {
        outline: 3px solid #9696A6;
    }

`;

/* Styled option */
const DropdownOption = styled.option`
    background-color: #1C2027;
    color: #9696A6;
`;


export function Buttons() {

    const sections = ["unisantosBachelorDegree", "senacTechnicalCourse", "obi", "oboi"]; /* Experience sections */
    const { activeExperience, setActiveExperience } = useActiveSection(); /* State variable for managing the active experience section */
    const [marginTopValue, setMarginTopValue] = useState(0); /* State variable for controlling the top margin */
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); /* State to track the current width of the window */

    // Function activated when a button is pressed
    const handleClick = section => {
        setActiveExperience(section);
        moveRectangle(section);
    }

    /* Function to move the rectangle next to the pressed button */
    const moveRectangle = (section) => {
        const sectionRect = document.getElementById(`btn${section}`)?.getBoundingClientRect();
        const navRect = document.getElementById("experienceBtns")?.getBoundingClientRect();

        if (sectionRect && navRect) {
            const marginTop = sectionRect.top - navRect.top;
            setMarginTopValue(marginTop);
        }
    }
    

    useEffect(() => {
        // Function to handle window resize event
        const handleResize = () => {
            // Clears the previous timeout to avoid multiple rapid event triggers
            clearTimeout(window.resizeTimeout);
    
            // Sets a new timeout to update the window width after resizing
            window.resizeTimeout = setTimeout(() => {
                // Updates the state with the new window width
                setWindowWidth(window.innerWidth);
            }, 200);  // 200ms debounce to prevent excessive updates
    
        };
    
        // Adds event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Cleans up the event listener when the component is unmounted
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    if(windowWidth >= 1005) {
        return (
            <ButtonsDiv className="row p-0 m-0">

                <div className="d-flex justify-content-start p-0" style={{ width: "10px" }}>
                    <Rectangle style={{marginTop: `${marginTopValue}px`}}></Rectangle>
                </div>
                
                {/* Initialize the buttons in the sidebar and apply the respective styled-components */}
                <div id="experienceBtns" className="col-12 ps-4 pe-0">
                    {sections.map((section) => (
                        <Button 
                            className="d-flex justify-content-start align-items-center"
                            key={section}
                            id={`btn${section}`}
                            onClick={() => {
                                handleClick(section);
                            }} as={activeExperience === section ? ActiveButton : DisabledButton} 
                        >
                            <InfoButtonExperience experience={section} />
                        </Button>
                    ))}
                </div>

            </ButtonsDiv>
        );

    } else {

        /* Mobile mode */
        return (
            <>
                {/* Render dropdown for experience options */}
                <Dropdown name="experienceOptions" id="dropdown" onChange={(e) => handleClick(e.target.value)}>
                    {sections.map((section) => (
                        <DropdownOption key={section} value={section}>
                            <InfoButtonExperience experience={section} format="dropdown" />
                        </DropdownOption>
                    ))}
                </Dropdown>
            </>
        );

    }
    
}