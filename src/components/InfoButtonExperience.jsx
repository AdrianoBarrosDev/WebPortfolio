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
        font-size: 20px;
        font-weight: bold;
        font-family: "Readex Pro", serif;
        text-align: left;
        margin: 0;
    }

`;

export function InfoButtonExperience( {experience} ) {

    if(experience === "unisantosBachelorDegree") {
        return (
            <Informations>
                <p>Bacharelado Ciência da Computação</p>
                <p style={{marginTop: "15px"}}>2025 - Presente</p>
            </Informations>
        );
    }

    if(experience === "senacTechnicalCourse") {
        return (
            <Informations>
                <p>Téc. Desenvolvimento de Sistemas</p>
                <p style={{marginTop: "15px"}}>2022 - 2024</p>
            </Informations>
        );
    }

    if(experience === "obi") {
        return (
            <Informations>
                <p>Olímpiada Brasileira de Programação</p>
                <p style={{marginTop: "15px"}}>2024</p>
            </Informations>
        );
    }

    if(experience === "oboi") {
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
}
