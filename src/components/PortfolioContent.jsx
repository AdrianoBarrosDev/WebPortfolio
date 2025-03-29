import { useState } from "react";
import styled from "styled-components";
import { CertificateContent, ProjectsContent, TechContent } from "../data/InfoPortfolioContent";


const ContentButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 465px;
    height: 92px;
    color: #9696A6;
    font-size: 18px;
    font-weight: bold;
    border: 1px solid #2D2E4D;
    border-radius: 10px;

    // Changing the background color with a smooth animation
    background: ${(props) =>
        props.selected
            ? 'linear-gradient(90deg, #9696A6 0%, #2D2E4D 100%)'
            : '#12151A'};
    background-size: ${(props) => (props.selected ? '100% 100%' : '0% 0%')};
    transition: background-size 0.6s ease-in-out, background-color 0.3s ease-in-out;

    img {
        width: 19px;
        height: 19px;
    }

    /* Responsiveness Config */
    @media (max-width: 1785px) {
        width: 20vw;
        height: 10vh;
        border-radius: 5px;
    }

    @media (max-width: 992px) {
        width: 25vw;
        height: 7vh;
        border-radius: 5px;
        font-size: 12px;
    }
`;


export function PortfolioContent() {
    
    const sections = ["projects", "certificates", "techStacks"];
    const [activePortfolioSection, setActivePortfolioSection] = useState(0);

    // Function to switch the active portfolio section and modify the background color of the selected content button
    const handleClick = (nextSection) => {
        document.getElementById(`${sections[activePortfolioSection]}Button`).classList.remove("selected");
        document.getElementById(`${sections[activePortfolioSection]}Button`).classList.add("unselected");

        document.getElementById(`${sections[nextSection]}Button`).classList.remove("unselected");
        document.getElementById(`${sections[nextSection]}Button`).classList.add("selected");
        
        setActivePortfolioSection(nextSection);
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            
            {/* Div to display the content buttons in the portfolio */}
            <div className="d-flex justify-content-center gap-4" style={{marginTop: "60px"}}>
                <ContentButton 
                    id="projectsButton" 
                    className="col-4"
                    selected={activePortfolioSection === 0}
                    onClick={() => handleClick(0)}
                >
                    <img src="./images/ProjectsButtonIcon.png" alt="Project Icon" />
                    Projects
                </ContentButton>
                <ContentButton 
                    id="certificatesButton" 
                    className="col-4" 
                    selected={activePortfolioSection === 1}
                    onClick={() => handleClick(1)}
                >
                    <img src="./images/CertificatesButtonIcon.png" alt="Project Icon" />
                    Certificates
                </ContentButton>
                <ContentButton 
                    id="techStacksButton" 
                    className="col-4"
                    selected={activePortfolioSection === 2}
                    onClick={() => handleClick(2)}
                >
                    <img src="./images/TechButtonIcon.png" alt="Project Icon" />
                    Tech Stacks
                </ContentButton>
            </div>
            
            {/* Displays different content for each portfolio section */}
            {sections[activePortfolioSection] === "projects" && <ProjectsContent />}
            {sections[activePortfolioSection] === "certificates" && <CertificateContent />}
            {sections[activePortfolioSection] === "techStacks" && <TechContent />}
            
        </div>
        

    );

}