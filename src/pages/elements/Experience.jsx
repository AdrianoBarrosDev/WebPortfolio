import PropTypes from "prop-types";
import styled from "styled-components";
import { Buttons } from "../../components/ExperienceButtons";
import { ActiveExperienceProvider } from "../../contexts/ActiveExperienceContext";
import { ExperienceDetails } from "../../data/InfoBoxExperience";
import "../../styles/Experience.css";
import "../../styles/Global.css";

/* Custom Section */
const ExperienceSection = styled.section`
    background-color: #1C2027; 
    border-radius: 20px; 
    height: 888px; 
    z-index: 0;

    /* Config Mobile */
    @media (max-width: 992px) {
        height: auto;
        width: 101%;
    }

`;

/* Styled div to contain experience elements */
const BoxExperience = styled.div`

    height: 100%;
    z-index: 1;

    .title {
        width: 350px;
        margin: 70px 0px 100px 0px; 
        font-size: 60px;
        font-weight: bold;
        font-family: "Readex Pro", serif;
        text-align: start;
    }

    /* Config Mobile */
    @media (max-width: 992px) {

        display: block;
        justify-content: center;
        align-items: center;
        
        .title {
            margin: 30px 0px 0px 0px;
            width: 100%;
            font-size: 45px;
            text-align: center;
        }

    }

`;

/* Styled div to display experience information */
const InfoBox = styled.div`
    width: 72%;
    color: #9696A6;
    border-radius: 20px;
    margin-top: 0px 0px 0px 0px;
    font-family: "Readex Pro", serif;

    /* Config Mobile */
    @media (max-width: 992px) {
        width: 100%;
    }
`;

/* Contain the design line as part of the background decoration */
const CurvedLine = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1; /* To stay behind */
`;

export function Experience(props) {

    return (

        /* Main container */
        <ExperienceSection className="container-fluid p-0 position-relative" id={props.id} style={{marginBottom: "250px"}}>

            <BoxExperience className="row col-lg-10 p-4 ps-lg-5">

                <ActiveExperienceProvider>
                    <div className="col-lg-3 ms-lg-4" data-aos="fade-right" data-aos-duration="800">
                        <div className="waveColor title">Experience</div>
                        <Buttons />
                    </div>
                    <div className="col-lg d-flex flex-column justify-content-center align-items-lg-end align-items-center" style={{ overflow: "hidden" }}>
                        <InfoBox>
                            <ExperienceDetails />
                        </InfoBox>
                    </div>
                </ActiveExperienceProvider>

            </BoxExperience>
            <CurvedLine>
                <svg width="100%" height="100%" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        d="M-10,525 C300,100 1100,300 1440,-135" 
                        stroke="rgb(255, 255, 255, 0.05)" 
                        strokeWidth="20" 
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                    />
                </svg>
            </CurvedLine>

        </ExperienceSection>

    );

}

Experience.propTypes = {
    id: PropTypes.string.isRequired,
}