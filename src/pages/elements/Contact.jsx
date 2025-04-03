import PropTypes from "prop-types";
import { useRef } from "react";
import styled from "styled-components";
import { ContactForm } from "../../components/ContactForm.jsx";
import Earth from "../../components/Earth";
import Stars from "../../components/Stars";
import "../../styles/Global.css";

/* Circle to profile image */
const Circle = styled.div`
    width: 37vw;
    height: 37vw;
    min-width: 300px;
    min-height: 300px;
    padding: 0;
    border-radius: 50%;
    background: linear-gradient(90deg, #9696A6 0%, #696BB3 15%, #2D2E4D 88%);
    background-position: 40% 10%;
    background-size: 110%;
    background-repeat: no-repeat;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out;
    z-index: 1;
`;

const StarDiv = styled.div`
    position: absolute;
    margin-top: "-100px";
    z-index: 0;
    overflow: hidden;

    @media (max-width: 1440px) {
        height: 200vh;
    }
`;

const EarthDiv = styled.div`
    margin-left: 280px; 
    overflow: visible; 
    position: absolute;

    @media (max-width: 1440px) {
        margin-left: 0px;
        margin-top: -100px;
        position: relative;
    }
`;

const ContactDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 0;
    overflow: hidden;

    @media (max-width: 1440px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export function Contact(props) {

    const parentDivRef = useRef();

    return (
        <section className="container-fluid p-0 overflow-hidden position-relative" id={props.id}>

            {/* Profile Image */}
            <div 
                className="row align-items-center" 
                style={{ position: "relative", zIndex: "1" }} 
                
                // Animations
                data-aos="fade-up" 
                data-aos-duration="800"
            >

                <img src="./images/RectangleContact.png" alt="Rectangle" style={{position: "absolute", zIndex: "-1", minHeight: "250px", padding: "0"}}/>
                <div className="d-flex justify-content-center align-items-center circleBox p-0 position-relative">
                    <Circle>
                        <Circle style={{ transform: "scale(0.965)", backgroundImage: "url('/images/PictureAdriano.jpeg')" }} />
                    </Circle>
                </div>

            </div>

            {/* 3D stars model */}
            <StarDiv ref={parentDivRef}>
                <Stars parentDivRef={parentDivRef} />
            </StarDiv>

            {/* Contact Section */}
            <ContactDiv>
                
                {/* 3D earth model */}
                <EarthDiv
                    // Animation
                    data-aos="fade-left" 
                    data-aos-duration="800"
                >
                    <Earth />
                </EarthDiv>
                
                {/* Contact form component that allows user to send a messagge via email */}
                <ContactForm/>
                
            </ContactDiv>
            

        </section>
    );
}

Contact.propTypes = {
    id: PropTypes.string.isRequired,
}