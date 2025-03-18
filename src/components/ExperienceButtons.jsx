import { useState } from 'react';
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


/* Centering the div in the page */
const CenterDiv = styled.div`
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
    font-size: 30px;
    font-family: "Readex Pro", serif;
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


export function Buttons() {

    const sections = ["unisantosBachelorDegree", "senacTechnicalCourse", "obi", "oboi"];
    const { activeSection, setActiveSection } = useActiveSection();
    const [marginTopValue, setMarginTopValue] = useState(0);

    // Function activated when a button is pressed
    const handleClick = section => {
        setActiveSection(section);
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

    return (
        <>
            <CenterDiv className="row p-0 m-0">

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
                                }} as={activeSection === section ? ActiveButton : DisabledButton} 
                            >
                                <InfoButtonExperience experience={section} />
                            </Button>
                        ))}
                    </div>

            </CenterDiv>
        </>

    );
}