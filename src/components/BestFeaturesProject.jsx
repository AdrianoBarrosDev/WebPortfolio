import styled from "styled-components";

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
    
    .titleFeatures {
        color: rgb(255, 255, 255, 0.8);
        font-weight: bold;
        font-size: 25px;
        margin: 0;
    }
    .features {
        color: rgb(150, 150, 166, 0.8);
        font-size: 16px;
    }
    .circle {
        width: 16px;
        height: 16px;
        border: none;
        border-radius: 50%;
        background: linear-gradient(-90deg, #2D2E4D 0%, #696BB3 100%);
    }

    /* Mobile Config */
    @media (max-width: 1300px) {
        width: 100vw;
        margin-left: -23px;
        margin-top: 56px;
        padding-inline: 30px;
        border: none;

        .titleFeatures {
            font-size: 22px;
        }
        .features {
            font-size: 16px;
        }
    }

`;

export function BestFeaturesProject({ nameProject }) {

    if(nameProject === "healthyClinics") {
        return (
            <BestFeatures>
                <div className="d-flex gap-3">
                    <img src="./images/FeatureIcon.png" alt="Feature Icon" style={{ width: "33px", height: "33px" }}/>
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
                        <div className="features">Agendamento e Controle de Consultas</div>
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
        );
    }
    

    if(nameProject === "brainTumorSystem") {
        return (
            <BestFeatures>
                <div className="d-flex gap-3">
                    <img src="./images/FeatureIcon.png" alt="Feature Icon" style={{ width: "33px", height: "33px" }}/>
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
        );
    }


    if(nameProject == "webPortfolio") {
        return (
            <BestFeatures>
                <div className="d-flex gap-3">
                    <img src="./images/FeatureIcon.png" alt="Feature Icon" style={{ width: "33px", height: "33px" }}/>
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
        );
    }

}