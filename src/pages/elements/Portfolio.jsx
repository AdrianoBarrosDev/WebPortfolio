import PropTypes from "prop-types";
import styled from "styled-components";
import { PortfolioContent } from "../../components/PortfolioContent";
import "../../styles/Global.css";

/* Decorative lines */
const Lines = styled.div`
    padding: 0;
    width: 64px;
    height: 64px;
    border-top: 2px solid #9696A6;
    border-left: 2px solid #9696A6;
`;

export function Portfolio(props) {

    return (
        <section className="container-fluid pe-lg-0 pt-0 mt-0" id={props.id} style={{marginBottom: "120px"}}>

            <div className="row d-none d-lg-flex position-relative" data-aos="fade-up" data-aos-duration="800">
                <Lines />
                <Lines style={{ position: "absolute", right: "12px", transform: "rotate(90deg)" }}/>
            </div>

            <h2 
                className="row d-flex justify-content-center align-items-center waveColor"

                // Animation
                data-aos="fade-up"
                data-aos-duration="800"
            >
                Portfolio
            </h2>

            {/* Component responsible for displaying the active portfolio content */}
            <PortfolioContent />
                
            <div className="row d-none d-lg-block position-relative" data-aos="fade-up" data-aos-duration="800" style={{marginTop: "71px"}}>
                <Lines style={{ marginTop: "12px", transform: "rotate(270deg)" }} />
                <Lines style={{ position: "absolute", right: "12px", bottom: 0, transform: "rotate(180deg)" }}/>
            </div>

        </section>
    )
}

Portfolio.propTypes = {
    id: PropTypes.string.isRequired,
}
