import styled from "styled-components";
import { BestFeaturesProject } from "../components/BestFeaturesProject";

const FirstColumn = styled.div`
    font-family: "Readex Pro", serif;
    
    h1 {
        color: white;
        font-size: 60px;
        font-weight: bold;
        margin-block: 30px;
    }
    h2 {
        display: flex;
        align-items: center;
        margin-top: 60px;
        color: rgb(255, 255, 255, 0.775);
        font-size: 30px;
        font-weight: bold;
        gap: 14px;
    }
    p {
        font-size: 15px;
        color: #9696A6;
        font-family: "Poppins", serif;
    }

    /* Mobile Config */
    @media (max-width: 992px) {
        padding-inline: 35px;

        h1 {
            font-size: 40px
        }
    }
`;

const SecondColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    align-self: flex-start;
    margin-top: 70px;
    gap: 40px;

    img {
        width: 611px;
        height: 350px;
        object-fit: cover;
        border-radius: 5px;
    }
`;

const PathDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-family: "Readex Pro", serif;
    font-size: 14px;
    gap: 11px;
    color: #9696A6;

    .first {
        opacity: 0.2;
    }
    .separator {
        font-family: "Poppins", serif;
        font-size: 18px;
        opacity: 0.2;
    }
    .last {
        opacity: 1;
    }

    /* Mobile Config */
    @media (max-width: 992px) {
        font-size: 11px;
        gap: 10px;

        .separator {
            font-size: 15px;
        }
    }
`;

const BackButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 107px;
    height: 40px;
    background-color: #1C2027;
    color: #9696A6;
    border: none;
    border-radius: 5px;
    font-size: 13px;
    font-weight: bold;
    font-family: "Readex Pro", serif;
    gap: 16px;

    img {
        transform: rotate(180deg);
        width: 16px;
        height: 15px;
    }

    /* Mobile Config */
    @media (max-width: 992px) {
        width: 88px;
        height: 33px;
        font-size: 10px;
        gap: 14px;

        img {
            width: 12px;
            height: 10px;
        }
    }
`;

const InfoButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 241px;
    height: 75px;
    margin-top: 40px;
    color: #9696A6;
    background-color: #12151A;
    border: 1px solid #2D2E4D;
    border-radius: 5px;
    font-family: "Readex Pro", serif;
    font-weight: bold;
    gap: 11px;

    img {
        width: 27px;
        height: 27px;
    }

    .circle {
        width: 45px;
        height: 45px;
        border: none;
        border-radius: 50%;
        background: linear-gradient(-90deg, #2D2E4D 0%, #696BB3 100%);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .mainText {
        font-size: 18px;
    }
    .secondaryText {
        font-size: 15px;
        opacity: 0.4;
    }
    .number {
            font-size: 20px;
        }

    /* Mobile Config */
    @media (max-width: 992px) {
        img {
            width: 25px;
            height: 25px;
        }
        .circle {
            width: 40px;
            height: 40px;
        }
        .mainText {
            font-size: 14px;
        }
        .secondaryText {
            font-size: 10px;
        }
        .number {
            font-size: 20px;
        }
    }
`;

const TechnologiesBox = styled.div`
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
`;

const TechnologiesLabel = styled.div`
    height: 53px;
    padding: 12px 15px 12px 44px;
    background-color: #12151A;
    border: 1px solid #2D2E4D;
    border-radius: 5px;
    color: rgb(255, 255, 255, 0.75);
    font-size: 18px;
    font-weight: bold;
    font-family: "Readex Pro", serif;
    background-image: url('./images/CodeIcon.png');
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: 15px center;
    display: flex;
    align-items: center;
    white-space: nowrap;
`;

const MobileImage = styled.div`
    display: none;
    width: 100%;
    height: 204px;
    border: none;
    margin-block: 52px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        object-fit: cover;
    }

    /* Mobile Config */
    @media (max-width: 992px) {
        display: block;
    }
`;

const MobileLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block: 62px;
    
    img {
        width: 141px;
        height: 112px;
        object-fit: contain;
    }
`;

const MobileFooter = styled.div`
    width: 100vw;
    height: 50px;
    margin-left: -23px;
    background-color: #12151A;
