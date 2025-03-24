import PropTypes from "prop-types";
import styled from "styled-components";
import { Projects } from "../../components/Projects";
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
        <section className="container-fluid pe-lg-0" id={props.id}>

            <div className="row d-none d-lg-flex position-relative">
                <Lines />
                <Lines style={{ position: "absolute", right: "12px", transform: "rotate(90deg)" }}/>
            </div>

            <h2 className="row d-flex justify-content-center align-items-center waveColor">Portfolio</h2>

            <Projects />
                
            <div className="row d-none d-lg-block position-relative" style={{marginTop: "71px"}}>
                <Lines style={{ marginTop: "12px", transform: "rotate(270deg)" }} />
                <Lines style={{ position: "absolute", right: "12px", transform: "rotate(180deg)" }}/>
            </div>

        </section>
    )
}

Portfolio.propTypes = {
    id: PropTypes.string.isRequired,
}
