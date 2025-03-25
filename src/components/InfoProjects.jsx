import styled from "styled-components";

const Information = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 25px 0px 25px;
    font-family: "Readex Pro", serif;
    color: #9696A6;

    img {
        width: 415px;
        height: 245px;
    }

    h4 {
        align-self: start;
        margin-block: 20px 10px;
    }

    p {
        font-size: 12px;
        font-weight: bold;
        color: rgba(150, 150, 166, 0.5);
    }

    /* Mobile Config */
    @media (max-width: 510px) {
        img {
            width: 100%;
            height: auto;
        }
    }

`;

// Project Button
const ProjectButton = styled.button`
    display: flex;
    width: 140px;
    height: 40px;
    color: white;
    background-color: #1C2027;
    border: none;
    border-radius: 5px;
    font-size: 11px;
    font-weight: bold;
    position: relative;
    transition: border 0.2s ease;
    z-index: 1;
    text-align: start;
    padding: 11px;
    gap: 18px;

    img {
        width: 18px;
        height: 18px;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, #2D2E4D, #696BB3);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease-in-out;
        z-index: -1;
        border-radius: 5px;
    }

    &:hover::before,
    &:focus::before {
        transform: scaleX(1);
    }
`;

// Details Button
const DetailsButton = styled.button`
    display: flex;
    width: 107px;
    height: 40px;
    background-color: #1C2027;
    color: #9696A6;
    border: none;
    border-radius: 5px;
    font-size: 12px;
    font-weight: bold;
    font-family: "Readex Pro", serif;
    padding: 12px;
    gap: 13px;

    img {
        width: 15px;
        height: 15px;
        margin-top: 1px;
    }
`;

export function InfoProjects ({ nameProject }) {

    if(nameProject === "healthyClinics") {
        return (
            <Information>

                <img src="./images/HealthyClinicsThumb.png" alt="HealthyClinics"/>
                <h4>Healthy Clinics</h4>
                <p>O software é uma plataforma de saúde que conecta pacientes, médicos e responsáveis por clínicas, facilitando o agendamento de consultas, a gestão de clínicas e o registro de informações médicas.</p>
                <div className="col-12 d-flex justify-content-between">
                    <ProjectButton 
                        target="_blank"
                        onClick={() => window.open("https://github.com/AdrianoBarrosDev/HealthyClinics.git")}>
                        Projeto Github
                        <img src="./images/LinkIcon.png" alt="Link Icon" />
                    </ProjectButton>
                    <DetailsButton onClick={() => window.location.href="/healthyClinics"}>
                        Detalhes
                        <img src="./images/DetailsArrow.png" alt="Arrow Icon" />
                    </DetailsButton>
                </div>

            </Information>
        );
    }

    if(nameProject === "brainTumorSystem") {
        return (
            <Information>

                <img src="./images/BrainTumorSystemThumb.png" alt="BrainTumorSystem"/>
                <h4>Brain Tumor System</h4>
                <p>Sistema para detecção de tumores cerebrais em imagens de ressonância magnética, utilizando algoritmos de processamento de imagens e inteligência artificial para identificar anomalias.</p>
                <div className="col-12 d-flex justify-content-between">
                    <ProjectButton 
                        target="_blank"
                        onClick={() => window.open("https://github.com/AdrianoBarrosDev/BrainTumorSystem.git")}>
                        Projeto Github
                        <img src="./images/LinkIcon.png" alt="Link Icon" />
                    </ProjectButton>
                    <DetailsButton onClick={() => window.location.href="/brainTumorSystem"}>
                        Detalhes
                        <img src="./images/DetailsArrow.png" alt="Arrow Icon" />
                    </DetailsButton>
                </div>

            </Information>
        );
    }

    if(nameProject === "webPortfolio") {
        return (
            <Information>

                <img src="./images/WebPortfolioThumb.png" alt="WebPortfolio"/>
                <h4>Web Portfolio</h4>
                <p>Desenvolvimento do meu site pessoal para exibir minhas habilidades, projetos e experiências profissionais de forma clara e atraente, destacando meu portfólio e competências.</p>
                <div className="col-12 d-flex justify-content-between">
                    <ProjectButton 
                        target="_blank"
                        onClick={() => window.open("https://github.com/AdrianoBarrosDev/WebPortfolio.git")}>
                        Projeto Github
                        <img src="./images/LinkIcon.png" alt="Link Icon" />
                    </ProjectButton>
                    <DetailsButton onClick={() => window.location.href="/webPortfolio"}>
                        Detalhes
                        <img src="./images/DetailsArrow.png" alt="Arrow Icon" />
                    </DetailsButton>
                </div>
                
            </Information>
        );
    }

}