`;

export function InfoProjectDetails({ nameProject }) {

    if(nameProject === "healthyClinics") {
        return (
            <div className="row d-flex justify-content-center" style={{gap: "200px"}}>

                <FirstColumn className="col-lg-5">

                    <div className="d-flex align-items-center gap-lg-4 gap-3">
                        <BackButton onClick={() => window.history.back()}>
                            <img src="./images/DetailsArrow.png" alt="Arrow"/>
                            Voltar
                        </BackButton>
                        <PathDiv>
                            <div className="first">Projects</div>
                            <div className="separator">&gt;</div>
                            <div className="last">Healthy Clinics</div>
                        </PathDiv>
                        <BackButton onClick={() => window.location.href="/brainTumorSystem"}>
                            Próximo
                            <img src="./images/DetailsArrow.png" alt="Arrow" style={{transform: "rotate(0deg)"}}/>
                        </BackButton>
                    </div>

                    <MobileImage>
                        <img src="./images/HealthyClinicsThumb.png" alt="Healthy Clinics" />
                    </MobileImage>

                    <h1>Healthy Clinics</h1>
                    <p>
                        Este projeto tem como objetivo o desenvolvimento de um sistema de gestão para clínicas de saúde, com foco no atendimento tanto de pacientes quanto na agenda de médicos e gestão de clínicas. 
                        O objetivo principal da plataforma é fornecer um ambiente integrado que facilita a marcação de consultas, o gerenciamento das clínicas, o cadastro e controle de usuários, 
                        além de permitir uma comunicação eficiente entre os profissionais de saúde e seus pacientes.
                    </p>
                    <p>
                        A plataforma é dividida em três perfis de usuário: Paciente, Responsável pela Clínica (que também é médico) e Médico. Cada um desses perfis possui funcionalidades específicas e permissões distintas, 
                        permitindo um uso otimizado e personalizado de acordo com as necessidades de cada grupo.
                    </p>

                    <div className="d-flex gap-lg-5 gap-3">
                        <InfoButtons className="left">
                            <div className="circle"> 
                                <img src="./images/CodeIcon.png" alt="Code Icon" />
                            </div>
                            <div>
                                <div className="number">5</div>
                                <div className="secondaryText">Tecnologias Usadas</div>
                            </div>
                        </InfoButtons>

                        <InfoButtons>
                            <div className="circle"> 
                                <img src="./images/CodeIcon.png" alt="Code Icon" />
                            </div>
                            <div>
                                <div className="mainText">Projeto Github</div>
                            </div>
                        </InfoButtons>
                    </div>

                    <div className="d-block d-lg-none">
                        <BestFeaturesProject nameProject={nameProject}/>
                    </div>

                    <h2>
                        <img src="./images/CodeIcon.png" alt="Code Icon" />
                        <div>Tecnologias</div>
                    </h2>
                    <TechnologiesBox className="col-10 gap-1">
                        <TechnologiesLabel>Java</TechnologiesLabel>
                        <TechnologiesLabel>SQL</TechnologiesLabel>
                        <TechnologiesLabel>Hibernate</TechnologiesLabel>
                        <TechnologiesLabel>Maven</TechnologiesLabel>
                        <TechnologiesLabel>POO</TechnologiesLabel>
                    </TechnologiesBox>

                    <MobileLogo className="d-lg-none">
                        <img src="./images/WebsiteLogo.png" alt="Logo Website"/>
                    </MobileLogo>
                    <MobileFooter className="d-flex d-lg-none" />
                    
                </FirstColumn>

                <SecondColumn className="d-none d-lg-flex col-4">
                    <img src="./images/HealthyClinicsThumb.png" alt="Healthy Clinics" />
                    <BestFeaturesProject nameProject={nameProject} />
                </SecondColumn>
                
            </div>
        );
    }


    if(nameProject === "brainTumorSystem") {
        return (
            <div className="row d-flex justify-content-center" style={{gap: "200px"}}>

                <FirstColumn className="col-lg-5">

                    <div className="d-flex align-items-center gap-lg-4 gap-3">
                        <BackButton onClick={() => window.history.back()}>
                            <img src="./images/DetailsArrow.png" alt="Arrow"/>
                            Voltar
                        </BackButton>
                        <PathDiv>
                            <div className="first">Projects</div>
                            <div className="separator">&gt;</div>
                            <div className="last">Brain Tumor System</div>
                        </PathDiv>
                        <BackButton onClick={() => window.location.href="/webPortfolio"}>
                            Próximo
                            <img src="./images/DetailsArrow.png" alt="Arrow" style={{transform: "rotate(0deg)"}}/>
                        </BackButton>
                    </div>

                    <MobileImage>
                        <img src="./images/BrainTumorSystemThumb.png" alt="Healthy Clinics" />
                    </MobileImage>

                    <h1>Brain Tumor System</h1>
                    <p>
                        O sistema utiliza técnicas de aprendizado de máquina e visão computacional para analisar imagens de ressonância magnética (RM) de cérebros humanos, identificando e localizando tumores, 
                        como gliomas, e, em breve, outros tipos de neoplasias. Utilizando modelos pré-treinados, como o YOLO, e frameworks como o PyTorch, o projeto tem como objetivo auxiliar na análise 
                        automatizada de imagens médicas, oferecendo uma ferramenta útil para os profissionais de saúde no diagnóstico precoce e no monitoramento de tumores cerebrais.
                    </p>
                    <p>
                        Essa solução busca otimizar o processo de detecção de anomalias cerebrais, proporcionando maior precisão e agilidade na avaliação de exames de RM, o que pode contribuir 
                        para melhores decisões clínicas e um atendimento mais eficaz aos pacientes.
                    </p>

                    <div className="d-flex gap-lg-5 gap-3">
                        <InfoButtons>
                            <div className="circle"> 
                                <img src="./images/CodeIcon.png" alt="Code Icon" />
                            </div>
                            <div>
                                <div className="number">5</div>
                                <div className="secondaryText">Tecnologias Usadas</div>
                            </div>
                        </InfoButtons>

                        <InfoButtons>
                            <div className="circle"> 
                                <img src="./images/CodeIcon.png" alt="Code Icon" />
                            </div>
                            <div>
                                <div className="mainText">Projeto Github</div>
                            </div>
                        </InfoButtons>
                    </div>

                    <div className="d-block d-lg-none">
                        <BestFeaturesProject nameProject={nameProject}/>
                    </div>

                    <h2>
                        <img src="./images/CodeIcon.png" alt="Code Icon" />
                        <div>Tecnologias</div>
                    </h2>
                    <TechnologiesBox className="col-10 gap-1">
                        <TechnologiesLabel>Python</TechnologiesLabel>
                        <TechnologiesLabel>Yolo</TechnologiesLabel>
                        <TechnologiesLabel>Ultralytics</TechnologiesLabel>
                        <TechnologiesLabel>Deep Learning</TechnologiesLabel>
                        <TechnologiesLabel>Machine Learning</TechnologiesLabel>
                    </TechnologiesBox>

                    <MobileLogo className="d-lg-none">
                        <img src="./images/WebsiteLogo.png" alt="Logo Website"/>
                    </MobileLogo>
                    <MobileFooter className="d-flex d-lg-none" />
                    
                </FirstColumn>

                <SecondColumn className="d-none d-lg-flex col-4">
                    <img src="./images/BrainTumorSystemThumb.png" alt="Healthy Clinics" />
                    <BestFeaturesProject nameProject={nameProject} />
                </SecondColumn>
                
            </div>
        );
    }


    if(nameProject === "webPortfolio") {
        return (
            <div className="row d-flex justify-content-center" style={{gap: "200px"}}>

                <FirstColumn className="col-lg-5">

                    <div className="d-flex align-items-center gap-lg-4 gap-3">
                        <BackButton onClick={() => window.history.back()}>
                            <img src="./images/DetailsArrow.png" alt="Arrow"/>
                            Voltar
                        </BackButton>
                        <PathDiv>
                            <div className="first">Projects</div>
                            <div className="separator">&gt;</div>
                            <div className="last">Web Portfolio</div>
                        </PathDiv>
                        <BackButton onClick={() => window.location.href="/healthyClinics"}>
                            Próximo
                            <img src="./images/DetailsArrow.png" alt="Arrow" style={{transform: "rotate(0deg)"}}/>
                        </BackButton>
                    </div>

                    <MobileImage>
                        <img src="./images/WebPortfolioThumb.png" alt="Healthy Clinics" />
                    </MobileImage>

                    <h1>Web Portfolio</h1>
                    <p>
                        Este portfólio foi criado para destacar minhas habilidades, conhecimentos e os projetos em que estive envolvido. Ele funciona como uma vitrine da minha proficiência em diversas tecnologias 
                        e da minha capacidade de desenvolver soluções web inovadoras e funcionais. Através desta plataforma, meu objetivo é demonstrar minhas competências e atrair potenciais empregadores ou colaboradores 
                        interessados em novos projetos e oportunidades.
                    </p>

                    <div className="d-flex gap-lg-5 gap-3">
                        <InfoButtons>
                            <div className="circle"> 
                                <img src="./images/CodeIcon.png" alt="Code Icon" />
                            </div>
                            <div>
                                <div className="number">8</div>
                                <div className="secondaryText">Tecnologias Usadas</div>
                            </div>
                        </InfoButtons>

                        <InfoButtons>
                            <div className="circle"> 
                                <img src="./images/CodeIcon.png" alt="Code Icon" />
                            </div>
                            <div>
                                <div className="mainText">Projeto Github</div>
                            </div>
                        </InfoButtons>
                    </div>

                    <div className="d-block d-lg-none">
                        <BestFeaturesProject nameProject={nameProject}/>
                    </div>

                    <h2>
                        <img src="./images/CodeIcon.png" alt="Code Icon" />
                        <div>Tecnologias</div>
                    </h2>
                    <TechnologiesBox className="col-10 gap-1">
                        <TechnologiesLabel>HTML</TechnologiesLabel>
                        <TechnologiesLabel>CSS</TechnologiesLabel>
                        <TechnologiesLabel>JavaScript</TechnologiesLabel>
                        <TechnologiesLabel>Three.JS</TechnologiesLabel>
                        <TechnologiesLabel>React</TechnologiesLabel>
                        <TechnologiesLabel>Vite</TechnologiesLabel>
                        <TechnologiesLabel>Styled Components</TechnologiesLabel>
                        <TechnologiesLabel>BootStrap</TechnologiesLabel>
                    </TechnologiesBox>

                    <MobileLogo className="d-lg-none">
                        <img src="./images/WebsiteLogo.png" alt="Logo Website"/>
                    </MobileLogo>
                    <MobileFooter className="d-flex d-lg-none" />
                    
                </FirstColumn>

                <SecondColumn className="d-none d-lg-flex col-4">
                    <img src="./images/WebPortfolioThumb.png" alt="Healthy Clinics"/>
                    <BestFeaturesProject nameProject={nameProject} />
                </SecondColumn>
                
            </div>
        );
    }

}