import { useState } from "react";
import styled from "styled-components";
import { InfoProjects } from "./InfoProjects";

const ProjectBox = styled.div`
    width: 465px;
    height: 462px;
    background-color: #12151A;
    border: 1px solid #2D2E4D;
    border-radius: 5px;
    padding: 0;
`;

const ToggleViewButton = styled.button`
    width: 130px;
    height: 41px;
    background-color: #1C2027;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 12px;
    font-weight: bold;
    font-family: "Readex Pro", serif;
`;

export function Projects() {

    const projectList = ["healthyClinics", "brainTumorSystem", "webPortfolio", "healthyClinics", "brainTumorSystem", "webPortfolio"];
    const initialProjects = projectList.slice(0, 7);
    const [labelButton, setLabelButton] = useState("Mostrar Mais");

    const handleClick = () => {
        setLabelButton(labelButton === "Mostrar Mais" ? "Mostrar Menos" : "Mostrar Mais");
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            
            <div className="row justify-content-center align-items-center gap-4" style={{marginTop: "60px"}}>
                {initialProjects.map((item) => (
                    <ProjectBox key={item} id="item" className="col-lg-4 col-12">
                        <InfoProjects nameProject={item}/>
                    </ProjectBox>
                ))}
            </div>

            <div className="row" style={{marginTop: "65px"}}>
                <ToggleViewButton onClick={handleClick}>{labelButton}</ToggleViewButton>
            </div>
        </div>
        

    );

}