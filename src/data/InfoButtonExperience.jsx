import PropTypes from "prop-types";
import styled from "styled-components";

const Informations = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0;
    padding: 0;

    p {
        font-size: clamp(14px, 1vw, 20px);
        font-weight: bold;
        font-family: "Readex Pro", serif;
        text-align: left;
        margin: 0;
    }

`;

export function InfoButtonExperience( {experience, format} ) {

    if(experience === "unisantosBachelorDegree") {
        if(format === "dropdown") return "Bacharelado Ciência da Computação";
        return (
            <Informations>
                <p>Bacharelado Ciência da Computação</p>
                <p style={{marginTop: "15px"}}>2025 - Presente</p>
            </Informations>
        );
    }

    if(experience === "santoScuderi") {
        if(format === "dropdown") return "Maratona Santo Scuderi";
        return (
            <Informations>
                <p>Maratona Santo Scuderi</p>
                <p style={{marginTop: "15px"}}>2025</p>
            </Informations>
        );
    }

    if(experience === "senacTechnicalCourse") {
        if(format === "dropdown") return "Téc. Desenvolvimento de Sistemas";
        return (
            <Informations>
                <p>Téc. Desenvolvimento de Sistemas</p>
                <p style={{marginTop: "15px"}}>2022 - 2024</p>
            </Informations>
        );
    }

    if(experience === "obi") {
        if(format === "dropdown") return "Olímpiada Brasileira de Programação";
        return (
            <Informations>
                <p>Olímpiada Brasileira de Programação</p>
                <p style={{marginTop: "15px"}}>2024</p>
            </Informations>
        );
    }

    if(experience === "oboi") {
        if(format === "dropdown") return "Olímpiada Brasileira Online de Programação";
        return (
            <Informations>
                <p>Olímpiada Brasileira Online de Programação</p>
                <p style={{marginTop: "15px"}}>2024</p>
            </Informations>
        );
    }

}

InfoButtonExperience.propTypes = {
    experience: PropTypes.string.isRequired,
    format: PropTypes.string,
}
