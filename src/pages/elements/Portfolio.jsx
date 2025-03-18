import PropTypes from "prop-types";
import styled from "styled-components";
import { SliderPortfolio } from "../../components/Slider";
import "../../styles/Global.css";

/* Decorative lines */
const Lines = styled.div`
    width: 64px;
    height: 64px;
    border-top: 2px solid #9696A6;
    border-left: 2px solid #9696A6;
`;

export function Portfolio(props) {

    return (
        <section className="container-fluid pe-lg-0 ps-lg-5" id={props.id}>

            <div className="row d-none d-lg-block">
                <Lines></Lines>
            </div>

            <header>
                <h2 className="row d-flex justify-content-center align-items-center waveColor">Portfolio</h2>
            </header>
            
            {/* Component that will generate the slider */}
            <SliderPortfolio />
                
            <div className="row d-none d-lg-block" style={{marginTop: "90px"}}>
                <Lines style={{transform: "rotate(270deg)"}}></Lines>
            </div>

        </section>
    )
}

Portfolio.propTypes = {
    id: PropTypes.string.isRequired,
}
