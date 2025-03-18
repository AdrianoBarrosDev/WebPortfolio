import PropTypes from "prop-types";
import styled from "styled-components";
import "../styles/Slider.css";


// Project Button Config
const ProjectButton = styled.button`
    width: 195px;
    color: white;
    background-color: #0B0E11;
    opacity: ${props => props.type === "infoBoxSides" ? "0.3" : "1"}; 
    padding: 14px;
    border: 2px solid white;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    position: relative;
    transition: border 0.2s ease;
    z-index: 1;

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
        border: 2px solid linear-gradient(90deg, #2D2E4D, #696BB3);
        border-radius: 5px;
    }

    &:hover {
        border: 2px solid transparent;
    }

    &:hover::before,
    &:focus::before {
        transform: scaleX(1);
    }
`;


// Line Config
const Line = styled.div`
    width: calc(100%);
    height: 2px;
    margin: 0;
    padding: 0;
    background-color: white;
    opacity: ${props => props.type === "infoBoxSides" ? "0.3" : "1"}; 
`;


/* Information about Web Development */
export function InfoWeb( {infoType} ) {
    return (
        <div className={`container m-0 pt-3 pe-4 ps-4 ${infoType}`}>

            <h3>Desenvolvimento Web</h3>
            <Line type={infoType} />
            
            <div style={{ alignSelf: "flex-start", margin: "0px 8px 0px 8px"}}>
                <h4 style={{marginTop: "24px"}}>Habilidades Técnicas</h4>
                <ul>
                    <li>HTML, CSS, Javascript</li>
                    <li>Typescript</li>
                    <li>Vite + React</li>
                    <li>Styled-Components</li>
                    <li>Node.js</li>
                    <li>Git / Github</li>
                </ul>

                <h4>Experiência</h4>
                <p>
                    Desenvolvi uma base sólida em desenvolvimento web, adquirindo experiência prática na criação de projetos. 
                    Trabalhei com HTML, CSS e JavaScript para construir interfaces modernas e dinâmicas, utilizando React para o desenvolvimento de aplicações interativas.
                </p>
                <p>
                    No back-end, aprofundei meus conhecimentos em Node.js e MySQL, criando APIs REST para integrar o front-end com bancos de dados e garantir a comunicação eficiente entre os sistemas. 
                    Além disso, aprimorei habilidades em controle de versão com Git/GitHub, boas práticas de desenvolvimento e deploy de aplicações web.
                </p>
                <ProjectButton type={infoType}>Projeto Github</ProjectButton>

            </div>

        </div>
    );
}



/* Information about Software Development */
export function InfoSoftware( {infoType} ) {
    return (
        <div className={`container m-0 pt-3 pe-4 ps-4 ${infoType}`}>

            <h3>Desenvolvimento Software</h3>
            <Line type={infoType} />
            
            <div style={{ alignSelf: "flex-start", margin: "0px 8px 0px 8px"}}>
                <h4 style={{marginTop: "24px"}}>Habilidades Técnicas</h4>
                <ul>
                    <li>JAVA</li>
                    <li>Spring Framework</li>
                    <li>JPA / Hibernate</li>
                    <li>JUnit</li>
                    <li>SQL</li>
                    <li>Git / Github</li>
                </ul>

                <h4>Experiência</h4>
                <p>
                    Desenvolvi e implementei soluções utilizando Java como linguagem principal, aplicando o Spring Framework para a criação de APIs RESTful e sistemas escaláveis. 
                    Utilizei JPA/Hibernate para o mapeamento objeto-relacional e integração com bancos de dados, como MySQL, garantindo uma comunicação eficiente entre a aplicação e o banco.
                </p>
                <p>
                    Realizei testes automatizados com JUnit, assegurando a qualidade e confiabilidade das aplicações. Utilizei Git e GitHub para o controle de versão, 
                    adotando práticas de integração contínua e colaboração eficaz dentro do time de desenvolvimento.
                </p>
                <ProjectButton type={infoType}>Projeto Github</ProjectButton>

            </div>

        </div>
    );
}



/* Information about Competitive Programming */
export function InfoCompetitive( {infoType} ) {
    return (
        <div className={`container m-0 pt-3 pe-4 ps-4 ${infoType}`}>

            <h3>Programação Competitiva</h3>
            <Line type={infoType} />
            
            <div style={{ alignSelf: "flex-start", margin: "0px 8px 0px 8px"}}>
                <h4 style={{marginTop: "24px"}}>Habilidades Técnicas</h4>
                <ul>
                    <li>C++</li>
                    <li>Algoritmos</li>
                    <li>Estrutura de Dados</li>
                    <li>Resolução de Problemas</li>
                    <li>Competência Matemática</li>
                </ul>

                <h4 style={{marginTop: "30px"}}>Experiência</h4>
                <p>
                    Participei da Olimpíada Brasileira de Informática (OBI) e alcancei a Fase Nacional.
                </p>
                <p>
                    Medalha de Bronze na Olimpíada Brasileira Online de Informática (OBOI).
                </p>

                <h4 style={{marginTop: "35px"}}>Perfis Competitivos</h4>
                <ul style={{lineHeight: "25px"}}>
                    <li>Codeforces</li>
                    <li>Leetcode</li>
                    <li>Atcoder</li>
                    <li>NepsAcademy</li>
                </ul>

            </div>

        </div>

    );
}



/* Information about AI Projects */
export function InfoAI( {infoType} ) {

    return (
        <div className={`container m-0 pt-3 pe-4 ps-4 ${infoType}`} style={{ height: "inherit" }}>

            <h3>Inteligência Artificial</h3>
            <Line type={infoType} />
            
            <div style={{ margin: "100px 8px 0px 8px"}}>
                <h4>EM DESENVOLVIMENTO</h4>
            </div>

        </div>

    );

}

InfoWeb.propTypes = {
    infoType: PropTypes.string.isRequired,
};
InfoSoftware.propTypes = {
    infoType: PropTypes.string.isRequired,
};
InfoCompetitive.propTypes = {
    infoType: PropTypes.string.isRequired,
};
InfoAI.propTypes = {
    infoType: PropTypes.string.isRequired,
};