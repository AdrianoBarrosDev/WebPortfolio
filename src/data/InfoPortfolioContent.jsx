import { useState } from "react";
import styled from "styled-components";
import { InfoProjectBox } from "./InfoProjectBox";

const Content = styled.div`
    .hiddenBox {
        opacity: 0;
        transform: scale(0.8) translateY(50px);
        transition: opacity 1s ease, transform 2s ease;
    }

    .show {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
`;

const ProjectBox = styled.div`
    width: 465px;
    height: 462px;
    background-color: #12151A;
    border: 1px solid #2D2E4D;
    border-radius: 5px;
    padding: 0;

    /* Mobile Config */
    @media (max-width: 510px) {
        width: 90vw;
        height: auto;
        padding-bottom: 20px;
    }
`;

const CertificateBox = styled.div`
    width: 465px;
    height: 336px;
    background-color: #12151A;
    border: 1px solid #2D2E4D;
    border-radius: 5px;
    padding: 10px;

    img {
        width: 100%;
        height: auto;
    }

    /* Mobile Config */
    @media (max-width: 510px) {
        width: 90vw;
        height: auto;
    }
`;

const TechBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 206px;
    height: 188px;
    background-color: #12151A;
    border-radius: 10px;
    color: white;

    img {
        width: 113px;
        height: 113px;
    }

    /* Mobile Config */
    @media (max-width: 510px) {
        width: 137px;
        height: 125px;

        img {
            width: 75px;
            height: 75px;
        }
    }
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
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: #2A2F3A;
    }
`;

export function ProjectsContent() {

    const projectList = ["healthyClinics", "brainTumorSystem", "webPortfolio", "inovaRede", "inovaRedeServer"];
    const initialProjects = projectList.slice(0, 6);
    const [labelButton, setLabelButton] = useState("Mostrar Mais");

    const handleClick = () => {
        setLabelButton(labelButton === "Mostrar Mais" ? "Mostrar Menos" : "Mostrar Mais");
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="row justify-content-center align-items-center gap-4" style={{marginTop: "60px"}}>
                {initialProjects.map((item) => (
                    <ProjectBox 
                        key={item} 
                        className="col-lg-4 col-12 hiddenBox"

                        // Animations
                        data-aos="zoom-in"
                        data-aos-duration="800"
                    >
                        <InfoProjectBox nameProject={item}/>
                    </ProjectBox>
                ))}
            </div>

            <div
                data-aos="fade-up"
                data-aos-duration="800"
                style={{marginTop: "65px"}}
            >
                <ToggleViewButton onClick={handleClick}>{labelButton}</ToggleViewButton>
            </div>
        </div>
    );
}

export function CertificateContent() {

    const certificateList = ["obi", "oboi"];
    return (
        <>
            <div className="row justify-content-center align-items-center gap-4" style={{marginTop: "60px"}}>
                {certificateList.map((item) => (
                    <CertificateBox 
                        key={item} 
                        className="col-lg-4 col-12"

                        // Animations
                        data-aos="zoom-in"
                        data-aos-duration="800"
                    >
                        <img src={`./images/${item.toUpperCase()}Certificate.png`} alt={`${item.toUpperCase()} Certificate`} />
                    </CertificateBox>
                ))}
            </div>
        </>
    );
    
}

export function TechContent() {

    const techList = ["Python", "C++", "JAVA", "SpringBoot", "Node JS", "GIT", "HTML", "CSS", "JavaScript", "React", "Vite", "Bootstrap"];
    const pathImageTechList = ["Python", "Cpp", "Java", "SpringBoot", "NodeJS", "Git", "Html", "Css", "JavaScript", "React", "Vite", "Bootstrap"];
    return (
        <>
            <div className="row justify-content-center align-items-center gap-4" style={{marginTop: "60px", width: "93.31%"}}>
                {techList.map((item, index) => (
                    <TechBox 
                        key={item} 
                        className="col-lg-4 col-12"

                        // Animations
                        data-aos="zoom-in"
                        data-aos-duration="800"
                    >
                        <img src={`./images/TechIcons/${pathImageTechList[index]}.png`} alt={`${item} Image`} />
                        {item}
                    </TechBox>
                ))}
            </div>
        </>
    );
    
}