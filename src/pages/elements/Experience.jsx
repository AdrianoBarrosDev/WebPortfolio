import PropTypes from "prop-types";
import styled from "styled-components";
import { Buttons } from "../../components/ExperienceButtons";
import { ExperienceDetails } from "../../components/InfoBoxExperience";
import { ActiveSectionProvider } from "../../contexts/ActiveSectionContextExperience";
import "../../styles/Experience.css";
import "../../styles/Global.css";

const BoxExperience = styled.div`
    width: 800px;
    height: 636px;
    color: #2D2E4D;
    background-color: #9696A6;
    border-radius: 20px;
    margin-top: 0px 0px 0px 0px;
    font-family: "Readex Pro", serif;
`;

const Rectangle = styled.div`
    width: 335px;
    height: 166px;
    background-color: #2D2E4D;
    border-end-end-radius: 30px;
    margin: -170px 0px 0px -155px;
    transform: rotate(31deg);
`;

const LineBox = styled.div`
    width: 500px;
    height: 114px;
    display: flex;
    justify-content: center;
    background-color: transparent;
    margin-top: 170px;
    border-bottom: 3px solid #2D2E4D;
    border-right: 3px solid #2D2E4D;
`;

const Line = styled.div`
    width: 100px;
    height: 3px;
    background-color: #2D2E4D;
    margin-top: 45px;
    transform: rotate(125deg);
`;

export function Experience(props) {

    return (

        /* Main container */
        <section className="container-fluid pe-lg-0" id={props.id}>

            <header className="d-flex justify-content-center justify-content-lg-start align-items-center">
                <h2 className="waveColor ms-0 ms-lg-4" style={{ marginBottom: "100px" }}>Experience</h2>
            </header>
            <div className="row">

                <ActiveSectionProvider>
                    <div className="col-3 ms-4">
                        <Buttons />
                    </div>
                    <div className="col d-flex flex-column align-items-end" style={{overflow: "hidden"}}>
                        <BoxExperience>
                            <ExperienceDetails />
                        </BoxExperience>
                        <LineBox>
                            <Line />
                            <Line />
                            <Line />
                            <Line />
                        </LineBox>
                    </div>
                </ActiveSectionProvider>

            </div>
            <Rectangle />

        </section>

    );

}

Experience.propTypes = {
    id: PropTypes.string.isRequired,
}