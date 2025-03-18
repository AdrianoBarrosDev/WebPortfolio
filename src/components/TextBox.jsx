import PropTypes from "prop-types";
import styled from "styled-components";
import "../styles/Slider.css";

/* Center Box of the slider */
const BoxCenter = styled.div`
    width: calc(30%);
    height: 668px;
    padding: 0px;
    margin-top: 236px;
    color: white;
    background-color: #0B0E11;
    border: 3px solid #2D2E4D;
    border-radius: 10px;
    overflow: hidden;
    z-index: 2;
    transform: all 0.3s ease;
`;

/* Side Box of the slider */
const BoxSide = styled.div`
    width: calc(26%);
    height: 638px;
    padding: 0px;
    color: rgba(255, 255, 255, 0.3);
    background-color: #0B0E11;
    border: 3px solid #2D2E4D;
    border-radius: 10px;
    overflow: hidden;
    z-index: 2;
    transform: all 0.3s ease;
`;

/* Back Box of the slider */
const BoxBack = styled(BoxSide)`
    width: calc(26%);
    z-index: 1;
    position: absolute;
    top: 0;
`;


/* Function to return the correct box */
export function TextBox(props) {
    if (props.type === "center") {
        return (
            <BoxCenter className={props.class}>
                {props.children}
            </BoxCenter>
        );
    }

    if (props.type === "sideLeft" || props.type === "sideRight") {
        return (
            <BoxSide className={props.class}>
                {props.children}
            </BoxSide>
        );
    }

    if (props.type === "back") {
        return (
            <BoxBack className={props.class}>
                {props.children}
            </BoxBack>
        );
    }
}

TextBox.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired,
    children: PropTypes.node,
};
