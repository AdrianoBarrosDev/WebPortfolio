import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCircle = styled.div `
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #2D2E4D;
    margin-right: 10px;
`;

const StyledElipse = styled.div`

    width: 1445px;
    height: 323px;
    margin-top: -210px;
    background: radial-gradient(circle, #9696A6 53%, #2D2E4D 100%);
    border-radius: 50%;
    position: relative;
    -webkit-mask: radial-gradient(ellipse 80% 50% at center, transparent 45%, #0B0E11 46%);
    mask: radial-gradient(ellipse 80% 70% at center, transparent 45%, #0B0E11 46%);

`;

const StyledRectangle = styled.div`
    background-color: white;
    border-radius: 30px;  
`;

export function Circle(props) {
    return (
        <StyledCircle style={{ width: props.width, height: props.height}}></StyledCircle>
    );
}

export function Rectangle(props) {
    return (
        <StyledRectangle className={props.bootstrapConfig} style={{width: props.width, height: props.height, backgroundColor: props.color, margin: props.margin}}></StyledRectangle>
    );
}

export function Elipse() {
    return (
        <StyledElipse></StyledElipse>
    );
}

// Validation Props
Rectangle.propTypes = {
    bootstrapConfig: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    color: PropTypes.string,
    margin: PropTypes.string
};

Circle.propTypes = {
    width: PropTypes.string, 
    height: PropTypes.string,
};