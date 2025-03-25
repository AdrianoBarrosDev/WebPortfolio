import styled from "styled-components";

const LeftColumn = styled.div`
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
`;

const RightColumn = styled.div`
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

const BestFeatures = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 611px;
    height: auto;
    background-color: #12151A;
    border: 1px solid #2D2E4D;
    border-radius: 5px;
    padding-inline: 40px;
    padding-block: 30px;
    font-family: "Readex Pro", serif;
    gap: 38px;

    img {
        width: 33px;
        height: 33px;
    }
    .titleFeatures {
        color: rgb(255, 255, 255, 0.8);
        font-weight: bold;
        font-size: 25px;
        margin: 0;
    }
    .features {
        color: rgb(150, 150, 166, 0.8);
        font-size: 1vw;
    }
    .circle {
        width: 1vw;
        height: 1vw;
        border: none;
        border-radius: 50%;
        background: linear-gradient(-90deg, #2D2E4D 0%, #696BB3 100%);
    }

`;

export function InfoProjectDetails({ nameProject }) {

    if(nameProject === "healthyClinics") {
        return (
            <div className="row d-flex justify-content-center" style={{marginTop: "40px", gap: "200px"}}>

                <LeftColumn className="col-5">

                    <div className="d-flex align-items-center gap-4">
                        <BackButton onClick={() => window.location.href="/"}>
                            <img src="./images/DetailsArrow.png" alt="Arrow"/>
                            Voltar
                        </BackButton>
                        <PathDiv>
                            <div className="first">Projects</div>
                            <div className="separator">&gt;</div>
                            <div className="last">Healthy Clinics</div>
                        </PathDiv>
                    </div>

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

                    <div className="d-flex gap-5" style={{marginLeft: "36px"}}>
                        <InfoButtons>
                            <div className="circle"> 
                                <img src="./images/CodeIcon.png" alt="Code Icon" />
                            </div>
                            <div>
                                <div className="mainText">5</div>
                                <div className="secondaryText">Tecnologias Usadas</div>
                            </div>
                        </InfoButtons>

                        <InfoButtons>
                            <div className="circle"> 
                                <img src="./images/CodeIcon.png" alt="Code Icon" />
                            </div>
                            <div>
                                <div className="mainText">5</div>
                                <div className="secondaryText">Tecnologias Usadas</div>
                            </div>
                        </InfoButtons>
                    </div>

                    <h2>
                        <img src="./images/CodeIcon.png" alt="Code Icon" />
                        <div>Tecnologias</div>
                    </h2>
                    <div className="d-flex justify-content-start gap-1 col-10 flex-wrap">
                        <TechnologiesLabel>Java</TechnologiesLabel>
                        <TechnologiesLabel>SQL</TechnologiesLabel>
                        <TechnologiesLabel>Hibernate</TechnologiesLabel>
                        <TechnologiesLabel>Maven</TechnologiesLabel>
                        <TechnologiesLabel>POO</TechnologiesLabel>
                    </div>
                    
                </LeftColumn>

                <RightColumn className="col-4">
                    <img src="./images/HealthyClinicsThumb.png" alt="Healthy Clinics" />
                    <BestFeatures>
                        <div className="d-flex gap-3">
                            <img src="./images/FeatureIcon.png" alt="Feature Icon" />
                            <h2 className="titleFeatures">Principais Funcionalidades</h2>
                        </div>

                        <div>
                            <div className="d-flex justify-content-start align-items-center gap-2">
                                <div className="circle" />
                                <div className="features">Cadastro e Gerenciamento de Contas</div>
                            </div>
                            <div className="d-flex justify-content-start align-items-center gap-2">
                                
                            </div>
                            <div className="d-flex justify-content-start align-items-center gap-2">
                                <div className="circle" />
                                <div className="features">Agendamento e Controle de Status de Consultas</div>
                            </div>
                            <div className="d-flex justify-content-start align-items-center gap-2">
                                <div className="circle" />
                                <div className="features">Gerenciamento de Clínicas</div>
                            </div>
                            <div className="d-flex justify-content-start align-items-center gap-2">
                                <div className="circle" />
                                <div className="features">Relatórios Médicos das Consultas</div>
                            </div>
                            <div className="d-flex justify-content-start align-items-center gap-2">
                                <div className="circle" />
                                <div className="features">Gestão de Médicos</div>
                            </div>
                            <div className="d-flex justify-content-start align-items-center gap-2">
                                <div className="circle" />
                                <div className="features">Validações de Informações</div>
                            </div>
                        </div>

                    </BestFeatures>
                </RightColumn>
                
            </div>
        );
    }


    if(nameProject === "brainTumorSystem") {
        return (
            <div className="row d-flex justify-content-center" style={{marginTop: "40px", gap: "200px"}}>

                <LeftColumn className="col-5">

                    <div className="d-flex align-items-center gap-4">
                        <BackButton onClick={() => window.location.href="/"}>
                            <img src="./images/DetailsArrow.png" alt="Arrow"/>
                            Voltar
                        </BackButton>
                        <PathDiv>
                            <div className="first">Projects</div>
                            <div className="separator">&gt;</div>
                            <div className="last">Brain Tumor System</div>
                        </PathDiv>
                    </div>

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

                    <div className="d-flex gap-5" style={{marginLeft: "36px"}}>
                        <InfoButtons>
                            <div className="circle"> 
                                <img src="./images/CodeIcon.png" alt="Code Icon" />
                            </div>
                            <div>
                                <div className="mainText">5</div>
                                <div className="secondaryText">Tecnologias Usadas</div>
                            </div>
                        </InfoButtons>

                        <InfoButtons>
                            <div className="circle"> 
                                <img src="./images/CodeIcon.png" alt="Code Icon" />
                            </div>
                            <div>
                                <div className="mainText">5</div>
                                <div className="secondaryText">Tecnologias Usadas</div>
                            </div>
                        </InfoButtons>
                    </div>

                    <h2>
                        <img src="./images/CodeIcon.png" alt="Code Icon" />
                        <div>Tecnologias</div>
                    </h2>
                    <div className="d-flex justify-content-start gap-1 col-10 flex-wrap">
                        <TechnologiesLabel>Python</TechnologiesLabel>
                        <TechnologiesLabel>Yolo</TechnologiesLabel>
                        <TechnologiesLabel>Ultralytics</TechnologiesLabel>
                        <TechnologiesLabel>Deep Learning</TechnologiesLabel>
                        <TechnologiesLabel>Machine Learning</TechnologiesLabel>
                    </div>
                    
                </LeftColumn>

                <RightColumn className="col-4">
                    <img src="./images/BrainTumorSystemThumb.png" alt="Healthy Clinics" />
                    <BestFeatures>
                        <div className="d-flex gap-3">
                            <img src="./images/FeatureIcon.png" alt="Feature Icon" />
                            <h2 className="titleFeatures">Principais Funcionalidades</h2>
                        </div>

                        <div>
                            <div className="d-flex justify-content-start align-items-center gap-2">
                                <div className="circle" />
                                <div className="features">Segmentação de Tumores Cerebrais</div>
                            </div>
                            <div className="d-flex justify-content-start align-items-center gap-2">
                                
                            </div>
                            <div className="d-flex justify-content-start align-items-center gap-2">
                                <div className="circle" />
                                <div className="features">Treinamento de Modelos de Inteligência Artificial</div>
                            </div>
                            <div className="d-flex justify-content-start align-items-center gap-2">
                                <div className="circle" />
                                <div className="features">Visualização e Manipulação de Imagem</div>
                            </div>
                        </div>

                    </BestFeatures>
                </RightColumn>
                
            </div>
        );
    }


    if(nameProject === "webPortfolio") {
        return (
            <div className="row d-flex justify-content-center" style={{marginTop: "40px", gap: "200px"}}>

                <LeftColumn className="col-5">

                    <div className="d-flex align-items-center gap-4">
                        <BackButton onClick={() => window.location.href="/"}>
                            <img src="./images/DetailsArrow.png" alt="Arrow"/>
                            Voltar
                        </BackButton>
                        <PathDiv>
                            <div className="first">Projects</div>
                            <div className="separator">&gt;</div>
                            <div className="last">Web Portfolio</div>
                        </PathDiv>
                    </div>

                    <h1>Web Portfolio</h1>
                    <p>
                        Este portfólio foi criado para destacar minhas habilidades, conhecimentos e os projetos em que estive envolvido. Ele funciona como uma vitrine da minha proficiência em diversas tecnologias 
                        e da minha capacidade de desenvolver soluções web inovadoras e funcionais. Através desta plataforma, meu objetivo é demonstrar minhas competências e atrair potenciais empregadores ou colaboradores 
                        interessados em novos projetos e oportunidades.
                    </p>

                    <div className="d-flex gap-5" style={{marginLeft: "36px"}}>
                        <InfoButtons>
                            <div className="circle"> 
                                <img src="./images/CodeIcon.png" alt="Code Icon" />
                            </div>
                            <div>
                                <div className="mainText">8</div>
                                <div className="secondaryText">Tecnologias Usadas</div>
                            </div>
                        </InfoButtons>

                        <InfoButtons>
                            <div className="circle"> 
                                <img src="./images/CodeIcon.png" alt="Code Icon" />
                            </div>
                            <div>
                                <div className="mainText">5</div>
                                <div className="secondaryText">Tecnologias Usadas</div>
                            </div>
                        </InfoButtons>
                    </div>

                    <h2>
                        <img src="./images/CodeIcon.png" alt="Code Icon" />
                        <div>Tecnologias</div>
                    </h2>
                    <div className="d-flex justify-content-start gap-1 col-10 flex-wrap">
                        <TechnologiesLabel>HTML</TechnologiesLabel>
                        <TechnologiesLabel>CSS</TechnologiesLabel>
                        <TechnologiesLabel>JavaScript</TechnologiesLabel>
                        <TechnologiesLabel>Three.JS</TechnologiesLabel>
                        <TechnologiesLabel>React</TechnologiesLabel>
                        <TechnologiesLabel>Vite</TechnologiesLabel>
                        <TechnologiesLabel>Styled Components</TechnologiesLabel>
                        <TechnologiesLabel>BootStrap</TechnologiesLabel>
                    </div>
                    
                </LeftColumn>

                <RightColumn className="col-4">
                    <img src="./images/WebPortfolioThumb.png" alt="Healthy Clinics"/>
                    <BestFeatures>
                        <div className="d-flex gap-3">
                            <img src="./images/FeatureIcon.png" alt="Feature Icon" />
                            <h2 className="titleFeatures">Principais Funcionalidades</h2>
                        </div>

                        <div>
                            <div className="d-flex justify-content-start align-items-center gap-2">
                                <div className="circle" />
                                <div className="features">Modelo 3D Three.JS</div>
                            </div>
                            <div className="d-flex justify-content-start align-items-center gap-2">
                                
                            </div>
                            <div className="d-flex justify-content-start align-items-center gap-2">
                                <div className="circle" />
                                <div className="features">Visualização Detalhada de Projetos</div>
                            </div>
                            <div className="d-flex justify-content-start align-items-center gap-2">
                                <div className="circle" />
                                <div className="features">Exposição de Certificados e Tech Stacks</div>
                            </div>
                            <div className="d-flex justify-content-start align-items-center gap-2">
                                <div className="circle" />
                                <div className="features">Experiências Acadêmicas</div>
                            </div>
                            <div className="d-flex justify-content-start align-items-center gap-2">
                                <div className="circle" />
                                <div className="features">Contato pelo Site</div>
                            </div>
                        </div>

                    </BestFeatures>
                </RightColumn>
                
            </div>
        );
    }

}